import React from "react";
import Link from "next/link";

export default function PortSenseProject() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pb-20">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header Section */}
        <Link
          href="/"
          className="text-blue-600 hover:underline mb-8 inline-block font-medium"
        >
          ← Back to Projects
        </Link>
        <header className="mb-16">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">
            PortSense Copilot
          </h1>
          <p className="text-2xl text-gray-600 font-medium text-balance">
            Analysis at Your Fingertips: AI-Powered Conversational Analytics for
            Global Port Operations [cite: 1016, 1017]
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-semibold text-gray-700">
              Agentic AI
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-semibold text-gray-700">
              Data Analytics
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-semibold text-gray-700">
              PSA Hackathon
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
              Lead AI / Backend Engineer
            </p>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">
              The Goal
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To eliminate "visual overload" and "context switching" for
              maritime analysts by providing a conversational interface that
              interprets live dashboards and delivers executive-ready
              insights[cite: 1045, 1046, 1065]. The objective is a "single-click
              insight" and "one definition of truth" across global
              operations[cite: 1058, 1060].
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Technical Architecture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-blue-50 border border-blue-100">
              <h4 className="font-bold text-blue-900 mb-3">
                Frontend & Backend
              </h4>
              <ul className="text-blue-800 space-y-2 text-sm leading-relaxed">
                <li>
                  • <strong>React & Vite:</strong> Delivers a highly responsive,
                  low-latency user interface[cite: 1078, 1079].
                </li>
                <li>
                  • <strong>Python Backend:</strong> Robust server-side logic
                  for complex maritime data orchestration[cite: 1081, 1092].
                </li>
                <li>
                  • <strong>LangChain:</strong> Orchestrates the agentic
                  workflow to manage tool selection and memory[cite: 1083].
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl bg-green-50 border border-green-100">
              <h4 className="font-bold text-green-900 mb-3">AI & Analytics</h4>
              <ul className="text-green-800 space-y-2 text-sm leading-relaxed">
                <li>
                  • <strong>Azure OpenAI:</strong> Drives the core LLM reasoning
                  for natural language interpretation[cite: 1084].
                </li>
                <li>
                  • <strong>Pandas:</strong> Powers on-the-fly KPI computation
                  and high-speed data manipulation[cite: 1086, 1094].
                </li>
                <li>
                  • <strong>Power BI Integration:</strong> Seamlessly interprets
                  live dashboards into business-ready narratives[cite: 1024,
                  1086, 1098].
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Agentic Features</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 shrink-0 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">
                  Agentic Analysis Engine
                </h4>
                <p className="text-gray-600 italic mb-2">
                  `kpi_snapshot`, `trend_mom`
                </p>
                <p className="text-gray-600 leading-relaxed">
                  A sophisticated system that autonomously selects the
                  appropriate analytics tool based on user prompts—from broad
                  snapshot summaries to month-over-month trend analysis[cite:
                  1065, 1068, 1070].
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 shrink-0 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">
                  External Context Correlation
                </h4>
                <p className="text-gray-600 italic mb-2">
                  `delay_explainer` tool
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Bridges the "Narrative Gap" by using web search grounding to
                  correlate internal KPI drops with real-world drivers like
                  extreme weather, strikes, or port congestion[cite: 1050].
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 shrink-0 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">
                  Predictive Intelligence & Weather
                </h4>
                <p className="text-gray-600 italic mb-2">
                  `kpi_forecaster`, `weather_forecast`
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Provides forward-looking outlooks by analyzing geopolitical
                  and economic trends. Integrates live weather forecasts for
                  ports like Tuas and Pasir Panjang to mitigate environmental
                  impacts[cite: 1071].
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Deep Dive */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Engineering Logic</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h4 className="font-bold text-lg mb-2 text-blue-900">
                Header Normalization
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Developed a regex-based flexible column mapper to normalize
                inconsistent "data wrinkles" (e.g., mapping `data[Bunker Saved
                (USD)]` to canonical keys), ensuring system resilience against
                raw file variations.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h4 className="font-bold text-lg mb-2 text-blue-900">
                Metric Diversity & Bias Mitigation
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Built a custom suggestion generator that programmatically forces
                diversity in recommended queries, preventing the system from
                over-focusing on repetitive metrics and ensuring holistic
                operational visibility.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6 md:col-span-2">
              <h4 className="font-bold text-lg mb-2 text-blue-900">
                Deterministic Auditability
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Engineered responses to be auditable and deterministic by
                returning structured JSON outputs defining the precise "who,
                what, and when" for every computed result[cite: 1061].
              </p>
            </div>
          </div>
        </section>

        {/* Business Impact Section */}
        <section className="mb-20 bg-gray-900 text-white p-10 rounded-2xl">
          <h2 className="text-3xl font-bold mb-8">Business Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">
                Instant
              </div>
              <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">
                Time to Insight
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Saves hours of manual data synthesis[cite: 1038].
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">
                Actionable
              </div>
              <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">
                Strategic Alignment
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Aligned with PSA's global network strategy[cite: 1036, 1065].
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">
                Surfaced
              </div>
              <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">
                Sustainability Links
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Identifies hidden links between wait times and bunker
                savings[cite: 1054].
              </p>
            </div>
          </div>
        </section>

        {/* Final Branding Section */}
        <section className="border-t border-gray-100 pt-20">
          <h2 className="text-3xl font-bold mb-8">Data-Driven Excellence</h2>
          <p className="text-gray-700 leading-relaxed mb-10">
            PortSense transforms overwhelmed maritime analysts into proactive
            decision-makers. By automating the data lifecycle—from ingestion to
            explanation—we empower PSA's regions to act faster and
            together[cite: 1039, 1040].
          </p>
          <div className="flex gap-8">
            <Link
              href="https://github.com/stellecodes"
              className="text-blue-600 font-bold hover:underline"
            >
              View Source on GitHub
            </Link>
            <Link
              href="/"
              className="text-gray-400 font-bold hover:text-gray-600"
            >
              Download Presentation PDF
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
