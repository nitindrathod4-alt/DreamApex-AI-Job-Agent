from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from .agents.resume_agent import analyze_resume
from .agents.match_agent import match_job
from .agents.interview_agent import interview_questions

app = FastAPI(title="DreamApex AI Job Agent", version="1.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

class MatchRequest(BaseModel):
    resume_text: str
    job_title: str
    job_description: str

class InterviewRequest(BaseModel):
    job_title: str
    job_description: str

class CoverLetterRequest(BaseModel):
    candidate_name: str
    job_title: str
    company: str
    resume_text: str = ""

SAMPLE_JOBS = [
    {"id": 1, "title": "AWS DevOps Engineer", "company": "Amazon", "location": "Pune, MH (Remote)", "salary": "₹12L – ₹18L PA", "description": "AWS Docker Kubernetes Terraform Jenkins Linux DevOps CI/CD", "score": 94},
    {"id": 2, "title": "Cloud Engineer", "company": "Microsoft", "location": "Bengaluru, KA (Hybrid)", "salary": "₹14L – ₹20L PA", "description": "Azure Kubernetes DevOps CI/CD Python Git", "score": 91},
    {"id": 3, "title": "DevOps Engineer", "company": "TCS", "location": "Mumbai, MH (On-site)", "salary": "₹9L – ₹13L PA", "description": "Jenkins Docker Ansible Linux Git AWS", "score": 88},
]

@app.get("/health")
def health():
    return {"status": "ok", "service": "dreamapex-backend", "version": "1.1.0"}

@app.get("/api/jobs")
def jobs():
    return {"jobs": SAMPLE_JOBS, "count": len(SAMPLE_JOBS)}

@app.post("/api/resume/analyze")
async def resume_analyze(file: UploadFile = File(...)):
    content = await file.read()
    text = content.decode("utf-8", errors="ignore")
    return analyze_resume(text)

@app.post("/api/jobs/match")
def jobs_match(request: MatchRequest):
    return match_job(request.resume_text, request.job_title, request.job_description)

@app.post("/api/interview/questions")
def interview(request: InterviewRequest):
    return interview_questions(request.job_title, request.job_description)

@app.post("/api/cover-letter")
def cover_letter(request: CoverLetterRequest):
    greeting = f"Dear Hiring Manager at {request.company},"
    body = (
        f"I am excited to apply for the {request.job_title} position at {request.company}. "
        f"My background and technical experience align well with the requirements of this role. "
        "I would welcome the opportunity to contribute to your team and discuss how my skills can add value."
    )
    return {"candidate_name": request.candidate_name, "job_title": request.job_title, "company": request.company, "cover_letter": f"{greeting}\n\n{body}\n\nSincerely,\n{request.candidate_name}"}
