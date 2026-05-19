from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import cm
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    HRFlowable, KeepTogether
)
from reportlab.lib.enums import TA_LEFT, TA_CENTER

# ── Color palette ──────────────────────────────────────────────
DARK_BLUE   = colors.HexColor("#1E3A5F")
MID_BLUE    = colors.HexColor("#2E6DA4")
LIGHT_BLUE  = colors.HexColor("#EBF2FB")
ACCENT      = colors.HexColor("#E8A020")
PRO_GREEN   = colors.HexColor("#1A7A4A")
CON_RED     = colors.HexColor("#C0392B")
BG_PRO      = colors.HexColor("#EAF6EE")
BG_CON      = colors.HexColor("#FDECEA")
GRAY_TEXT   = colors.HexColor("#555555")
LIGHT_GRAY  = colors.HexColor("#F5F5F5")
DIVIDER     = colors.HexColor("#D0D8E4")

PAGE_W, PAGE_H = A4
MARGIN = 2.2 * cm

# ── Document ───────────────────────────────────────────────────
doc = SimpleDocTemplate(
    "/Users/nobu/presentations/sonstiges/ai-handson-local-tools.pdf",
    pagesize=A4,
    leftMargin=MARGIN, rightMargin=MARGIN,
    topMargin=2 * cm, bottomMargin=2 * cm,
    title="AI Hands-on: Local AI Tools",
    author="AI Hands-on Workshop",
)

styles = getSampleStyleSheet()

# ── Custom styles ──────────────────────────────────────────────
def S(name, **kw):
    return ParagraphStyle(name, **kw)

sTitle = S("sTitle",
    fontName="Helvetica-Bold", fontSize=22, leading=28,
    textColor=DARK_BLUE, alignment=TA_CENTER, spaceAfter=6)

sSubtitle = S("sSubtitle",
    fontName="Helvetica", fontSize=11, leading=16,
    textColor=GRAY_TEXT, alignment=TA_CENTER, spaceAfter=4)

sNote = S("sNote",
    fontName="Helvetica-Oblique", fontSize=9, leading=13,
    textColor=GRAY_TEXT, alignment=TA_CENTER, spaceAfter=16)

sSectionNum = S("sSectionNum",
    fontName="Helvetica-Bold", fontSize=14, leading=20,
    textColor=colors.white)

sAboutLabel = S("sAboutLabel",
    fontName="Helvetica-Bold", fontSize=9, leading=12,
    textColor=MID_BLUE, spaceBefore=6)

sAboutBody = S("sAboutBody",
    fontName="Helvetica", fontSize=9.5, leading=14,
    textColor=GRAY_TEXT, spaceAfter=4)

sWhatLabel = S("sWhatLabel",
    fontName="Helvetica-Bold", fontSize=9, leading=12,
    textColor=DARK_BLUE)

sWhatBody = S("sWhatBody",
    fontName="Helvetica", fontSize=9.5, leading=14,
    textColor=GRAY_TEXT, spaceAfter=2)

sCapability = S("sCapability",
    fontName="Helvetica", fontSize=9, leading=13,
    textColor=GRAY_TEXT, leftIndent=12, spaceAfter=1)

sProConHeader = S("sProConHeader",
    fontName="Helvetica-Bold", fontSize=9.5, leading=13,
    textColor=colors.white)

sProItem = S("sProItem",
    fontName="Helvetica", fontSize=9, leading=13,
    textColor=colors.HexColor("#1A3D2B"), leftIndent=8, spaceAfter=1)

sConItem = S("sConItem",
    fontName="Helvetica", fontSize=9, leading=13,
    textColor=colors.HexColor("#5C1010"), leftIndent=8, spaceAfter=1)

sInlineNote = S("sInlineNote",
    fontName="Helvetica-Oblique", fontSize=8.5, leading=12,
    textColor=GRAY_TEXT, borderColor=ACCENT, borderPadding=(4,6,4,8),
    borderWidth=0, leftIndent=10, spaceAfter=8,
    backColor=colors.HexColor("#FEF9EC"))

sTableHeader = S("sTableHeader",
    fontName="Helvetica-Bold", fontSize=8.5, leading=12,
    textColor=colors.white, alignment=TA_CENTER)

sTableCell = S("sTableCell",
    fontName="Helvetica", fontSize=8.5, leading=12,
    textColor=GRAY_TEXT, alignment=TA_CENTER)

sTableCellLeft = S("sTableCellLeft",
    fontName="Helvetica-Bold", fontSize=8.5, leading=12,
    textColor=DARK_BLUE, alignment=TA_LEFT)

# ── Helpers ────────────────────────────────────────────────────
def section_header(num, title, subtitle=""):
    """Colored header bar for each main section."""
    content = f"<b>{num + '. ' if num else ''}{title}</b>"
    rows = [[Paragraph(content, sSectionNum)]]
    t = Table(rows, colWidths=[PAGE_W - 2 * MARGIN])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,-1), DARK_BLUE),
        ("TOPPADDING",    (0,0), (-1,-1), 10),
        ("BOTTOMPADDING", (0,0), (-1,-1), 10),
        ("LEFTPADDING",   (0,0), (-1,-1), 14),
        ("RIGHTPADDING",  (0,0), (-1,-1), 14),
        ("ROWBACKGROUNDS", (0,0), (-1,-1), [DARK_BLUE]),
    ]))
    return t

def info_block(about_text, what_text, capabilities=None, note_text=None):
    """Blue-tinted info card with About / What this does."""
    inner = []
    inner.append(Paragraph("About", sAboutLabel))
    inner.append(Paragraph(about_text, sAboutBody))
    inner.append(Paragraph("What this example does", sWhatLabel))
    inner.append(Paragraph(what_text, sWhatBody))
    if capabilities:
        inner.append(Paragraph("Capabilities:", sWhatLabel))
        for cap in capabilities:
            inner.append(Paragraph(f"• {cap}", sCapability))
    if note_text:
        inner.append(Spacer(1, 6))
        inner.append(Paragraph(f"<i>Note: {note_text}</i>", sInlineNote))

    # Wrap in a table for background color + border
    cell_table = Table([[inner]], colWidths=[PAGE_W - 2 * MARGIN - 2])
    cell_table.setStyle(TableStyle([
        ("BACKGROUND",    (0,0), (-1,-1), LIGHT_BLUE),
        ("TOPPADDING",    (0,0), (-1,-1), 10),
        ("BOTTOMPADDING", (0,0), (-1,-1), 10),
        ("LEFTPADDING",   (0,0), (-1,-1), 12),
        ("RIGHTPADDING",  (0,0), (-1,-1), 12),
        ("LINEBELOW",     (0,0), (-1,-1), 1, MID_BLUE),
        ("VALIGN",        (0,0), (-1,-1), "TOP"),
    ]))
    return cell_table

def pros_cons_block(pros, cons):
    """Side-by-side Pros / Cons table."""
    col_w = (PAGE_W - 2 * MARGIN - 8) / 2

    def items(lst, style, bullet, color):
        out = [Paragraph(f'<font color="{color.hexval()}"><b>{"✓ Pros" if bullet=="✓" else "✗ Cons"}</b></font>',
                         sProConHeader if style == sProItem else sProConHeader)]
        for item in lst:
            # split bold part from rest
            if ":" in item:
                bold, rest = item.split(":", 1)
                text = f"<b>{bold}:</b>{rest}"
            else:
                text = item
            out.append(Paragraph(f"{bullet}  {text}", style))
        return out

    pro_cell = items(pros, sProItem, "✓", PRO_GREEN)
    con_cell = items(cons, sConItem, "✗", CON_RED)

    t = Table([[pro_cell, con_cell]], colWidths=[col_w, col_w])
    t.setStyle(TableStyle([
        ("BACKGROUND",    (0,0), (0,-1), BG_PRO),
        ("BACKGROUND",    (1,0), (1,-1), BG_CON),
        ("TOPPADDING",    (0,0), (-1,-1), 10),
        ("BOTTOMPADDING", (0,0), (-1,-1), 10),
        ("LEFTPADDING",   (0,0), (-1,-1), 10),
        ("RIGHTPADDING",  (0,0), (-1,-1), 10),
        ("VALIGN",        (0,0), (-1,-1), "TOP"),
        ("LINEAFTER",     (0,0), (0,-1), 1, DIVIDER),
    ]))
    return t

# ── Content ────────────────────────────────────────────────────
story = []

# ── Title block ────────────────────────────────────────────────
story.append(Spacer(1, 0.4 * cm))
story.append(Paragraph("AI Hands-on: Local AI Tools", sTitle))
story.append(Paragraph("Examples and Trade-offs", sSubtitle))
story.append(HRFlowable(width="100%", thickness=2, color=ACCENT, spaceAfter=6))
story.append(Paragraph(
    "A comparative overview of three local AI setups for educational use.",
    sNote))
story.append(Paragraph(
    'Tip: Use <u><a href="https://www.canirun.ai/" color="#2E6DA4">Can I Run It?</a></u> '
    "to check which AI models your machine can actually run locally.",
    sInlineNote))
story.append(Spacer(1, 0.4 * cm))

# ══════════════════════════════════════════════════════════════
# Section 1 – Scite.ai MCP + LM Studio
# ══════════════════════════════════════════════════════════════
story.append(KeepTogether([
    section_header("1", "Scite.ai MCP Server in LM Studio"),
    Spacer(1, 4),
]))

story.append(info_block(
    about_text=(
        "A research intelligence platform built around <i>Smart Citations</i> — a system that "
        "classifies how papers cite each other (supporting, contrasting, or mentioning). "
        "With 1.6B+ citations from 30+ publisher partnerships, it lets AI tools ground their "
        "responses directly in the scientific literature rather than relying on training data alone."
    ),
    what_text=(
        "LM Studio runs a local LLM with an MCP (Model Context Protocol) server, and the Scite.ai "
        "MCP plugin gives the model access to Scite's database of over 1.6 billion citation "
        "statements — allowing the LLM to answer questions grounded in peer-reviewed academic literature."
    ),
    capabilities=[
        "Search full-text research across Scite's indexed literature",
        "Retrieve Smart Citations — supporting, contradicted, or merely mentioned",
        "Verify factual accuracy of AI-generated claims against real publications",
        "Connect to institutional holdings for access management",
    ],
    note_text=(
        "Scite.ai officially supports ChatGPT, Claude, Gemini, and Perplexity. "
        "LM Studio works via manual MCP configuration (verified), but the default context window "
        "(4096 tokens) must be increased — which increases hardware demand."
    ),
))
story.append(Spacer(1, 6))

story.append(pros_cons_block(
    pros=[
        "Research-aware responses: retrieves and cites actual papers with Smart Citations",
        "Local LLM control: only Scite queries go to the external service",
        "No extra cost for university members: covered by institutional subscription",
        "Great for academic workflows: literature-backed answers",
        "1.6B+ citations: exceptionally broad coverage across disciplines",
    ],
    cons=[
        "LM Studio not officially supported: requires manual configuration",
        "Context window must be increased: default 4096 tokens is insufficient",
        "MCP is still emerging: documentation and community support are limited",
        "High hardware demands: large context window compounds requirements",
        "Scite queries require internet: local LLM runs offline, but literature searches don't",
    ],
))
story.append(Spacer(1, 16))

# ══════════════════════════════════════════════════════════════
# Section 2 – Ollama + Open Web UI
# ══════════════════════════════════════════════════════════════
story.append(KeepTogether([
    section_header("2", "Ollama + Open Web UI"),
    Spacer(1, 4),
]))

story.append(info_block(
    about_text=(
        'Describes itself as "The freedom AI stack" — a self-hosted, open-source platform '
        "(290M+ downloads, 129K GitHub stars). Connects to any AI backend (Ollama, OpenAI, Anthropic, etc.) "
        "and includes RAG, voice processing, and image analysis out of the box. Designed around data "
        "sovereignty: everything runs on your own infrastructure, with no vendor lock-in."
    ),
    what_text=(
        "Ollama manages local LLM downloads and serving via a simple CLI, while Open Web UI provides "
        "a browser-based chat interface similar to ChatGPT — connecting to Ollama as the backend. "
        "Open Web UI is installed and run via <b>uv</b> (a fast Python package manager), avoiding the need for Docker."
    ),
))
story.append(Spacer(1, 6))

story.append(pros_cons_block(
    pros=[
        "Polished user experience: looks and feels like a modern chat app",
        "Easy model switching: Llama, Mistral, Gemma, and more directly in the UI",
        "Multi-user support: conversation history, useful in classroom settings",
        "Fully offline: no internet connection required after model download",
        "Active community: well-maintained with extensive documentation",
    ],
    cons=[
        "uv required: an extra tool participants need to have installed",
        "No native tool/plugin support out of the box: external tools need extra configuration",
        "Resource heavy: local model + web server increases RAM and VRAM requirements",
        "No built-in document ingestion: RAG with your own files requires extra setup",
    ],
))
story.append(Spacer(1, 16))

# ══════════════════════════════════════════════════════════════
# Section 3 – Ollama + Open Notebook
# ══════════════════════════════════════════════════════════════
story.append(KeepTogether([
    section_header("3", "Ollama + Open Notebook"),
    Spacer(1, 4),
]))

story.append(info_block(
    about_text=(
        "An open-source, privacy-first research and note-taking platform (MIT-licensed). "
        'Rather than a plain chat interface, it acts as a "cognitive partner" — supporting '
        "AI-powered note summarization, podcast generation from notes, and content ingestion "
        "from PDFs, links, and YouTube videos. Built for researchers, students, and professionals "
        "who want full control over their data and model choices."
    ),
    what_text=(
        "Ollama serves a local LLM, and Open Notebook provides a notebook-style interface — "
        "ideal for step-by-step, reproducible AI experiments. Open Notebook is run via "
        "<b>Docker Compose</b>, which bundles all dependencies into a self-contained environment."
    ),
))
story.append(Spacer(1, 6))

story.append(pros_cons_block(
    pros=[
        "Research-focused interface: designed for note-taking, summarization, source management",
        "Rich content ingestion: PDFs, links, YouTube videos, and text files",
        "Privacy-first: MIT-licensed, fully self-hosted, you control the data",
        "Podcast generation: converts notes into audio — distinctive knowledge-sharing feature",
        "Reproducible environment: Docker Compose ensures consistent setup across machines",
    ],
    cons=[
        "Docker required: Docker Compose must be installed and running — can be a hurdle for beginners",
    ],
))
story.append(Spacer(1, 20))

# ══════════════════════════════════════════════════════════════
# Summary Comparison Table
# ══════════════════════════════════════════════════════════════
story.append(section_header("", "Summary Comparison"))
story.append(Spacer(1, 4))

headers = ["Feature", "Scite.ai MCP\n+ LM Studio", "Ollama +\nOpen Web UI", "Ollama +\nOpen Notebook"]
rows_data = [
    ["Target audience",      "Researchers,\nacademics",           "General users,\nclassrooms",        "Researchers, students,\nknowledge workers"],
    ["Technical barrier",    "Medium",                             "Low–Medium",                        "Low–Medium\n(Docker required)"],
    ["Fully offline",        "Partial\n(Scite needs internet)",   "Yes",                               "Yes"],
    ["Literature integration","Yes (via Scite.ai)",               "No (out of the box)",               "Possible (via API calls)"],
    ["Chat UI",              "Basic",                              "Polished",                          "Note/research-oriented"],
    ["Reproducibility",      "Low",                               "Low",                               "High"],
    ["Extensibility",        "Limited\n(MCP ecosystem)",          "Moderate",                          "High"],
    ["Cost",                 "Free for university\nmembers",       "Free",                              "Free"],
]

col_w = (PAGE_W - 2 * MARGIN) / 4
table_content = [[Paragraph(h, sTableHeader) for h in headers]]
for row in rows_data:
    table_content.append(
        [Paragraph(row[0], sTableCellLeft)] +
        [Paragraph(cell, sTableCell) for cell in row[1:]]
    )

summary_table = Table(table_content, colWidths=[col_w] * 4, repeatRows=1)
summary_table.setStyle(TableStyle([
    # Header row
    ("BACKGROUND",    (0,0), (-1,0), MID_BLUE),
    ("TOPPADDING",    (0,0), (-1,-1), 7),
    ("BOTTOMPADDING", (0,0), (-1,-1), 7),
    ("LEFTPADDING",   (0,0), (-1,-1), 8),
    ("RIGHTPADDING",  (0,0), (-1,-1), 8),
    ("VALIGN",        (0,0), (-1,-1), "MIDDLE"),
    # Alternating rows
    ("ROWBACKGROUNDS", (0,1), (-1,-1), [colors.white, LIGHT_GRAY]),
    # Grid
    ("GRID",          (0,0), (-1,-1), 0.5, DIVIDER),
    ("LINEBELOW",     (0,0), (-1,0), 1.5, MID_BLUE),
    # First column bold background
    ("BACKGROUND",    (0,1), (0,-1), LIGHT_BLUE),
]))

story.append(summary_table)

# ── Build ──────────────────────────────────────────────────────
doc.build(story)
print("PDF created: ai-handson-local-tools.pdf")
