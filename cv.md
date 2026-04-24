---
pdf_options:
  format: A4
  margin:
    top: 1.8cm
    bottom: 1.8cm
    left: 2cm
    right: 2cm
stylesheet_encoding: utf-8
css: |
  @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');

  body {
    font-family: "Times New Roman", Times, "Libre Baskerville", serif;
    font-size: 13pt;
    line-height: 1.65;
    color: #1a1a1a;
  }

  h1 {
    font-size: 22pt;
    font-weight: bold;
    text-align: center;
    margin-bottom: 2px;
  }

  h3.subtitle {
    text-align: center;
    font-weight: normal;
    font-size: 13pt;
    color: #555;
    margin-top: 0;
  }

  h2 {
    font-size: 15pt;
    font-weight: bold;
    border-bottom: 1.5px solid #222;
    padding-bottom: 3px;
    margin-top: 18px;
    margin-bottom: 8px;
    page-break-after: avoid;
  }

  h3 {
    font-size: 14pt;
    font-weight: bold;
    margin-top: 14px;
    margin-bottom: 2px;
    page-break-after: avoid;
  }

  h4 {
    font-size: 13pt;
    font-weight: bold;
    margin-top: 8px;
    margin-bottom: 4px;
    page-break-after: avoid;
  }

  /* Prevent breaking immediately after a heading */
  h3 + p,
  h3 + blockquote,
  h3 + ul,
  h3 + table {
    page-break-before: avoid;
  }

  h2 + table,
  h2 + ul {
    page-break-before: avoid;
  }

  p {
    font-size: 13pt;
    margin: 4px 0;
  }

  blockquote {
    border-left: 3px solid #999;
    padding: 4px 0 4px 12px;
    color: #444;
    margin: 6px 0 8px 0;
    font-style: italic;
    font-size: 13pt;
    page-break-inside: avoid;
    page-break-before: avoid;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 13pt;
    margin: 8px 0;
    page-break-inside: avoid;
  }

  th {
    background-color: #efefef;
    font-weight: bold;
    text-align: left;
    padding: 5px 8px;
    border: 1px solid #bbb;
    font-size: 13pt;
  }

  td {
    padding: 5px 8px;
    border: 1px solid #bbb;
    vertical-align: top;
    font-size: 13pt;
  }

  ul {
    padding-left: 22px;
    margin: 4px 0;
  }

  li {
    font-size: 13pt;
    margin-bottom: 3px;
  }

  strong { font-weight: bold; }
  em { font-style: italic; }

  hr {
    border: none;
    border-top: 1px solid #ccc;
    margin: 12px 0;
  }

  a {
    color: #1a5fa8;
    text-decoration: none;
  }

  code {
    font-family: "Times New Roman", Times, serif;
    font-size: 12pt;
    background-color: #f5f5f5;
    padding: 1px 3px;
  }
---

# Nguyễn Quốc Hùng
### Front-End Developer

📞 0974168187 &nbsp;|&nbsp; ✉️ quochung13122002@gmail.com &nbsp;|&nbsp; 🔗 [Portfolio](https://portfolio-five-roan-38.vercel.app/) &nbsp;|&nbsp; 📍 Quận Hai Bà Trưng, Hà Nội

---

## 🎯 Career Objective

**Short-term:** Enhance my knowledge, gain real-world experience, and develop specialized skills to become a professional Front-End Developer.

**Long-term:** Improve both technical and soft skills to become a valuable team player and expert in the field over the next 5 years.

---

## 🎓 Education

| Field | Detail |
|---|---|
| **University** | University of Transport and Communications |
| **Faculty** | Faculty of Information Technology |
| **Duration** | 2020 – 2025 |
| **Classification** | Good |

---

## 🛠️ Skills

| Category | Details |
|---|---|
| **Languages & Frameworks** | React.js, Next.js, React Native, CSS, Tailwind CSS, Solidity, Python |
| **Tools & Technologies** | Redux Toolkit, Git, RESTful API |
| **English** | Pre-intermediate |

---

## 🧑‍💻 Work Experience

### Lifestyle Vietnam &nbsp;|&nbsp; Marketing Developer
`04/2026 – Present`

- Built and maintained an automated social media pipeline using **n8n** and a custom **TypeScript monorepo** (Node.js, Express, Prisma).
- Automated end-to-end content workflows: topic ingestion from **Google Sheets** → AI caption generation (Ollama, Gemini) → image rendering (Stable Diffusion, Gemini Image API) → auto-publishing to **Facebook** and **TikTok**.
- Designed a custom **Workflow Engine** with fault tolerance: step-by-step execution logging, auto-retry with exponential backoff, and resume-from-last-step capability.
- Integrated multiple AI and social media APIs: **Google Gemini**, **Ollama** (local LLM), **Replicate**, **Runway ML**, **OpenAI Vision**, **Facebook Graph API**, **TikTok API**.

---

### Lifestyle Vietnam &nbsp;|&nbsp; Game Developer Intern
`02/2026 – 04/2026`

- Developed educational mini-games for children (ages 3–6) using **Phaser 3** and **Vite + TypeScript**, covering mechanics such as lasso selection, drag-to-match, trace & paint letters, and voice-based pronunciation scoring.
- Integrated games with the **Iruka Edu SDK** to handle game lifecycle, session tracking, and score reporting.
- Built **automation scripts** (Node.js) to mass-patch SDK compliance across 13+ game projects simultaneously, significantly reducing manual effort.
- Implemented **voice-based learning features**: microphone recording, audio submission to backend APIs, and real-time pronunciation scoring.

---

### 3i Company &nbsp;|&nbsp; Front-End Developer
`02/2025 – 09/2025`

- Developed UI modules using **Next.js** and **Angular** for internal product and customer management platforms.
- Integrated front-end with **.NET** backend, ensuring synchronized and secure data flow.
- Built landing pages, dashboards, and interactive charts using **Recharts** and **Chart.js**.
- Optimized rendering performance with **SSR**, lazy loading, and caching techniques.
- Handled client-side authentication, authorization, and UI role management.
- Participated in **Agile/Scrum** workflows with Git and Docker in a CI/CD pipeline.

---

### LANCS Networks &nbsp;|&nbsp; Front-End Developer Intern
`05/2023 – 08/2023`

- Developed UI with **ReactJS** and **Tailwind CSS** based on Figma designs.
- Built mobile application screens using **React Native** for internal use.
- Supported modules including data input forms, list views, and simple dashboards.
- Fixed UI/UX issues and improved usability based on QA feedback.
- Used **GitLab** for source control.

---

## 📦 Projects

### 🧠 Legal AI – Legal Information Synthesis System

> A specialized AI system designed to synthesize Vietnamese legal information using Retrieval-Augmented Generation (RAG) and controlled legal reasoning. Provides real-time, evidence-based answers streamed via Server-Sent Events (SSE).

**Tech Stack**

| Layer | Technologies |
|---|---|
| Backend | Python, FastAPI, Uvicorn |
| AI / NLP | Sentence-Transformers (Multilingual MiniLM), Semantic Search, LLM via Ollama |
| Architecture | RAG, Legal rule ranking (Cosine Similarity), Anti-hallucination protocols |
| Real-time | Server-Sent Events (SSE) |

**Key Features**
- **Controlled Legal Reasoning:** Generates insights strictly based on statutory provisions to ensure accuracy.
- **Structured Output:** Responses follow a standardized format — *Legal Conclusion* + *Legal Basis* (laws, decrees, circulars).
- **Streaming Responses:** Real-time text generation for improved UX.

🔗 [github.com/lovechino/legal-ai](https://github.com/lovechino/legal-ai)

---

### 🤖 AutomaticSocialMedia – Social Media Automation Platform

> A custom TypeScript monorepo platform that automates the full social media pipeline: generating captions with AI, rendering images/videos, and auto-publishing to Facebook & TikTok — replacing no-code tools like n8n.

**Tech Stack**

| Layer | Technologies |
|---|---|
| Backend | Node.js, Express, Prisma ORM, SQLite |
| Frontend | React, Vite, Tailwind CSS |
| AI / Integrations | Google Gemini, Ollama, Replicate (Stable Diffusion), Runway ML, OpenAI Vision |
| Social APIs | Facebook Graph API, TikTok API, Google Sheets |
| Architecture | pnpm Monorepo, Custom Workflow Engine |

**Key Features**
- **Multi-Platform Workflows:** Automates the entire pipeline from topic extraction (Google Sheets) → AI media generation → publishing (Facebook, TikTok).
- **Custom Workflow Engine:** Built-in fault tolerance with auto-retry, resume from last successful step, and full execution history in DB.
- **Cost-Optimized AI:** Hybrid approach combining free local LLMs (Ollama) with premium APIs (Gemini, OpenAI) for optimal cost efficiency.

🔗 [github.com/lovechino/AutomaticSocialMedia](https://github.com/lovechino/AutomaticSocialMedia)

---

## 🎧 Interests

Listening to US/UK music &nbsp;|&nbsp; Exploring new technologies
