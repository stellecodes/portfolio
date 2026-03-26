import Link from "next/link";

const projects = [
  {
    id: "portsense",
    title: "PortSense Copilot",
    tags: ["AI", "Python", "Data"],
    description:
      "An agentic AI assistant for maritime analysts that translates complex dashboard data into executive-ready insights.",
  },
  {
    id: "a-eyes",
    title: "A-Eyes Gaze Assistant",
    tags: ["Accessibility", "CV", "AI"],
    description:
      "A hands-free educational tool using real-time eye-tracking and LLMs to help students with motor impairments interact with lecture content.",
  },
  {
    id: "upskin",
    title: "UpSkin",
    tags: ["Mobile", "Health", "AI"],
    description:
      "A full-stack skincare companion featuring image facial analysis, habit-tracking systems and AI-driven product recommendations.",
  },
  {
    id: "classconnect",
    title: "ClassConnect",
    tags: ["SWE", "Java", "Backend"],
    description:
      "A CLI-optimized desktop application for tutors, built with a focus on rigorous software architecture and defensive programming.",
  },
];

const leadershipAndVia = [
  {
    title: "Leadership Experience",
    items: [
      {
        role: "NUS School of Computing Orientation Group Leader",
        year: "2025",
        desc: "",
      },
      {
        role: "Ridge View Residential College Orientation Group Leader",
        year: "2025",
        desc: "",
      },
      {
        role: "VJC Art Club Vice President",
        year: "2022 - 2023",
        desc: "",
      },
      {
        role: "VJC Open House Facilitator",
        year: "2023",
        desc: "",
      },
      {
        role: "VJC Orientation Group Leader",
        year: "2023",
        desc: "",
      },
    ],
  },
  {
    title: "Community & VIA",
    items: [
      {
        role: "Volunteer at AWWA Early Intervention Centre @ Hougang",
        year: "2026",
        desc: "Helped facilitate activities for childred with special needs",
      },
      {
        role: "Volunteer at MINDS @ Hougang",
        year: "2026",
        desc: "Accompanied intellectually disabled individuals in activities to promote social interaction and community integration",
      },
      {
        role: "Accessibility Audit of NUS BIZ2 Building",
        year: "2026",
        desc: "Evaluated the accessibility of the building in accordance to universal design principle and BCA guidelines, and provided recommendations for improvement",
      },
      {
        role: "Volunteer Tutor with Heartware Network",
        year: "2023",
        desc: "Provided weekly online tuition to underprivileged primary school students.",
      },
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pb-20 selection:bg-blue-100">
      <div className="max-w-4xl mx-auto px-6">
        {/* Hero Section */}
        <section className="py-24 md:py-32">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8">
            Stelle Lim.
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 leading-tight max-w-2xl font-medium">
            Computer Science & Statistics student at NUS building at the
            intersection of{" "}
            <span className="text-blue-600">data engineering</span> and{" "}
            <span className="text-blue-600">human-centric design</span>.
          </p>
        </section>

        {/* Projects Grid */}
        <section className="mb-32">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-10">
            Selected Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((p) => (
              <Link
                key={p.id}
                href={`/projects/${p.id}`}
                className="group block"
              >
                <div className="p-10 rounded-[2rem] border border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 bg-white h-full flex flex-col">
                  <div className="flex gap-2 mb-6">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-bold group-hover:text-blue-600 transition-colors mb-4">
                    {p.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                    {p.description}
                  </p>
                  <p className="text-blue-600 font-bold text-sm inline-flex items-center">
                    See more{" "}
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Technical Foundation Section */}
        <section className="mb-32 border-t border-gray-100 pt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {/* Column 1: Technical Expertise */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-10">
                Technical Expertise
              </h2>
              <div className="space-y-10">
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">
                    Languages & Frameworks
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Python, Java, JavaScript/TypeScript, C, R, Assembly
                    Language, React, React Native (Expo), HTML/CSS, Next.js, and
                    JavaFX.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">
                    Systems & Infrastructure
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Express.js, FastAPI, PostgreSQL (Neon).
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Cloud hosting via Render (Backend) and Vercel (Frontend).
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">
                    AI, Data & Real-time
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Pandas, NumPy, ScikitLearn, RESTful APIs, WebSockets.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">
                    SWE
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    E2E testing with Supertest, User Acceptance Testing, JUnit
                    5.
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Git/GitHub, Agile Methodology with ClickUp.
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2: Academic Foundation */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-10">
                Key Coursework
              </h2>
              <div className="space-y-10">
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wider">
                    Software Systems & Architecture
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {["CS2103T", "CS2102", "CS2105", "CS2030S"].map((mod) => (
                      <span
                        key={mod}
                        className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded"
                      >
                        {mod}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Focused on large-scale Software Engineering (Java/UML),
                    Database Systems (SQL/Schema Design), Computer Networks, and
                    Object-Oriented Programming.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wider">
                    Low-Level & Operating Systems
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {["CS2106", "CS2100"].map((mod) => (
                      <span
                        key={mod}
                        className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded"
                      >
                        {mod}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    In-depth study of Operating Systems (Processes/Concurrency)
                    and Computer Organisation, including Assembly and hardware
                    interaction.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wider">
                    Algorithms & Artificial Intelligence
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {["CS2109S", "CS2040S"].map((mod) => (
                      <span
                        key={mod}
                        className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded"
                      >
                        {mod}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Rigorous foundation in Data Structures and Algorithms
                    alongside Introduction to AI and Machine Learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership & Impact Section */}
        <section id="leadership" className="mb-32">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-16">
            Leadership & Impact
          </h2>
          <div className="space-y-24">
            {" "}
            {/* Stacks the two main sections (Leadership and VIA) */}
            {leadershipAndVia.map((section) => (
              <div key={section.title}>
                <h3 className="text-2xl font-bold mb-10 text-gray-900 border-b border-gray-100 pb-4">
                  {section.title}
                </h3>
                <div className="space-y-10">
                  {" "}
                  {/* Spacing between individual items */}
                  {section.items.map((item) => (
                    <div
                      key={item.role}
                      className={item.desc ? "mb-8" : "mb-2"}
                    >
                      <div className="flex justify-between items-baseline gap-4 mb-2">
                        <h4 className="font-bold text-gray-900 text-xl leading-tight">
                          {item.role}
                        </h4>
                        <span className="text-xs font-bold text-blue-600 whitespace-nowrap uppercase tracking-wider">
                          {item.year}
                        </span>
                      </div>
                      {item.desc && (
                        <p className="text-gray-600 text-base leading-relaxed max-w-3xl">
                          {item.desc}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 border-t border-gray-100 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Let&apos;s build something inclusive.
          </h2>
          <p className="text-gray-500 mb-10 max-w-lg mx-auto">
            I&apos;m currently looking for Summer 2026 internships where I can
            apply my skills in engineering and data.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 font-bold">
            <Link
              href="mailto:stelle@u.nus.edu"
              className="bg-gray-900 text-white px-10 py-4 rounded-full hover:bg-blue-600 transition-all duration-300"
            >
              Email Me
            </Link>
            <Link
              href="https://linkedin.com/in/stellelim"
              className="bg-white text-gray-900 border border-gray-200 px-10 py-4 rounded-full hover:bg-gray-50 transition-all duration-300"
            >
              LinkedIn
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
