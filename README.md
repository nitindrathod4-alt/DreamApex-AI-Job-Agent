# 🚀 DreamApex AI

### AI-Powered Job Search, Matching & Career Agent

> **Find smarter. Match better. Prepare faster. Apply with confidence.**

DreamApex AI is an **Agentic AI career platform** designed to help job seekers discover relevant opportunities, understand job requirements, identify skill gaps, optimize application materials, and prepare for interviews — while keeping the final application decision in the user's hands.

---

## ✨ What DreamApex AI Does

| Capability | What it does |
|---|---|
| 📄 **Resume Intelligence** | Extracts skills and profile signals from a resume |
| 🔎 **Job Discovery** | Designed to aggregate relevant job opportunities |
| 🎯 **AI Job Matching** | Scores a job against the candidate profile |
| 🧩 **Skill Gap Analysis** | Highlights matched and missing skills |
| ✍️ **Resume Optimization** | Tailors resume content toward a target role |
| 💌 **Cover Letter Agent** | Generates job-specific cover letters |
| 🎤 **Interview Agent** | Creates role-specific interview questions |
| 🤖 **Agentic Workflow** | Connects multiple AI capabilities into a career workflow |
| 👤 **Human-in-the-loop** | Keeps final application submission under user control |

---

## 🧠 Agentic AI Workflow

```text
                    ┌──────────────────────┐
                    │      USER PROFILE    │
                    │ Resume + Skills      │
                    │ Experience + Goals   │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   RESUME ANALYZER    │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │    JOB DISCOVERY     │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │    MATCHING AGENT    │
                    │      Score 0–100     │
                    └──────────┬───────────┘
                               │
                 ┌─────────────┼─────────────┐
                 ▼             ▼             ▼
          Resume Agent   Cover Letter   Skill Gap
                 │             │             │
                 └─────────────┼─────────────┘
                               ▼
                    ┌──────────────────────┐
                    │  INTERVIEW AGENT     │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   USER APPROVAL      │
                    │  Human-in-the-loop   │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   APPLICATION FLOW   │
                    └──────────────────────┘
```

---

## 🏗️ System Architecture

```text
                         DREAMAPEX AI
                              │
                    ┌─────────▼─────────┐
                    │   React Frontend  │
                    │ Dashboard / Jobs  │
                    └─────────┬─────────┘
                              │
                         REST API
                              │
                    ┌─────────▼─────────┐
                    │   FastAPI Backend │
                    └─────────┬─────────┘
                              │
              ┌───────────────┼────────────────┐
              │               │                │
        ┌─────▼─────┐   ┌─────▼─────┐   ┌─────▼─────┐
        │ AI Agents │   │ Job Engine │   │ Auth/API  │
        └─────┬─────┘   └─────┬─────┘   └───────────┘
              │               │
              └───────┬───────┘
                      │
          ┌───────────┼───────────┐
          ▼                       ▼
   ┌──────────────┐        ┌──────────────┐
   │ PostgreSQL   │        │    Redis     │
   │ Profiles/Data│        │ Cache/Queue  │
   └──────────────┘        └──────────────┘
                      │
                      ▼
             Docker / Kubernetes
                      │
                      ▼
                 AWS Cloud
```

---

## 🤖 AI Agent Layer

### 1. Resume Analyzer Agent

Understands the candidate profile and extracts useful signals such as:

- Skills
- Technologies
- Experience
- Career direction
- Relevant keywords

### 2. Job Matching Agent

Compares a candidate profile with a job description and produces:

- Match score
- Matched skills
- Missing skills
- Recommendation

### 3. Resume Optimization Agent

Creates a targeted resume strategy based on a selected job description.

### 4. Cover Letter Agent

Generates a personalized cover letter based on the candidate and role.

### 5. Interview Agent

Produces role-specific technical, behavioral and DevOps/cloud interview questions.

---

## 🛠️ Technology Stack

### Frontend

- ⚛️ React
- ⚡ Vite
- 📱 Responsive UI

### Backend

- 🐍 Python
- ⚡ FastAPI
- 🔐 REST APIs
- 🧠 AI Agent service layer

### Data & Infrastructure

- 🐘 PostgreSQL
- ⚡ Redis
- 🐳 Docker
- ☸️ Kubernetes
- ☁️ AWS

### DevOps Roadmap

- GitHub
- CI/CD
- Docker image builds
- Kubernetes deployment
- Terraform infrastructure
- Monitoring & observability

---

## 📁 Project Structure

```text
DreamApex-AI-Job-Agent/
│
├── backend/
│   ├── app/
│   │   ├── agents/
│   │   │   ├── resume_agent.py
│   │   │   ├── match_agent.py
│   │   │   └── interview_agent.py
│   │   └── main.py
│   ├── Dockerfile
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── main.jsx
│   │   └── styles.css
│   ├── Dockerfile
│   ├── package.json
│   └── vite.config.js
│
├── kubernetes/
│   ├── namespace.yaml
│   ├── backend.yaml
│   └── frontend.yaml
│
├── docker-compose.yml
├── .env.example
├── .gitignore
└── README.md
```

---

## 🚀 Run with Docker

### 1. Clone

```bash
git clone https://github.com/nitindrathod4-alt/DreamApex-AI-Job-Agent.git
cd DreamApex-AI-Job-Agent
```

### 2. Start the platform

```bash
docker compose up --build
```

### 3. Open the application

```text
Frontend → http://localhost:5173
API Docs → http://localhost:8000/docs
Health → http://localhost:8000/health
```

### Stop

```bash
docker compose down
```

---

## ☁️ Deployment Vision

DreamApex AI is being designed with a cloud-native deployment path:

```text
GitHub
  ↓
CI/CD Pipeline
  ↓
Docker Build
  ↓
Container Registry
  ↓
Kubernetes / AWS
  ↓
Load Balancer
  ↓
DreamApex AI
```

Future infrastructure can include:

- AWS EC2 / EKS
- Terraform
- Container registry
- Managed PostgreSQL
- Redis
- HTTPS / TLS
- Secrets management
- Monitoring and alerting
- Horizontal scaling

---

## 🔐 Security Principles

DreamApex AI follows a **human-in-the-loop** approach for job applications.

The platform should not silently submit applications or make irreversible actions without user approval.

Planned security controls include:

- Authentication & authorization
- Secure password handling
- API rate limiting
- Secret management
- Input validation
- Audit logs
- Usage tracking
- Role-based access control

---

## 🗺️ Product Roadmap

### Phase 1 — Foundation

- [x] React frontend
- [x] FastAPI backend
- [x] Docker setup
- [x] PostgreSQL/Redis foundation
- [x] Initial AI agent architecture
- [x] Kubernetes starter manifests

### Phase 2 — Intelligence

- [ ] Real LLM integration
- [ ] PDF/DOCX resume parsing
- [ ] Advanced semantic job matching
- [ ] Embeddings / vector search
- [ ] Skill-gap intelligence
- [ ] Resume optimization
- [ ] Cover letter generation

### Phase 3 — Career Workspace

- [ ] Authentication
- [ ] User dashboard
- [ ] Saved jobs
- [ ] Application tracker
- [ ] Interview workspace
- [ ] AI mock interviews
- [ ] Personalized career recommendations

### Phase 4 — Cloud & DevOps

- [ ] CI/CD pipeline
- [ ] AWS deployment
- [ ] Kubernetes/EKS
- [ ] Terraform infrastructure
- [ ] Monitoring
- [ ] Logging
- [ ] Production security

---

## 📊 Example Job Match

```text
┌──────────────────────────────────────┐
│ DevOps Engineer                      │
├──────────────────────────────────────┤
│ Match Score                 94%       │
│                                      │
│ ✓ AWS                                │
│ ✓ Docker                             │
│ ✓ Kubernetes                         │
│ ✓ Terraform                          │
│ ✓ Jenkins                            │
│                                      │
│ Missing:                             │
│ • Advanced observability             │
│                                      │
│ Recommendation: Strong Match         │
└──────────────────────────────────────┘
```

---

## 🎯 Vision

DreamApex AI aims to become a **personal AI career operating system** — combining job discovery, intelligent matching, application preparation, interview coaching and career intelligence in one platform.

> **Your career. Your data. Your decision. Powered by AI.**

---

## ⚠️ Project Status

🚧 **Active Development**

This repository currently contains the foundation and starter implementation. Features described in the roadmap will be added incrementally.

---

## 📜 License

This project is intended as a portfolio and development project. Add an open-source license before accepting external contributions.
