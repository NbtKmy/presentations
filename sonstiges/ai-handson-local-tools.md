# AI Hands-on: Local AI Tools — Examples and Trade-offs

A comparative overview of three local AI setups for educational use.

> **Before you start:** Use [Can I Run It?](https://www.canirun.ai/) to check which AI models your machine can actually run locally.



---

## 1. [Scite.ai](https://scite.ai/mcp) MCP Server in LM Studio

**About Scite.ai:** A research intelligence platform built around *Smart Citations* — a system that classifies how papers cite each other (supporting, contrasting, or mentioning). With 1.6B+ citations from 30+ publisher partnerships, it lets AI tools ground their responses directly in the scientific literature rather than relying on training data alone.

**What this example does:** LM Studio runs a local LLM with an MCP (Model Context Protocol) server, and the Scite.ai MCP plugin is added to give the model access to Scite's database of over 1.6 billion citation statements from 30+ publisher partnerships — allowing the LLM to answer questions grounded in peer-reviewed academic literature.

**What Scite.ai MCP can do:**
- Search full-text research across Scite's indexed literature
- Retrieve **Smart Citations** — showing whether a claim is *supported*, *contradicted*, or merely *mentioned* in the literature
- Verify factual accuracy of AI-generated claims against real publications
- Connect to institutional holdings for access management

**Authentication:** University members who have access via institutional subscription can use the Scite.ai MCP by creating a free Scite.ai account and signing in with those credentials. No separate API key is required.

> **Note:** Scite.ai officially supports ChatGPT, Claude (Desktop/Code), Google Gemini, and Perplexity as MCP-enabled platforms. LM Studio is not listed as an officially supported client, but works via manual MCP configuration (verified). One important caveat: the default context window in LM Studio (4096 tokens) is too small for Scite responses — it must be increased significantly, which places additional demands on machine resources.

### Pros
- **Research-aware responses:** The model can retrieve and cite actual papers, including Smart Citations that show whether claims are supported or contradicted in the literature.
- **Local LLM control:** The base model runs entirely on your machine; only Scite queries go to the external service.
- **No extra cost for university members:** Covered by institutional subscription — only a Scite.ai account signup is needed.
- **Great for academic workflows:** Directly useful for students and researchers who need literature-backed answers.
- **1.6B+ citations:** Exceptionally broad coverage across disciplines.

### Cons
- **LM Studio not officially supported:** Scite.ai's MCP is designed for Claude, ChatGPT, Gemini, and Perplexity; LM Studio requires manual configuration.
- **Context window must be increased:** LM Studio's default context size (4096 tokens) is insufficient for Scite.ai responses — it needs to be raised substantially, increasing memory consumption.
- **MCP is still emerging:** Documentation and community support for MCP servers in LM Studio are limited; setup can be fragile.
- **High hardware demands:** Running a capable local LLM (7B+) already requires strong hardware; the larger context window compounds this requirement.
- **Scite queries require internet:** The local LLM runs offline, but literature searches depend on Scite.ai's online service.

---

## 2. Ollama + [Open Web UI](https://openwebui.com/)

**About Open Web UI:** Describes itself as "The freedom AI stack" — a self-hosted, open-source platform (290M+ downloads, 129K GitHub stars). It connects to any AI backend (Ollama, OpenAI, Anthropic, etc.) and includes RAG, voice processing, and image analysis out of the box. Designed around data sovereignty: everything runs on your own infrastructure, with no vendor lock-in.

**What this example does:** Ollama manages local LLM downloads and serving via a simple CLI, while Open Web UI provides a browser-based chat interface similar to ChatGPT — connecting to Ollama as the backend. In this example, Open Web UI is installed and run via **uv** (a fast Python package manager), avoiding the need for Docker.

### Pros
- **Polished user experience:** Open Web UI looks and feels like a modern chat application, making it approachable for non-technical users.
- **Easy model switching:** Switch between any Ollama-supported model (Llama, Mistral, Gemma, etc.) directly in the UI.
- **Multi-user support:** Open Web UI supports multiple users and conversation history, useful in classroom or workshop settings.
- **Fully offline:** Once models are downloaded, no internet connection is required.
- **Active community:** Both projects are well-maintained with extensive documentation.

### Cons
- **uv required:** This setup uses uv to install Open Web UI; uv itself is lightweight, but it is an extra tool that participants need to have installed.
- **No native tool/plugin support out of the box:** Unlike MCP-enabled setups, integrating external tools (web search, databases) requires additional configuration.
- **Resource heavy:** Running a local model + a web server simultaneously increases RAM and VRAM requirements.
- **No built-in document ingestion:** RAG (retrieval-augmented generation) with your own files requires extra setup.

---

## 3. Ollama + [Open Notebook](https://www.open-notebook.ai/)

**About Open Notebook:** An open-source, privacy-first research and note-taking platform (MIT-licensed). Rather than a plain chat interface, it acts as a "cognitive partner" — supporting AI-powered note summarization, podcast generation from notes, and content ingestion from PDFs, links, and YouTube videos. Built for researchers, students, and professionals who want full control over their data and model choices.

**What this example does:** Ollama serves a local LLM, and Open Notebook is used to interact with the model in a notebook-style interface — ideal for step-by-step, reproducible AI experiments. In this example, Open Notebook is run via **Docker Compose**, which bundles all dependencies into a self-contained environment.

### Pros
- **Research-focused interface:** Designed for note-taking, summarization, and source management — not just chat.
- **Rich content ingestion:** Supports PDFs, links, YouTube videos, and text files as sources for AI interaction.
- **Privacy-first:** MIT-licensed and fully self-hosted; users control which model is used and what data is shared.
- **Podcast generation:** Can convert notes into audio content — a distinctive feature for knowledge sharing.
- **Reproducible environment:** Docker Compose ensures a consistent setup regardless of the host machine's configuration.

### Cons
- **Docker required:** Docker Compose must be installed and running, which can be a hurdle on some machines or for beginners unfamiliar with containers.

---

## Summary Comparison

| Feature | Scite.ai MCP + LM Studio | Ollama + Open Web UI | Ollama + Open Notebook |
|---|---|---|---|
| Target audience | Researchers, academics | General users, classrooms | Researchers, students, knowledge workers |
| Technical barrier | Medium | Low–Medium | Low–Medium (Docker required) |
| Fully offline | Partial (Scite needs internet) | Yes | Yes |
| Literature integration | Yes (via Scite.ai) | No (out of the box) | Possible (via API calls) |
| Chat UI | Basic | Polished | Note/research-oriented |
| Reproducibility | Low | Low | High |
| Extensibility | Limited (MCP ecosystem) | Moderate | High |
| Cost | Free for university members (institutional subscription) | Free | Free |
