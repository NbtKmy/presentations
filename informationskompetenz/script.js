const SHOW_MORE_THRESHOLD = 6;

const state = {
	lang: null,
	selected: new Set(),
	query: "",
	activeThemes: new Set(),
	expanded: new Set(),
};

function detectDefaultLang() {
	const saved = localStorage.getItem("ik-lang");
	if (saved && UI_TEXT[saved]) return saved;
	const browserLang = (navigator.language || "en").slice(0, 2);
	if (UI_TEXT[browserLang]) return browserLang;
	return "en";
}

function renderStaticText(lang) {
	const t = UI_TEXT[lang];
	document.documentElement.lang = lang;
	document.getElementById("site-title").textContent = t.siteTitle;
	document.getElementById("site-intro").textContent = t.siteIntro;
	document.getElementById("footer-note").textContent = t.footerNote;
	document.querySelectorAll(".lang-switch button").forEach((btn) => {
		btn.classList.toggle("active", btn.dataset.langBtn === lang);
	});

	CATEGORIES.forEach((cat) => {
		const section = document.querySelector(`.menu-category[data-category="${cat.key}"]`);
		section.querySelector(".icon").textContent = cat.icon;
		section.querySelector(".cat-title").textContent = cat.title[lang];
		section.querySelector(".category-subtitle").textContent = cat.subtitle[lang];
	});

	document.getElementById("search-input").placeholder = t.searchPlaceholder;
	document.getElementById("facet-summary").textContent = t.facetSummary;
	document.getElementById("no-results").textContent = t.noResultsText;
	renderFacetOptions(lang);
}

function renderFacetOptions(lang) {
	const container = document.getElementById("facet-options");
	container.innerHTML = "";
	THEMES.forEach((theme) => {
		const label = document.createElement("label");
		const checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.value = theme.key;
		checkbox.checked = state.activeThemes.has(theme.key);
		checkbox.addEventListener("change", () => {
			if (checkbox.checked) state.activeThemes.add(theme.key);
			else state.activeThemes.delete(theme.key);
			renderCards(state.lang);
		});
		label.append(checkbox, document.createTextNode(theme.title[lang]));
		container.append(label);
	});
}

function itemMatchesThemes(item) {
	if (state.activeThemes.size === 0) return true;
	return item.tags.some((tag) => state.activeThemes.has(tag));
}

function itemMatchesQuery(item, lang, query) {
	if (!query) return true;
	const haystack = `${item.title[lang]} ${item.desc[lang]}`.toLowerCase();
	return haystack.includes(query);
}

function renderCards(lang) {
	const t = UI_TEXT[lang];
	const query = state.query.trim().toLowerCase();
	let anyVisible = false;

	CATEGORIES.forEach((cat) => {
		const grid = document.querySelector(`[data-grid="${cat.key}"]`);
		grid.innerHTML = "";
		const items = MENU_ITEMS.filter(
			(item) =>
				item.category === cat.key &&
				itemMatchesThemes(item) &&
				itemMatchesQuery(item, lang, query)
		);

		const isExpanded = state.expanded.has(cat.key);
		const visibleItems = isExpanded ? items : items.slice(0, SHOW_MORE_THRESHOLD);

		visibleItems.forEach((item) => {
			const card = document.createElement("article");
			card.className = "menu-card";

			const title = document.createElement("h3");
			title.textContent = item.title[lang];

			const desc = document.createElement("p");
			desc.textContent = item.desc[lang];

			const button = document.createElement("button");
			button.type = "button";
			const isSelected = state.selected.has(item.id);
			card.classList.toggle("selected", isSelected);
			button.textContent = isSelected ? t.addedLabel : t.addLabel;
			button.addEventListener("click", () => toggleItem(item.id));

			card.append(title, desc, button);
			grid.append(card);
		});

		const section = document.querySelector(`.menu-category[data-category="${cat.key}"]`);
		const toggleButton = section.querySelector(".show-more-toggle");
		if (items.length > SHOW_MORE_THRESHOLD) {
			toggleButton.hidden = false;
			toggleButton.textContent = isExpanded ? t.showLessLabel : t.showMoreLabel;
		} else {
			toggleButton.hidden = true;
		}

		section.hidden = items.length === 0;
		if (items.length > 0) anyVisible = true;
	});

	document.getElementById("no-results").hidden = anyVisible;
}

function toggleItem(id) {
	if (state.selected.has(id)) {
		state.selected.delete(id);
	} else {
		state.selected.add(id);
	}
	renderCards(state.lang);
	updateOrderTray();
}

function updateOrderTray() {
	const t = UI_TEXT[state.lang];
	const count = state.selected.size;
	document.getElementById("order-count").textContent =
		count > 0 ? t.orderCountLabel.replace("{n}", count) : t.orderEmptyHint;
	const button = document.getElementById("order-button");
	button.textContent = t.orderButtonLabel;
	button.disabled = count === 0;
}

function buildMailtoLink() {
	const t = UI_TEXT[state.lang];
	const titles = MENU_ITEMS.filter((item) => state.selected.has(item.id)).map(
		(item) => `- ${item.title[state.lang]}`
	);
	const body = [
		t.mailBodyIntro,
		"",
		...titles,
		"",
		t.mailBodyName,
		t.mailBodyAffiliation,
		t.mailBodyPreferredTime,
	].join("\n");
	const params = new URLSearchParams({ subject: t.mailSubject, body });
	return `mailto:nobutake.kamiya@ub.uzh.ch?${params.toString().replace(/\+/g, "%20")}`;
}

function setLang(lang) {
	state.lang = lang;
	localStorage.setItem("ik-lang", lang);
	renderStaticText(lang);
	renderCards(lang);
	updateOrderTray();
}

document.querySelectorAll(".lang-switch button").forEach((btn) => {
	btn.addEventListener("click", () => setLang(btn.dataset.langBtn));
});

document.getElementById("order-button").addEventListener("click", () => {
	window.location.href = buildMailtoLink();
});

document.getElementById("search-input").addEventListener("input", (e) => {
	state.query = e.target.value;
	renderCards(state.lang);
});

document.querySelectorAll(".show-more-toggle").forEach((btn) => {
	btn.addEventListener("click", () => {
		const key = btn.dataset.category;
		if (state.expanded.has(key)) state.expanded.delete(key);
		else state.expanded.add(key);
		renderCards(state.lang);
	});
});

setLang(detectDefaultLang());
