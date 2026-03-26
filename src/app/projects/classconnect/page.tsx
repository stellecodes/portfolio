import React from "react";
import Link from "next/link";

export default function ClassConnectProject() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pb-20">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Navigation */}
        <Link
          href="/"
          className="text-blue-600 hover:underline mb-8 inline-block font-medium"
        >
          ← Back to Projects
        </Link>

        {/* Header Section */}
        <header className="mb-16">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">
            ClassConnect
          </h1>
          <p className="text-2xl text-gray-600 font-medium text-balance">
            Centralized Management for Private Educators: A CLI-First Enterprise
            Solution
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-semibold text-gray-700">
              Java
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-semibold text-gray-700">
              Software Architecture
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-semibold text-gray-700">
              Desktop App
            </span>
          </div>
        </header>

        {/* Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 border-y border-gray-100 py-10">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">
              Role
            </h3>
            <p className="font-medium text-lg text-gray-800">
              Software Engineer (NUS CS2103T Team F10-4)
            </p>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">
              The Goal
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To provide private tuition teachers with a streamlined desktop
              interface for managing complex relationships between students and
              parents[cite: 1, 2]. The project transformed a basic address book
              into a specialized tool for organizing academic subjects, contact
              details, and student-parent links[cite: 1, 2].
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Engineering Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-blue-50 border border-blue-100">
              <h4 className="font-bold text-blue-900 mb-3">Core Development</h4>
              <ul className="text-blue-800 space-y-2 text-sm leading-relaxed">
                <li>
                  • <strong>Java 11 & JavaFX:</strong> Core application logic
                  and FXML-based graphical interface[cite: 2].
                </li>
                <li>
                  • <strong>JUnit 5:</strong> Rigorous unit and integration
                  testing[cite: 2].
                </li>
                <li>
                  • <strong>Gradle:</strong> Automated build system and
                  dependency management[cite: 2].
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3">
                Documentation & Lifecycle
              </h4>
              <ul className="text-gray-800 space-y-2 text-sm leading-relaxed">
                <li>
                  • <strong>Jekyll:</strong> Used for rendering professional
                  project documentation on GitHub Pages[cite: 2].
                </li>
                <li>
                  • <strong>PlantUML:</strong> Authored detailed Architecture,
                  Sequence, and Class diagrams[cite: 2].
                </li>
                <li>
                  • <strong>GitHub Actions:</strong> CI/CD for automated builds
                  and "ready-to-deploy" JAR files[cite: 2].
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Multi-Layered Architecture */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Architecture & Design</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The application follows a strictly decoupled multi-layered pattern
            to ensure high cohesion and maintainability[cite: 2]:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 border border-gray-100 rounded-lg shadow-sm">
              <h4 className="font-bold mb-2">UI Component</h4>
              <p className="text-sm text-gray-600 italic">JavaFX & FXML</p>
              <p className="text-sm text-gray-700 mt-2">
                Executes user commands and displays real-time data[cite: 2].
              </p>
            </div>
            <div className="p-5 border border-gray-100 rounded-lg shadow-sm">
              <h4 className="font-bold mb-2">Logic Component</h4>
              <p className="text-sm text-gray-600 italic">Command Pattern</p>
              <p className="text-sm text-gray-700 mt-2">
                Parses input and coordinates business logic execution[cite: 2].
              </p>
            </div>
            <div className="p-5 border border-gray-100 rounded-lg shadow-sm">
              <h4 className="font-bold mb-2">Model Component</h4>
              <p className="text-sm text-gray-600 italic">In-memory State</p>
              <p className="text-sm text-gray-700 mt-2">
                Manages the address book data, filtered lists, and user
                preferences[cite: 2].
              </p>
            </div>
            <div className="p-5 border border-gray-100 rounded-lg shadow-sm">
              <h4 className="font-bold mb-2">Storage Component</h4>
              <p className="text-sm text-gray-600 italic">JSON Persistence</p>
              <p className="text-sm text-gray-700 mt-2">
                Handles the "One Definition of Truth" by reading/writing JSON
                data to disk[cite: 2].
              </p>
            </div>
          </div>
        </section>

        {/* Software Engineering Practices */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            Professional SWE Practices
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 shrink-0 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">
                  Brownfield Development
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Extensively navigated and extended a large, existing codebase
                  (AddressBook-Level 3), requiring deep comprehension of
                  pre-existing design patterns and architectural
                  constraints[cite: 2].
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 shrink-0 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">
                  Defensive Programming & NFRs
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Implemented robust error handling for corrupted data. The app
                  detects invalid JSON and initializes a safe, empty state to
                  prevent crashes—prioritizing data integrity as a key
                  Non-Functional Requirement[cite: 2].
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 shrink-0 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">
                  Agile & DevOps Integration
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Managed development via **ClickUp** and GitHub Issues.
                  Leveraged Git for version control and atomic commits,
                  maintaining a stable codebase through a milestone-driven
                  cycle[cite: 2].
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Interview Flex */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Architectural Reflection
          </h2>
          <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl">
            <p className="text-xl text-gray-800 leading-relaxed italic text-center">
              &quot;Working on ClassConnect taught me the importance of the{" "}
              <strong>Logic-Model-Storage separation</strong>. When I
              implemented the &apos;Link&apos; feature, I had to ensure the
              Logic component correctly updated the Model without creating
              circular references, while the Storage component had to remain
              capable of serializing those complex relationships back to
              JSON.&quot; [cite: 2]
            </p>
          </div>
        </section>

        {/* Artifacts / Documentation Section */}
        <section className="mb-20 bg-gray-900 text-white p-10 rounded-2xl">
          <h2 className="text-3xl font-bold mb-8">Documentation Artifacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-blue-400 font-bold mb-4 flex items-center gap-2">
                User Guide (UG)
              </h4>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Translated technical features like &quot;Linked Contacts&quot;
                into clear instructions for private tutors, ensuring a minimal
                learning curve for non-technical users[cite: 1].
              </p>
              <div className="aspect-[4/3] bg-white rounded-lg overflow-hidden relative group">
                {/* Embed PDF Preview / Iframe */}
                <iframe
                  src="/docs/ClassConnect-UG.pdf#toolbar=0"
                  className="w-full h-full border-none"
                  title="User Guide Preview"
                />
                <div className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link
                    href="/docs/ClassConnect-UG.pdf"
                    target="_blank"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md font-bold text-xs uppercase tracking-widest shadow-lg"
                  >
                    Open Full PDF
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-green-400 font-bold mb-4 flex items-center gap-2">
                Developer Guide (DG)
              </h4>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Documented the Logic-Model interaction using{" "}
                <strong>Sequence Diagrams</strong> to detail exactly how
                commands update the address book state while maintaining data
                consistency[cite: 2].
              </p>
              <div className="aspect-[4/3] bg-white rounded-lg overflow-hidden relative group">
                <iframe
                  src="/docs/ClassConnect-DG.pdf#toolbar=0"
                  className="w-full h-full border-none"
                  title="Developer Guide Preview"
                />
                <div className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link
                    href="/docs/ClassConnect-DG.pdf"
                    target="_blank"
                    className="bg-green-600 text-white px-4 py-2 rounded-md font-bold text-xs uppercase tracking-widest shadow-lg"
                  >
                    Open Full PDF
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link
              href="https://stellecodes.github.io/classconnect/"
              target="_blank"
              className="text-blue-400 font-bold hover:underline text-sm"
            >
              View Jekyll-Rendered Documentation Site →
            </Link>
          </div>
        </section>

        {/* Footer Navigation */}
        <section className="border-t border-gray-100 pt-12 flex justify-between">
          <Link
            href="/projects/upskin"
            className="text-gray-400 hover:text-blue-600 font-medium transition-colors"
          >
            ← Previous: UpSkin
          </Link>
          <Link
            href="/projects/a-eyes"
            className="text-gray-400 hover:text-blue-600 font-medium transition-colors"
          >
            Next: A-Eyes →
          </Link>
        </section>
      </div>
    </div>
  );
}
