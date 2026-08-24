import re

def analyze_resume(text: str):
    skills_catalog = [
        "AWS","Azure","Docker","Kubernetes","Terraform","Jenkins",
        "Linux","Python","Java","Git","GitHub","CI/CD","DevOps",
        "SQL","PostgreSQL","Redis","FastAPI","React"
    ]
    found = [s for s in skills_catalog if re.search(rf"\b{re.escape(s)}\b", text, re.I)]
    return {
        "summary": "Resume analyzed successfully.",
        "skills": found,
        "skill_count": len(found),
        "next_step": "Use the extracted profile for job matching."
    }
