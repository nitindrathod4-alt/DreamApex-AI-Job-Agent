def interview_questions(job_title: str, job_description: str):
    return {
        "job_title": job_title,
        "questions": [
            f"Explain your experience relevant to the {job_title} role.",
            "Describe a production incident you handled and how you diagnosed it.",
            "How would you design a reliable CI/CD pipeline?",
            "How do you secure secrets and credentials in a cloud deployment?",
            "How would you monitor and troubleshoot a Kubernetes workload?"
        ]
    }
