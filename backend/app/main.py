from fastapi import FastAPI, UploadFile, File
from pydantic import BaseModel
from .agents.resume_agent import analyze_resume
from .agents.match_agent import match_job
from .agents.interview_agent import interview_questions

app = FastAPI(title="DreamApex AI Job Agent", version="1.0.0")

class MatchRequest(BaseModel):
    resume_text: str
    job_title: str
    job_description: str

class InterviewRequest(BaseModel):
    job_title: str
    job_description: str

@app.get("/health")
def health():
    return {"status": "ok", "service": "dreamapex-backend"}

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
