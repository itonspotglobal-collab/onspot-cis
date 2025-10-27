"use client";

import { useState } from "react";

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-blue-900 text-white flex items-center justify-between px-6 py-4 shadow-md">
        <h1 className="text-xl font-semibold tracking-wide">OnSpot Workspace Intranet</h1>
        <nav className="space-x-4 hidden md:block">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Teams
          </a>
          <a href="#" className="hover:underline">
            Projects
          </a>
          <a href="#" className="hover:underline">
            Resources
          </a>
          <a href="#" className="hover:underline">
            Help
          </a>
        </nav>
        <button
          className="md:hidden bg-blue-700 px-3 py-2 rounded"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          ☰
        </button>
      </header>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "w-64" : "w-0"
          } bg-white border-r border-gray-200 p-4 transition-all duration-300 overflow-y-auto`}
        >
          <h3 className="text-blue-900 font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="block p-2 rounded hover:bg-blue-50">
                📢 Announcements
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 rounded hover:bg-blue-50">
                📄 HR Forms
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 rounded hover:bg-blue-50">
                💻 IT Support
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 rounded hover:bg-blue-50">
                👥 Employee Directory
              </a>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Welcome */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-semibold text-blue-900 mb-2">
              Welcome to the OnSpot Intranet
            </h2>
            <p className="text-gray-700">
              Stay connected with company news, internal tools, and resources designed to help
              you work smarter and stay informed.
            </p>
          </section>

          {/* Cards Section */}
          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Company News */}
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Company News</h3>
              <ul className="text-sm space-y-2">
                <li>📰 New workspace tools launching next week</li>
                <li>💼 HR is hiring for new marketing roles</li>
                <li>🚀 OnSpot Portal v2.0 launching in November</li>
              </ul>
            </div>

            {/* Events */}
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Upcoming Events</h3>
              <ul className="text-sm space-y-2">
                <li>🎉 Team Building Day — Nov 5</li>
                <li>🧠 Workshop: AI Tools at Work — Nov 10</li>
                <li>🍽️ Holiday Lunch — Dec 15</li>
              </ul>
            </div>

            {/* Resources */}
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Resources</h3>
              <ul className="text-sm space-y-2">
                <li>
                  📘{" "}
                  <a href="#" className="text-blue-700 hover:underline">
                    Employee Handbook
                  </a>
                </li>
                <li>
                  🧾{" "}
                  <a href="#" className="text-blue-700 hover:underline">
                    Expense Reimbursement Form
                  </a>
                </li>
                <li>
                  💡{" "}
                  <a href="#" className="text-blue-700 hover:underline">
                    Project Templates
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-200 text-center text-sm text-gray-600 py-3 border-t">
        © 2025 OnSpot Workspace • Internal Use Only
      </footer>
    </div>
  );
}
