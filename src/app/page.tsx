import React from "react";

// Define your projects based on your background
const projects = [
  {
    title: "Eye-Tracking Accessibility App",
    description:
      "Developed an interface for users with motor impairments to navigate digital content using eye movement, focusing on gaze-contingent UI design.",
    tags: ["Accessibility", "Python", "UI/UX"],
  },
  {
    title: "BIZ2 Building Accessibility Audit",
    description:
      "Conducted a comprehensive audit of campus infrastructure, identifying barriers for students with disabilities and proposing architectural solutions.",
    tags: ["Research", "Inclusion", "Audit"],
  },
  {
    title: "PSA Hackathon: Smart Dashboard Chatbot",
    description:
      "Built an LLM-powered assistant to help users navigate complex logistics data via natural language queries.",
    tags: ["LLM", "React", "Data Analytics"],
  },
  {
    title: "ClassConnect",
    description:
      "A full-stack tutor address book application designed for streamlined student-teacher management.",
    tags: ["Next.js", "TypeScript", "CRUD"],
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
      {/* Skip to Content for Screen Readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-blue-600 focus:text-white"
      >
        Skip to main content
      </a>

      <header className="border-b border-gray-200 sticky top-0 bg-white/80 backdrop-blur-md z-10">
        <nav
          className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center"
          aria-label="Main Navigation"
        >
          <span className="font-bold text-xl tracking-tight">
            CS Student @ NUS
          </span>
          <div className="space-x-6">
            <a
              href="#projects"
              className="hover:text-blue-600 focus:outline-2 focus:outline-blue-600 outline-offset-4"
            >
              Projects
            </a>
            <a
              href="#about"
              className="hover:text-blue-600 focus:outline-2 focus:outline-blue-600 outline-offset-4"
            >
              About
            </a>
          </div>
        </nav>
      </header>

      <main id="main-content" className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <section className="mb-20">
          <h1 className="text-5xl font-extrabold mb-6 text-gray-900 leading-tight">
            Building software that{" "}
            <span className="text-blue-600">everyone</span> can use.
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            I’m a Computer Science & Statistics student focusing on the
            intersection of **Software Engineering** and **Usability**.
            Currently preparing for GovTech's mission-driven tech initiatives.
          </p>
        </section>

        {/* Projects Grid */}
        <section id="projects" className="mb-20">
          <h2 className="text-3xl font-bold mb-10 flex items-center">
            <span className="bg-blue-600 w-8 h-1 mr-4"></span>
            Featured Impact
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={index}
                className="group border border-gray-200 p-8 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all focus-within:ring-2 focus-within:ring-blue-600"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 leading-snug">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* The "Why Accessibility" Section - Perfect for your specific role */}
        <section
          id="about"
          className="bg-gray-50 p-10 rounded-2xl border border-gray-100"
        >
          <h2 className="text-2xl font-bold mb-4">
            Why Usability & Accessibility?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            Through projects like the <strong>BIZ2 Accessibility Audit</strong>{" "}
            and <strong>eye-tracking software</strong>, I've realized that great
            code is meaningless if it excludes users. My goal is to build
            digital public services that are intuitive for all citizens,
            regardless of their physical or cognitive abilities.
          </p>
        </section>
      </main>

      <footer className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100 text-center text-gray-500 text-sm">
        <p>© 2026 • Built with accessibility in mind</p>
      </footer>
    </div>
  );
}
