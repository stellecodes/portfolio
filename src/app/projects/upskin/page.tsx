import React from "react";
import Link from "next/link";

export default function UpSkinProject() {
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
            UpSkin
          </h1>
          <p className="text-2xl text-gray-600 font-medium">
            AI-Powered Personal Skincare Companion
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-semibold text-gray-700">
              Full-Stack Development
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-semibold text-gray-700">
              AI Integration
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-semibold text-gray-700">
              NUS Orbital
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
              Full-Stack Developer
            </p>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">
              The Goal
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To simplify skincare management by transforming it into a
              personalized, data-driven experience. UpSkin empowers users to
              build consistent habits and make informed product decisions
              through objective AI-driven facial analysis and tailored
              recommendations.
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
                  • <strong>React Native (Expo):</strong> Cross-platform mobile
                  development (JavaScript).
                </li>
                <li>
                  • <strong>Express.js:</strong> Central logic layer hosted on
                  Render.
                </li>
                <li>
                  • <strong>Clerk:</strong> Secure, breach-aware authentication
                  isolating sensitive user credentials.
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl bg-green-50 border border-green-100">
              <h4 className="font-bold text-green-900 mb-3">AI & Data</h4>
              <ul className="text-green-800 space-y-2 text-sm leading-relaxed">
                <li>
                  • <strong>PostgreSQL (Neon):</strong> Modular schema design
                  for high scalability.
                </li>
                <li>
                  • <strong>Face++ API:</strong> Automated detection of acne,
                  dryness, and wrinkles.
                </li>
                <li>
                  • <strong>DeepSeek AI API:</strong> Tailored product
                  recommendations based on user history.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Core Features</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 shrink-0 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">
                  Objective Image Skin Analysis
                </h4>
                <p className="text-gray-600">
                  Evaluates skin health via camera integration to detect
                  blackheads, acne, and dark circles automatically.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 shrink-0 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">
                  Personalized Recommendation Engine
                </h4>
                <p className="text-gray-600">
                  Analyzes logs and AI data to recommend face washes, toners,
                  and moisturizers with specific technical reasoning.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 shrink-0 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">
                  Habit Building & Smart Reminders
                </h4>
                <p className="text-gray-600">
                  Features a streak-tracking calendar and push notifications at
                  10 PM to ensure routine consistency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Engineering Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h4 className="font-bold text-lg mb-2 text-blue-900">
                Optimizing AI Latency
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Initially, recommendations were slow due to reasoning-heavy
                LLMs. I improved performance by switching to a lightweight model
                and implementing Prompt Engineering with few-shot samples to
                maintain quality while reducing wait times.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h4 className="font-bold text-lg mb-2 text-blue-900">
                24/7 Backend Availability
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                To solve 50-second "cold starts" on free-tier hosting, I
                implemented a Cron Job that sends GET requests every 14 minutes,
                ensuring the instance remains active for users.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h4 className="font-bold text-lg mb-2 text-blue-900">
                Advanced Data Integrity
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                I designed a decoupled database relationship where credentials
                are isolated from logs. This ensures sensitive user data remains
                untouched during analytics queries.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h4 className="font-bold text-lg mb-2 text-blue-900">
                Collaborative Git Workflows
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Resolved merge conflicts and broken features by establishing a
                strict Branching and Peer-Reviewed Pull Request strategy to
                maintain main-branch stability.
              </p>
            </div>
          </div>
        </section>

        {/* QA Section */}
        <section className="mb-20 bg-gray-900 text-white p-10 rounded-2xl">
          <h2 className="text-3xl font-bold mb-8">Quality Assurance & UAT</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-blue-400 font-bold mb-4">
                Automated E2E Testing
              </h4>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Utilized <strong>Supertest</strong> to author 7 test suites
                covering 30 API endpoints. Validated everything from
                authentication to AI recommendation storage.
              </p>
              <div className="text-3xl font-bold tracking-tighter text-blue-400">
                100% PASS RATE
              </div>
              <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">
                30/30 Test Cases
              </p>
            </div>
            <div>
              <h4 className="text-green-400 font-bold mb-4">
                User Acceptance Testing
              </h4>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Conducted survey and system tests with 10 participants. Achieved
                an average score of 4.6 for Authentication and 4.7 for Logging
                usability.
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="text-3xl font-bold tracking-tighter text-green-400">
                    4.7 / 5
                  </div>
                  <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest text-center">
                    Usability
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-bold tracking-tighter text-green-400">
                    100%
                  </div>
                  <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest text-center">
                    Task Success
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final SWE Principles Section */}
        <section className="border-t border-gray-100 pt-20">
          <h2 className="text-3xl font-bold mb-8">
            Professional SWE Practices
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h5 className="font-bold text-sm mb-2 uppercase tracking-wider text-gray-400">
                Project Management
              </h5>
              <p className="text-gray-700 font-medium italic">
                ClickUp & Milestone Tracking
              </p>
            </div>
            <div>
              <h5 className="font-bold text-sm mb-2 uppercase tracking-wider text-gray-400">
                Versioning
              </h5>
              <p className="text-gray-700 font-medium italic">
                Atomic Commits & Tagging
              </p>
            </div>
            <div>
              <h5 className="font-bold text-sm mb-2 uppercase tracking-wider text-gray-400">
                Deployment
              </h5>
              <p className="text-gray-700 font-medium italic">
                CI/CD via Render & Expo
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
