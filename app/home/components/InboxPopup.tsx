"use client";

export default function InboxPopup() {
  return (
    <div
      className="fixed right-6 bottom-24 w-[380px] h-[480px]
                    bg-white rounded-lg shadow-2xl border
                    z-50 overflow-hidden"
    >
      <div className="p-3 border-b text-sm font-medium flex items-center gap-2">
        <img src="/icons/search-icon.svg" className="w-4 h-4 opacity-60" />
        <input placeholder="Search" className="w-full outline-none text-sm" />
      </div>

      <div className="flex items-center justify-center h-full text-gray-500 text-sm">
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-transparent rounded-full animate-spin" />
          Loading Chats ...
        </div>
      </div>
    </div>
  );
}
