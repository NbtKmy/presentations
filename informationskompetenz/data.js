const UI_TEXT = {
  ja: {
    siteTitle: "日本学 情報リテラシー メニュー",
    siteIntro: "気になるトピックを選んで「注文する」を押してください。選んでいただいた内容について、個別にご相談・レクチャーの機会を設けます。",
    addLabel: "追加する",
    addedLabel: "追加済み ✓",
    orderCountLabel: "選択中: {n} 件",
    orderButtonLabel: "注文する",
    orderEmptyHint: "気になるメニューを選んでください",
    footerNote: "ご質問・ご相談はお気軽にどうぞ。",
    mailSubject: "情報リテラシー相談のご依頼",
    mailBodyIntro: "以下のトピックについて相談を希望します。",
    mailBodyName: "お名前:",
    mailBodyAffiliation: "所属:",
    mailBodyPreferredTime: "ご希望の日時:",
  },
  de: {
    siteTitle: "Informationskompetenz für die Japanologie",
    siteIntro: "Wählen Sie die Themen aus, die Sie interessieren, und klicken Sie auf «Bestellen». Zu den ausgewählten Themen biete ich Ihnen gerne eine individuelle Beratung an.",
    addLabel: "Hinzufügen",
    addedLabel: "Hinzugefügt ✓",
    orderCountLabel: "{n} ausgewählt",
    orderButtonLabel: "Bestellen",
    orderEmptyHint: "Bitte wählen Sie mindestens ein Thema",
    footerNote: "Fragen und Beratungswünsche sind jederzeit willkommen.",
    mailSubject: "Anfrage: Beratung Informationskompetenz",
    mailBodyIntro: "Ich interessiere mich für eine Beratung zu folgenden Themen:",
    mailBodyName: "Name:",
    mailBodyAffiliation: "Institution:",
    mailBodyPreferredTime: "Terminwunsch:",
  },
  en: {
    siteTitle: "Information Literacy for Japanese Studies",
    siteIntro: "Pick the topics that interest you and click \"Order\". I'll get in touch to arrange an individual consultation covering exactly what you selected.",
    addLabel: "Add",
    addedLabel: "Added ✓",
    orderCountLabel: "{n} selected",
    orderButtonLabel: "Order",
    orderEmptyHint: "Please select at least one topic",
    footerNote: "Questions and consultation requests are always welcome.",
    mailSubject: "Consultation request: Information literacy",
    mailBodyIntro: "I would like to request a consultation on the following topics:",
    mailBodyName: "Name:",
    mailBodyAffiliation: "Affiliation:",
    mailBodyPreferredTime: "Preferred date/time:",
  },
};

const CATEGORIES = [
  {
    key: "starters",
    icon: "🥗",
    title: { ja: "前菜", de: "Vorspeisen", en: "Starters" },
    subtitle: {
      ja: "リサーチの基本",
      de: "Recherche-Grundlagen",
      en: "Research basics",
    },
  },
  {
    key: "mains",
    icon: "🍚",
    title: { ja: "主食", de: "Hauptgang", en: "Mains" },
    subtitle: {
      ja: "資料とデータを深く探す",
      de: "Ressourcen & Daten vertiefen",
      en: "Deeper resource & data discovery",
    },
  },
  {
    key: "dessert",
    icon: "🍡",
    title: { ja: "デザート", de: "Dessert", en: "Dessert" },
    subtitle: {
      ja: "デジタル人文学とAI活用",
      de: "Digital Humanities & KI",
      en: "Digital humanities & AI",
    },
  },
];

const MENU_ITEMS = [
  {
    id: "starters-catalog",
    category: "starters",
    title: {
      ja: "図書館カタログで日本語文献を探す",
      de: "Japanische Literatur im Katalog finden",
      en: "Finding Japanese literature in the catalog",
    },
    desc: {
      ja: "swisscoveryで日本語資料（漢字・かな入力やローマ字表記のゆれ）を的確に検索できるようになります。",
      de: "Sie können in swisscovery gezielt nach japanischsprachiger Literatur suchen – auch bei Eingabe in Kanji/Kana oder unterschiedlicher Romanisierung.",
      en: "You'll be able to search swisscovery effectively for Japanese-language materials, including kanji/kana input and romanization variants.",
    },
  },
  {
    id: "starters-cdi",
    category: "starters",
    title: {
      ja: "PrimoVEのCDIとは",
      de: "Was ist der CDI in Primo VE?",
      en: "What is the CDI in Primo VE?",
    },
    desc: {
      ja: "Central Discovery Index（CDI）が何を検索対象にしていて何が含まれないかを理解し、検索結果を正しく解釈できるようになります。",
      de: "Sie verstehen, was der Central Discovery Index (CDI) abdeckt – und was nicht – und können Suchergebnisse richtig einordnen.",
      en: "You'll understand what the Central Discovery Index (CDI) does and doesn't cover, so you can interpret search results correctly.",
    },
  },
  {
    id: "starters-ebooks",
    category: "starters",
    title: {
      ja: "日本語・英語の電子書籍の使い方",
      de: "Japanische und englische E-Books nutzen",
      en: "Using Japanese and English e-books",
    },
    desc: {
      ja: "大学が契約している日本語・英語の電子書籍プラットフォームへのアクセス方法と、閲覧・ダウンロードの際の注意点がわかります。",
      de: "Sie kennen die Zugangswege zu den lizenzierten E-Book-Plattformen (JA/EN) und wissen, worauf beim Lesen und Herunterladen zu achten ist.",
      en: "You'll know how to access the library's licensed Japanese and English e-book platforms and what to watch out for when reading or downloading.",
    },
  },
  {
    id: "starters-databases",
    category: "starters",
    title: {
      ja: "日本学分野のデータベース紹介",
      de: "Datenbanken für die Japanologie",
      en: "Databases for Japanese Studies",
    },
    desc: {
      ja: "日本学研究のために大学が契約している主要データベース（新聞、雑誌記事索引、辞書など）の全体像と使い分けがわかります。",
      de: "Sie erhalten einen Überblick über die wichtigsten lizenzierten Datenbanken für die Japanologie (Zeitungen, Aufsatzindizes, Wörterbücher u.a.) und wissen, wann welche sinnvoll ist.",
      en: "You'll get an overview of the key databases licensed for Japanese Studies (newspapers, article indexes, dictionaries, etc.) and when to use each.",
    },
  },
  {
    id: "starters-ill",
    category: "starters",
    title: {
      ja: "ILL（相互貸借）の注文と条件",
      de: "Fernleihe (ILL): Bestellung & Bedingungen",
      en: "Interlibrary loan (ILL): ordering & conditions",
    },
    desc: {
      ja: "他機関から資料を取り寄せるILLの申し込み方法、費用や日数の目安、日本の資料特有の制約がわかります。",
      de: "Sie wissen, wie Sie Fernleihen bestellen, mit welchen Kosten und Lieferzeiten zu rechnen ist und welche Besonderheiten bei japanischen Materialien gelten.",
      en: "You'll learn how to place ILL requests, expected costs and turnaround times, and the specific constraints that apply to Japanese-language materials.",
    },
  },
  {
    id: "starters-blauer",
    category: "starters",
    title: {
      ja: "Blauer Leihverkehrについて",
      de: "Der Blaue Leihverkehr",
      en: "The \"Blauer Leihverkehr\"",
    },
    desc: {
      ja: "図書館間資料融通制度「Blauer Leihverkehr」の仕組みと、通常のILLとの違い・使い分けが理解できます。",
      de: "Sie verstehen, wie der Blaue Leihverkehr funktioniert und wann er sich gegenüber der klassischen Fernleihe anbietet.",
      en: "You'll understand how this inter-library lending scheme works and when it's a better option than standard ILL.",
    },
  },
  {
    id: "mains-external-db",
    category: "mains",
    title: {
      ja: "自館以外で日本語資料を探すデータベース",
      de: "Externe Datenbanken für japanische Materialien",
      en: "External databases for Japanese materials",
    },
    desc: {
      ja: "資料種別（図書・雑誌・公文書・文化財など）に応じて、NDLサーチやJapan Searchなど外部データベースを使い分けられるようになります。",
      de: "Sie wissen, welche externen Datenbanken (z. B. NDL Search, Japan Search) sich je nach Materialtyp – Bücher, Zeitschriften, Archivalien, Kulturgüter – am besten eignen.",
      en: "You'll know which external databases (e.g. NDL Search, Japan Search) suit which material type — books, journals, archival records, cultural heritage items.",
    },
  },
  {
    id: "mains-open-access",
    category: "mains",
    title: {
      ja: "オープンアクセスサービス",
      de: "Open-Access-Angebote",
      en: "Open access resources",
    },
    desc: {
      ja: "J-STAGEやCiNii、機関リポジトリなど日本語学術情報のオープンアクセス基盤を知り、無料で入手できる文献の探し方がわかります。",
      de: "Sie lernen Open-Access-Plattformen (J-STAGE, CiNii, institutionelle Repositorien u. a.) kennen und wissen, wie Sie frei zugängliche Literatur finden.",
      en: "You'll get to know open-access platforms (J-STAGE, CiNii, institutional repositories, etc.) and how to find freely available literature.",
    },
  },
  {
    id: "mains-rdm",
    category: "mains",
    title: {
      ja: "RDM（研究データ管理）の基礎",
      de: "Grundlagen des Forschungsdatenmanagements (RDM)",
      en: "Research data management (RDM) basics",
    },
    desc: {
      ja: "研究データ管理の基本概念、データ管理計画（DMP）の書き方、大学が提供する支援サービスの概要がわかります。",
      de: "Sie kennen die Grundbegriffe des Forschungsdatenmanagements, wissen, wie ein Datenmanagementplan (DMP) aufgebaut ist, und kennen die Unterstützungsangebote der Universität.",
      en: "You'll learn the core concepts of research data management, how to draft a data management plan (DMP), and what support your university offers.",
    },
  },
  {
    id: "mains-data",
    category: "mains",
    title: {
      ja: "日本学関連データの探し方",
      de: "Daten für die Japanforschung finden",
      en: "Finding data for Japanese Studies",
    },
    desc: {
      ja: "日本研究に使えるオープンデータ・統計データ（政府統計、歴史統計、地理空間データなど）の探索方法がわかります。",
      de: "Sie wissen, wie Sie offene Daten und Statistiken für die Japanforschung (amtliche Statistiken, historische Daten, Geodaten u. a.) recherchieren.",
      en: "You'll learn how to locate open data and statistics relevant to Japanese Studies (official statistics, historical data, geospatial data, etc.).",
    },
  },
  {
    id: "mains-zotero",
    category: "mains",
    title: {
      ja: "Zoteroの使い方",
      de: "Arbeiten mit Zotero",
      en: "Using Zotero",
    },
    desc: {
      ja: "Zoteroで日本語文献を含む文献情報を収集・整理し、レポートや論文の引用・参考文献リストを自動生成できるようになります。",
      de: "Sie können mit Zotero Literatur – auch japanischsprachige Titel – sammeln, organisieren und automatisch in Zitationen und Literaturverzeichnisse einbinden.",
      en: "You'll be able to collect and organize references — including Japanese-language titles — in Zotero and auto-generate citations and bibliographies.",
    },
  },
  {
    id: "dessert-qgis",
    category: "dessert",
    title: {
      ja: "QGISで統計資料を地図化する",
      de: "Statistische Daten mit QGIS kartieren",
      en: "Mapping statistics with QGIS",
    },
    desc: {
      ja: "QGISを使い、統計データを地図上に可視化して地理的な傾向や分布をわかりやすく提示できるようになります。",
      de: "Sie können mit QGIS statistische Daten kartografisch darstellen und geografische Muster anschaulich sichtbar machen.",
      en: "You'll be able to use QGIS to visualize statistical data on maps and reveal geographic patterns clearly.",
    },
  },
  {
    id: "dessert-network",
    category: "dessert",
    title: {
      ja: "ネットワーク分析：関係の近さ・遠さを計算する",
      de: "Netzwerkanalyse: Nähe & Distanz berechnen",
      en: "Network analysis: measuring closeness",
    },
    desc: {
      ja: "ノード・エッジ・中心性などネットワーク分析の基礎を理解し、人物・組織・文献間の関係を可視化できるようになります。",
      de: "Sie verstehen die Grundbegriffe der Netzwerkanalyse (Knoten, Kanten, Zentralität) und können Beziehungen zwischen Personen, Institutionen oder Texten visualisieren.",
      en: "You'll understand core network-analysis concepts (nodes, edges, centrality) and be able to visualize relationships between people, institutions, or texts.",
    },
  },
  {
    id: "dessert-nlp",
    category: "dessert",
    title: {
      ja: "日本語NLPでできること",
      de: "Was japanisches NLP leisten kann",
      en: "What Japanese NLP can do",
    },
    desc: {
      ja: "形態素解析・固有表現抽出・テキストマイニングなど、日本語自然言語処理の基本的な手法と応用例がわかります。",
      de: "Sie lernen grundlegende Verfahren der japanischen Sprachverarbeitung kennen – morphologische Analyse, Named Entity Recognition, Text Mining – und ihre Anwendungsmöglichkeiten.",
      en: "You'll learn the basics of Japanese natural language processing — morphological analysis, named entity recognition, text mining — and their applications.",
    },
  },
  {
    id: "dessert-tei-iiif",
    category: "dessert",
    title: {
      ja: "TEI・IIIFの基礎",
      de: "Grundlagen von TEI & IIIF",
      en: "TEI & IIIF basics",
    },
    desc: {
      ja: "テキストのマークアップ規格TEIと画像共有規格IIIFの基本を理解し、デジタル翻刻・画像公開の第一歩を踏み出せます。",
      de: "Sie verstehen die Grundlagen des Textauszeichnungsstandards TEI und des Bildstandards IIIF und können erste Schritte in digitaler Edition und Bildpublikation gehen.",
      en: "You'll understand the basics of the TEI text-markup standard and the IIIF image standard, enough to take your first steps in digital editing and image publishing.",
    },
  },
  {
    id: "dessert-ocr",
    category: "dessert",
    title: {
      ja: "AIを使った日本語OCR",
      de: "Japanische OCR mit KI",
      en: "AI-based Japanese OCR",
    },
    desc: {
      ja: "AIベースのOCRツールを使ってくずし字や活字の日本語資料をテキスト化する方法と、その精度・限界がわかります。",
      de: "Sie lernen KI-basierte OCR-Werkzeuge kennen, mit denen sich japanische Texte (auch Kuzushiji) digitalisieren lassen, sowie deren Genauigkeit und Grenzen.",
      en: "You'll learn about AI-based OCR tools for digitizing Japanese texts (including cursive kuzushiji script), along with their accuracy and limitations.",
    },
  },
  {
    id: "dessert-ai",
    category: "dessert",
    title: {
      ja: "AI関連技術と研究活用",
      de: "KI-Technologien für die Forschung",
      en: "AI technologies for research",
    },
    desc: {
      ja: "生成AIや機械学習を研究のどの場面でどう使えるか（文献調査、翻訳補助、データ分析など）の見取り図が得られます。",
      de: "Sie erhalten einen Überblick, wo und wie generative KI und maschinelles Lernen im Forschungsprozess sinnvoll eingesetzt werden können (Literaturrecherche, Übersetzungshilfe, Datenanalyse u. a.).",
      en: "You'll get an overview of where and how generative AI and machine learning can support your research process (literature review, translation aid, data analysis, etc.).",
    },
  },
];
