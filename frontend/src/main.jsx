import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import "./agent.css";

const jobs = [
  { logo: "aws", title: "AWS DevOps Engineer", company: "Amazon", place: "Pune, MH (Remote)", salary: "₹12L – ₹18L PA", score: 94, tags: ["AWS", "Docker", "Kubernetes", "Terraform", "+3"] },
  { logo: "MS", title: "Cloud Engineer", company: "Microsoft", place: "Bengaluru, KA (Hybrid)", salary: "₹14L – ₹20L PA", score: 91, tags: ["Azure", "Kubernetes", "DevOps", "CI/CD", "+2"] },
  { logo: "tcs", title: "DevOps Engineer", company: "TCS", place: "Mumbai, MH (On-site)", salary: "₹9L – ₹13L PA", score: 88, tags: ["Jenkins", "Docker", "Ansible", "Linux", "+2"] }
];

const API_URL = `${window.location.protocol}//${window.location.hostname}:8000`;

function App() {
  const [active, setActive] = useState("Dashboard");
  const [notice, setNotice] = useState("");
  const [search, setSearch] = useState("");
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeLoading, setResumeLoading] = useState(false);
  const [resumeResult, setResumeResult] = useState(null);
  const [resumeError, setResumeError] = useState("");

  const action = (message) => {
    setNotice(message);
    setTimeout(() => setNotice(""), 2200);
  };

  const openResumeAnalyzer = () => {
    setActive("Resume Analyzer");
    setResumeError("");
  };

  const analyzeResume = async () => {
    if (!resumeFile) {
      setResumeError("Please select a PDF, DOCX or TXT resume first.");
      return;
    }

    setResumeLoading(true);
    setResumeError("");
    setResumeResult(null);

    try {
      const formData = new FormData();
      formData.append("file", resumeFile);
      const response = await fetch(`${API_URL}/api/resume/analyze`, {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (!response.ok || data.error) throw new Error(data.error || "Resume analysis failed.");
      setResumeResult(data);
    } catch (error) {
      setResumeError(error.message || "Unable to connect to DreamApex AI backend.");
    } finally {
      setResumeLoading(false);
    }
  };

  const nav = [["⌂", "Dashboard"], ["▣", "Jobs"], ["▤", "Resume Analyzer"], ["◎", "Job Matches"], ["✓", "Applications"], ["♧", "Interview Coach"], ["◇", "AI Agent"], ["□", "Cover Letter Builder"], ["✦", "Skill Assessment"], ["⌑", "Saved Jobs"]];

  return <div className="shell">
    <aside className="sidebar">
      <div className="brand"><div className="nr">NR</div><div><strong>Dream<span>Apex AI</span></strong><small>JOB AGENT</small></div></div>
      <nav>{nav.map(([icon, name]) => <button key={name} className={active === name ? "nav active" : "nav"} onClick={() => name === "Resume Analyzer" ? openResumeAnalyzer() : setActive(name)}><i>{icon}</i>{name}</button>)}</nav>
      <div className="sep" />
      <button className="nav"><i>⚙</i>Settings</button>
      <button className="nav"><i>?</i>Help & Support</button>
      <div className="premium"><b>♛ Go Premium</b><p>Unlock unlimited AI features and get hired faster.</p><button onClick={() => action("Premium selected")}>Upgrade Now →</button></div>
      <div className="mini">⚡ <span><b>Auto job search is ON</b><small>Finding best jobs for you...</small></span><em>●</em></div>
    </aside>

    <main className="main">
      <header className="top"><div className="search">⌕<input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search jobs, skills, companies..." /><kbd>⌘ K</kbd></div><div className="actions">☼　♧<sup>3</sup><div className="profile"><div className="avatar">NR</div><span><b>Nitin Rathod</b><small>DevOps Engineer</small></span></div></div></header>

      <div className="content">
        <section className="welcome"><div><h1>Good morning, <span>Nitin!</span> 👋</h1><p>Let's find your dream job today with DreamApex AI</p></div><button className="outline" onClick={() => action("Dashboard customization opened")}>☷　Customize Dashboard</button></section>
        {notice && <div className="toast">✓ {notice}</div>}

        {active === "Resume Analyzer" ? <section className="panel" style={{ minHeight: "calc(100vh - 180px)", padding: 32 }}>
          <div className="ph"><div><h2>AI Resume Analyzer</h2><p style={{ margin: "6px 0 0" }}>Upload your resume and let DreamApex AI extract your technical profile.</p></div><b className="live">● Live API</b></div>
          <div style={{ marginTop: 28, border: "1px dashed #b8c4d0", borderRadius: 18, padding: 32, textAlign: "center", background: "#f8fafc" }}>
            <div style={{ fontSize: 44 }}>📄</div>
            <h3 style={{ margin: "12px 0 8px" }}>Upload Resume</h3>
            <p style={{ margin: "0 0 18px", color: "#64748b" }}>Supported formats: PDF, DOCX, TXT</p>
            <input id="resume-upload" type="file" accept=".pdf,.docx,.txt" onChange={e => { setResumeFile(e.target.files?.[0] || null); setResumeResult(null); setResumeError(""); }} />
            {resumeFile && <p style={{ margin: "14px 0", fontWeight: 600 }}>Selected: {resumeFile.name}</p>}
            <button className="primary" disabled={resumeLoading} onClick={analyzeResume} style={{ marginTop: 8 }}>{resumeLoading ? "Analyzing Resume..." : "✦ Analyze Resume"}</button>
            {resumeError && <div style={{ marginTop: 18, padding: 14, borderRadius: 10, background: "#fff1f2", color: "#be123c", fontWeight: 600 }}>⚠ {resumeError}</div>}
          </div>
          {resumeResult && <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <div style={{ border: "1px solid #e2e8f0", borderRadius: 16, padding: 24 }}><h3>Resume Profile</h3><p>{resumeResult.summary}</p><div style={{ fontSize: 38, fontWeight: 800 }}>{resumeResult.skill_count}<small style={{ fontSize: 16, fontWeight: 500 }}> skills found</small></div><p style={{ color: "#64748b" }}>{resumeResult.filename} · {resumeResult.extracted_text_length} characters extracted</p></div>
            <div style={{ border: "1px solid #e2e8f0", borderRadius: 16, padding: 24 }}><h3>Detected Skills</h3><div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>{(resumeResult.skills || []).map(skill => <span key={skill} style={{ padding: "7px 11px", borderRadius: 999, background: "#ecfdf5", color: "#047857", fontWeight: 700 }}>{skill}</span>)}</div><p style={{ marginTop: 20, color: "#64748b" }}>{resumeResult.next_step}</p></div>
          </div>}
        </section> : <>
          <section className="metrics">{[["▣", "247", "Jobs Found", "18%"], ["◎", "32", "Best Matches", "12%"], ["▤", "18", "Applications", "25%"], ["▣", "7", "Interviews", "8%"]].map((x, i) => <div className="metric" key={x[2]}><div className={'mi m' + i}>{x[0]}</div><div><b>{x[1]}</b><small>{x[2]}</small><em>↑ {x[3]} this week</em></div></div>)}</section>
          <section className="grid"><div className="left">
            <div className="panel"><div className="ph"><h2>Top Job Matches</h2><button onClick={() => setActive("Job Matches")}>View all matches →</button></div>{jobs.map(j => <div className="job" key={j.title}><div className="company">{j.logo}</div><div className="ji"><h3>{j.title}</h3><p>{j.company}　•　{j.place}</p><p>{j.salary}</p><div>{j.tags.map(t => <span key={t}>{t}</span>)}</div></div><div className="match"><strong>{j.score}%</strong><small>Match</small></div><button className="heart" onClick={() => action(j.title + " saved")}>♡</button></div>)}<button className="all" onClick={() => setActive("Jobs")}>View all job matches →</button></div>
            <div className="panel recommend"><h2>Recommended for You</h2><div className="recgrid">{[["▧", "Resume Optimization"], ["♙", "Interview Preparation"], ["◇", "Skill Assessment"], ["✎", "Cover Letter Builder"]].map(x => <button key={x[1]} onClick={() => x[1] === "Resume Optimization" ? openResumeAnalyzer() : action(x[1] + " opened")}><i>{x[0]}</i><span><b>{x[1]}</b><small>AI-powered career tools</small><em>Open →</em></span></button>)}</div></div>
          </div>
          <div className="panel resume"><h2>AI Resume Score</h2><div className="score"><b>87</b><small>/100</small></div><h3>Great Score! 🎉</h3><p>Your resume is optimized well</p>{[["Skills", 90, "green"], ["Experience", 85, "purple"], ["Projects", 82, "purple"], ["Education", 88, "orange"]].map(x => <div className="bar" key={x[0]}><label>{x[0]}<span>{x[1]}/100</span></label><div><i className={x[2]} style={{ width: x[1] + "%" }} /></div></div>)}<button className="primary" onClick={openResumeAnalyzer}>✦　Analyze My Resume</button></div>
          <aside className="right"><div className="panel agent"><div className="ph"><h2>DreamApex AI Agent</h2><b className="live">● Live</b></div><img className="bot-image" src="/src/assets/dreamapex-ai-agent.svg" alt="DreamApex AI robot assistant" /><p>Your personal AI job assistant</p>{["Analyzing your resume", "Searching best jobs", "Matching opportunities", "Preparing recommendations"].map((s, i) => <div className="step" key={s}><i>⌕</i><span><b>{s}</b><small>{i === 3 ? "In Progress" : "Completed"}</small></span><strong>{i === 3 ? "◌" : "✓"}</strong></div>)}<button className="primary" onClick={openResumeAnalyzer}>🚀　Analyze Resume</button></div><div className="panel activity"><div className="ph"><h2>Recent Activity</h2><button>View all →</button></div>{["Resume analyzed", "New job matches found", "Application submitted", "Interview scheduled"].map((x, i) => <div className="activity" key={x}><span>{x}</span><small>{["2 min ago", "15 min ago", "1 hour ago", "3 hours ago"][i]}</small><i>●</i></div>)}</div><div className="upgrade"><b>Upgrade to Premium</b><p>Get unlimited access to all AI features, priority support and much more.</p><button onClick={() => action("Premium upgrade selected")}>Upgrade Now →</button></div></aside>
          </section>
        </>}
      </div>
    </main>
  </div>;
}

createRoot(document.getElementById("root")).render(<App/>);
