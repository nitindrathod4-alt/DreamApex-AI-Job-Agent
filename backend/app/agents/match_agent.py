import re

def match_job(resume_text: str, job_title: str, job_description: str):
    required = re.findall(r"\b(AWS|Azure|Docker|Kubernetes|Terraform|Jenkins|Linux|Python|Java|Git|GitHub|CI/CD|DevOps|SQL|PostgreSQL|Redis|FastAPI|React)\b", job_description, flags=re.I)
    resume_lower = resume_text.lower()
    matched = [s for s in dict.fromkeys(required) if s.lower() in resume_lower]
    missing = [s for s in dict.fromkeys(required) if s.lower() not in resume_lower]
    score = round((len(matched) / len(dict.fromkeys(required))) * 100) if required else 50
    return {
        "job_title": job_title,
        "match_score": score,
        "matched_skills": matched,
        "missing_skills": missing,
        "recommendation": "Strong match" if score >= 75 else "Potential match" if score >= 50 else "Needs upskilling"
    }
