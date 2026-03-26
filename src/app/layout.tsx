import React from "react";
import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-blue-600 focus:text-white"
        >
          Skip to main content
        </a>

        <nav className="max-w-4xl mx-auto px-6 py-8 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Stelle Lim
          </Link>
          <div className="space-x-6 text-gray-600 font-medium">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Projects
            </Link>
            <Link
              href="/#about"
              className="hover:text-blue-600 transition-colors"
            >
              About
            </Link>
          </div>
        </nav>

        <main id="main-content">{children}</main>

        <footer className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100 text-center text-gray-500 text-sm">
          <p>© 2026</p>
        </footer>
      </body>
    </html>
  );
}
