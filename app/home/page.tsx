"use client";

import QuickActions from "./components/QuickActions";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-primary-dark-gray flex">
      <aside className="w-40 bg-primary-dark-gray border-r border-primary-gray p-4" />

      <main className="flex-1 relative">
        <div className="h-12 bg-primary-gray flex items-center px-3 mb-4">
          <img src="/icons/search-icon.svg" className="w-5 h-5 mr-2" />
          <input className="bg-transparent outline-none text-white w-full" />
        </div>

        <QuickActions />
      </main>
    </div>
  );
}
