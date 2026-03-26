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

        {/* Skills / Focus Areas */}
        <section className="mb-32 grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-gray-100 pt-20">
          <div>
            <h3 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-widest">
              Core Tech
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              TypeScript, Java, Python, React, Next.js, Express, PostgreSQL,
              FastAPI.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-widest">
              Focus Areas
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Agentic AI, Computer Vision, UI/UX Accessibility, Quantitative
              Analysis.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-widest">
              Standards
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              SDLC Management, CI/CD, Automated Testing (JUnit, Supertest), WCAG
              2.1.
            </p>
          </div>
        </section>

        {/* Leadership & VIA Section */}
        <section id="leadership" className="mb-32">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-16">
            Leadership & Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {leadershipAndVia.map((section) => (
              <div key={section.title}>
                <h3 className="text-2xl font-bold mb-10 text-gray-900 border-b border-gray-100 pb-4">
                  {section.title}
                </h3>
                <div className="space-y-8">
                  {" "}
                  {/* Reduced general spacing */}
                  {section.items.map((item) => (
                    <div
                      key={item.role}
                      className={item.desc ? "mb-6" : "mb-2"}
                    >
                      <div className="flex justify-between items-baseline gap-4 mb-1">
                        <h4 className="font-bold text-gray-900 text-lg leading-tight">
                          {item.role}
                        </h4>
                        <span className="text-xs font-bold text-blue-600 whitespace-nowrap uppercase tracking-wider">
                          {item.year}
                        </span>
                      </div>
                      {item.desc && (
                        <p className="text-gray-500 text-sm leading-relaxed mt-2">
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
