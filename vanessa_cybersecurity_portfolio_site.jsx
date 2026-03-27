export default function PortfolioSite() {
  const page = {
    minHeight: "100vh",
    background: "#0b1020",
    color: "#e5e7eb",
    fontFamily: "Arial, sans-serif",
  };

  const container = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "32px 20px",
  };

  const hero = {
    background: "linear-gradient(135deg, #111827 0%, #0f172a 100%)",
    border: "1px solid #1f2937",
    borderRadius: "20px",
    padding: "40px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
    marginBottom: "24px",
    textAlign: "center",
  };

  const section = {
    background: "#111827",
    border: "1px solid #1f2937",
    borderRadius: "18px",
    padding: "28px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
    marginBottom: "24px",
  };

  const title = {
    fontSize: "48px",
    margin: "0 0 10px 0",
    color: "#f9fafb",
    fontWeight: "bold",
  };

  const nameStyle = {
    fontSize: "32px",
    margin: "0 0 6px 0",
    color: "#e5e7eb",
  };

  const subtitle = {
    fontSize: "18px",
    color: "#93c5fd",
    marginBottom: "18px",
  };

  const buttonRow = {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    marginTop: "22px",
  };

  const primaryBtn = {
    display: "inline-block",
    background: "#38bdf8",
    color: "#0f172a",
    textDecoration: "none",
    padding: "12px 18px",
    borderRadius: "12px",
    fontWeight: "bold",
  };

  const secondaryBtn = {
    display: "inline-block",
    background: "transparent",
    color: "#e5e7eb",
    textDecoration: "none",
    padding: "12px 18px",
    borderRadius: "12px",
    border: "1px solid #334155",
    fontWeight: "bold",
  };

  const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "12px",
  };

  const chip = {
    display: "inline-block",
    padding: "8px 12px",
    borderRadius: "999px",
    border: "1px solid #334155",
    background: "#0f172a",
    margin: "6px 8px 0 0",
    fontSize: "14px",
  };

  const projectCard = {
    background: "#0f172a",
    border: "1px solid #243041",
    borderRadius: "16px",
    padding: "22px",
    marginTop: "16px",
  };

  const smallHeading = {
    color: "#67e8f9",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontSize: "12px",
    marginBottom: "8px",
  };

  const projects = [
    {
      title: "Smart TV Local Network API Security Project",
      description:
        "Hands-on IoT security project focused on identifying and testing local API behavior for a smart television in a controlled lab environment.",
      bullets: [
        "Configured a Linux virtual machine in bridged mode for local network testing",
        "Used Nmap to discover hosts and identify relevant services",
        "Performed API connectivity testing with curl and documented authentication behavior",
        "Produced structured milestone reports with screenshots and technical analysis",
      ],
      tools: ["Nmap", "curl", "Ubuntu/Kali Linux", "VMware Workstation"],
    },
    {
      title: "Network Forensics PCAP Analysis",
      description:
        "Packet capture analysis project using Wireshark and related tools to identify hosts, traffic patterns, and investigative findings.",
      bullets: [
        "Reviewed endpoint statistics and protocol behavior in packet captures",
        "Identified significant host activity and suspicious traffic patterns",
        "Used multiple tools to support findings and confirm observations",
        "Documented investigative methodology and results in formal lab reports",
      ],
      tools: ["Wireshark", "NetworkMiner", "SNORT"],
    },
    {
      title: "SQL Injection Web Application Testing Lab",
      description:
        "Controlled lab work demonstrating how weak input validation can lead to SQL injection vulnerabilities in web applications.",
      bullets: [
        "Tested intentionally vulnerable applications for SQL injection behavior",
        "Observed authentication bypass and data extraction through crafted input",
        "Explained the impact of insecure coding practices on application security",
        "Summarized findings in a professional lab report format",
      ],
      tools: ["DVWA", "Mutillidae", "Browser Testing", "SQL Payloads"],
    },
  ];

  const skills = [
    "Wireshark",
    "Nmap",
    "Burp Suite",
    "SNORT",
    "NetworkMiner",
    "curl",
    "Kali Linux",
    "Ubuntu Linux",
    "VMware Workstation",
    "Packet Analysis",
    "Web Security Testing",
    "IoT Security",
  ];

  return (
    <div style={page}>
      <div style={container}>
        <section style={hero}>
          <h1 style={title}>Cybersecurity Portfolio</h1>
          <h2 style={nameStyle}>Vanessa Flores</h2>
          <div style={subtitle}>
            BBA in Cybersecurity · The University of Texas at San Antonio
          </div>
          <p style={{ lineHeight: 1.7, maxWidth: "780px", color: "#d1d5db" }}>
            I am a cybersecurity student with hands-on experience in network
            traffic analysis, vulnerability testing, Linux-based security
            tooling, and practical lab investigation. My work focuses on
            building technical skill through projects, simulations, and clear
            professional documentation.
          </p>
          <div style={buttonRow}>
            <a href="#projects" style={primaryBtn}>
              View Projects
            </a>
            <a href="#contact" style={secondaryBtn}>
              Contact
            </a>
          </div>
        </section>

        <section style={section}>
          <div style={smallHeading}>About</div>
          <h2 style={{ marginTop: 0, color: "#f9fafb" }}>Who I Am</h2>
          <p style={{ lineHeight: 1.7, color: "#d1d5db" }}>
            I am currently completing my BBA in Cybersecurity at UTSA and have
            focused my coursework on hands-on technical learning, practical
            investigations, and polished reporting. I am especially interested
            in security operations, threat detection, vulnerability analysis,
            and defensive security work.
          </p>
        </section>

        <section style={section}>
          <div style={smallHeading}>Skills</div>
          <h2 style={{ marginTop: 0, color: "#f9fafb" }}>
            Tools and Technical Areas
          </h2>
          <div>
            {skills.map((skill) => (
              <span key={skill} style={chip}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="projects" style={section}>
          <div style={smallHeading}>Projects</div>
          <h2 style={{ marginTop: 0, color: "#f9fafb" }}>Featured Work</h2>
          {projects.map((project) => (
            <div key={project.title} style={projectCard}>
              <h3 style={{ marginTop: 0, color: "#f8fafc" }}>
                {project.title}
              </h3>
              <p style={{ color: "#d1d5db", lineHeight: 1.7 }}>
                {project.description}
              </p>
              <ul
                style={{
                  color: "#d1d5db",
                  lineHeight: 1.7,
                  paddingLeft: "20px",
                }}
              >
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <div style={{ marginTop: "10px" }}>
                {project.tools.map((tool) => (
                  <span key={tool} style={chip}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section style={section}>
          <div style={smallHeading}>GitHub</div>
          <h2 style={{ marginTop: 0, color: "#f9fafb" }}>
            Suggested Repository Setup
          </h2>
          <div style={grid}>
            {[
              "smart-tv-api-security-project",
              "pcap-analysis-labs",
              "sql-injection-security-lab",
              "cybersecurity-portfolio",
            ].map((repo) => (
              <div
                key={repo}
                style={{
                  background: "#0f172a",
                  border: "1px solid #243041",
                  borderRadius: "14px",
                  padding: "16px",
                  fontFamily: "monospace",
                  color: "#bae6fd",
                }}
              >
                {repo}
              </div>
            ))}
          </div>
        </section>

        <section id="contact" style={section}>
          <div style={smallHeading}>Contact</div>
          <h2 style={{ marginTop: 0, color: "#f9fafb" }}>Let’s Connect</h2>
          <p style={{ color: "#d1d5db", lineHeight: 1.7 }}>
            Add your LinkedIn URL, GitHub profile, and professional email here
            before publishing.
          </p>
          <ul
            style={{ color: "#d1d5db", lineHeight: 1.8, paddingLeft: "20px" }}
          >
            <li>LinkedIn: add your link</li>
            <li>GitHub: add your username</li>
            <li>Email: add your professional email</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
