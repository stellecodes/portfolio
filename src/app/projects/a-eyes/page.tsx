import React from "react";
import Link from "next/link";

export default function AEyesProject() {
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
            A-Eyes
          </h1>
          <p className="text-2xl text-gray-600 font-medium text-balance">
            Hands-Free Learning: Gaze-Controlled Educational Assistant for
            Inclusive Classrooms
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-semibold text-gray-700">
              Computer Vision
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-semibold text-gray-700">
              Assistive Tech
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-semibold text-gray-700">
              Generative AI
            </span>
          </div>
        </header>

        {/* Project Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 border-y border-gray-100 py-10">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">
              Role
            </h3>
            <p className="font-medium text-lg text-gray-800">
              Lead Developer (AI & CV Integration)
            </p>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">
              The Goal
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To create a fully hands-free educational companion that allows
              students to interact with lecture content using only their eyes.
              By combining real-time gaze tracking with LLMs, A-Eyes captures
              speech, predicts points of confusion, and provides AI-driven
              explanations without requiring a mouse or keyboard.
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Technical Foundation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-blue-50 border border-blue-100">
              <h4 className="font-bold text-blue-900 mb-3">
                Vision & Tracking
              </h4>
              <ul className="text-blue-800 space-y-2 text-sm leading-relaxed">
                <li>
                  • <strong>MediaPipe Face Landmarker:</strong> High-fidelity
                  5-point iris and eyelid tracking.
                </li>
                <li>
                  • <strong>FastAPI (Python):</strong> Backend handling
                  high-frequency gaze logic and AI routing.
                </li>
                <li>
                  • <strong>WebSockets:</strong> Real-time data streaming at 30
                  FPS for responsive cursor movement.
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl bg-purple-50 border border-purple-100">
              <h4 className="font-bold text-purple-900 mb-3">
                Intelligence & UI
              </h4>
              <ul className="text-purple-800 space-y-2 text-sm leading-relaxed">
                <li>
                  • <strong>OpenAI GPT-4:</strong> Customized to infer student
                  intent from speech-to-text transcripts.
                </li>
                <li>
                  • <strong>React:</strong> Dynamic interface for real-time gaze
                  visualization and content delivery.
                </li>
                <li>
                  • <strong>Speech-to-Text:</strong> Captures lecture content to
                  generate contextual follow-up questions.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Core Features</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 shrink-0 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">
                  5-Point Gaze Calibration
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  A robust system mapping iris coordinates (Top-Left, Top-Right,
                  Bottom-Left, Bottom-Right, Center) to screen space using
                  linear interpolation and 90% smoothing to eliminate jitter.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 shrink-0 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">
                  Blink-to-Select Logic
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Implemented <strong>Eye Aspect Ratio (EAR)</strong>{" "}
                  calculations to detect intentional blinks as a "click"
                  mechanism, enabling full hands-free selection of interface
                  elements.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 shrink-0 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">
                  Intelligent Learning Loop
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Generates exactly 6 short, distinct questions based on lecture
                  context, followed by "deep-dive" practice questions to
                  maintain engagement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Engineering Challenge Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">The Engineering "Flex"</h2>
          <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl relative">
            <div className="absolute top-0 right-10 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              Solving for Noisy Data
            </div>
            <p className="text-xl text-gray-800 leading-relaxed italic">
              &quot;In A-Eyes, I had to solve the challenge of{" "}
              <strong>Noisy Data</strong>. Real-time gaze tracking is inherently
              jittery, so I implemented a smoothing algorithm and used specific
              stable landmarks like the <strong>eyebrow and cheekbone</strong>{" "}
              as reference points to ensure the AI-generated questions were easy
              to &apos;target&apos; and select.&quot;
            </p>
          </div>
        </section>

        {/* Accessibility Impact */}
        <section className="mb-20 bg-gray-900 text-white p-10 rounded-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Inclusion by Design
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">
                Zero-Touch
              </div>
              <p className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-4 text-balance">
                Physical Independence
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Empowers students with motor impairments to participate in
                lectures without needing physical peripherals.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">
                30 FPS
              </div>
              <p className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-4">
                Real-Time Performance
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Ensures the visual feedback loop is instantaneous, making
                gaze-control feel as natural as moving a mouse.
              </p>
            </div>
          </div>
        </section>

        {/* Final Branding Section */}
        <section className="border-t border-gray-100 pt-20">
          <h2 className="text-3xl font-bold mb-8">
            Bridging Vision and Education
          </h2>
          <p className="text-gray-700 leading-relaxed mb-10">
            A-Eyes represents a shift toward software that adapts to the
            user&apos;s biological inputs. By prioritizing accessibility from
            day one, we created a tool that doesn&apos;t just assist, but
            empowers every student to learn at their own pace.
          </p>
          <div className="flex gap-8">
            <Link
              href="https://github.com/stellecodes"
              className="text-blue-600 font-bold hover:underline"
            >
              View Gaze Logic on GitHub
            </Link>
            <Link
              href="/"
              className="text-gray-400 font-bold hover:text-gray-600"
            >
              Watch Demo Video
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
