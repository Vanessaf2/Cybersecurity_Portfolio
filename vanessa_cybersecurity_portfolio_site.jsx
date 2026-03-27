export default function PortfolioSite() {
  const projects = [
    {
      title: "Smart TV Local Network API Security Project",
      description:
        "Hands-on IoT security project focused on identifying and testing local API behavior for a smart television in a controlled lab environment.",
      bullets: [
        "Configured a Linux virtual machine in bridged mode for local network communication testing",
        "Used Nmap to discover hosts and identify relevant services during enumeration",
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
        "Reviewed endpoint statistics, protocol behavior, and conversations in packet captures",
        "Identified significant internal host activity and suspicious traffic patterns",
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
        "Tested intentionally vulnerable web applications for SQL injection behavior",
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
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid gap-10 md:grid-cols-[1.4fr_.8fr] md:items-center">
            <div>
              <p className="mb-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm tracking-wide text-cyan-200">
                Cybersecurity Portfolio
              </p>
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                Vanessa Flores
              </h1>
              <p className="mt-3 text-lg text-slate-300 md:text-xl">
                BBA in Cybersecurity · The University of Texas at San Antonio
              </p>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
                I am a cybersecurity student with hands-on experience in network
                traffic analysis, vulnerability testing, Linux-based security
                tooling, and practical lab investigation. My work focuses on
                building technical skill through projects, simulations, and clear
                professional documentation.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-2xl bg-cyan-400 px-5 py-3 font-medium text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5"
                >
                  View Projects
                </a>
                <a
                  href="#github"
                  className="rounded-2xl border border-slate-700 px-5 py-3 font-medium text-slate-100 transition hover:border-slate-500 hover:bg-slate-900"
                >
                  GitHub Setup
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl">
              <h2 className="text-xl font-semibold">Focus Areas</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Threat Investigation",
                  "Network Security",
                  "IoT Security",
                  "Web Application Testing",
                  "Security Operations",
                  "Technical Reporting",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-1">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              About
            </p>
            <h2 className="mt-2 text-3xl font-bold">Who I Am</h2>
          </div>
          <div className="md:col-span-2 rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-xl">
            <p className="leading-7 text-slate-300">
              I am currently completing my BBA in Cybersecurity at UTSA and have
              focused my coursework on hands-on technical learning, practical
              investigations, and polished reporting. I am especially interested
              in security operations, threat detection, vulnerability analysis,
              and defensive security work where I can apply both technical and
              analytical skills.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-6">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-xl">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Skills
              </p>
              <h2 className="mt-2 text-3xl font-bold">Tools and Technical Areas</h2>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Projects
          </p>
          <h2 className="mt-2 text-3xl font-bold">Featured Work</h2>
        </div>
        <div className="grid gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-xl"
            >
              <div className="grid gap-6 md:grid-cols-[1.2fr_.8fr]">
                <div>
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">
                    {project.description}
                  </p>
                  <ul className="mt-5 space-y-3 text-slate-300">
                    {project.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    Tools Used
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-slate-700 px-3 py-1.5 text-sm text-slate-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="github" className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            GitHub
          </p>
          <h2 className="mt-2 text-3xl font-bold">Suggested Repository Setup</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "smart-tv-api-security-project",
              "pcap-analysis-labs",
              "sql-injection-security-lab",
              "cybersecurity-portfolio",
            ].map((repo) => (
              <div
                key={repo}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-5"
              >
                <p className="font-mono text-sm text-cyan-200">{repo}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
              <h3 className="text-xl font-semibold">What to Upload</h3>
              <ul className="mt-4 space-y-3 text-slate-300">
                <li>README files for each project</li>
                <li>Sanitized screenshots</li>
                <li>Diagrams and milestone visuals</li>
                <li>Short write-ups and lessons learned</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
              <h3 className="text-xl font-semibold">Best First Pinned Repo</h3>
              <p className="mt-4 text-slate-300 leading-7">
                Start by pinning your Smart TV project. It is unique, hands-on,
                and shows practical skills in IoT security, network enumeration,
                Linux tooling, and technical documentation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
