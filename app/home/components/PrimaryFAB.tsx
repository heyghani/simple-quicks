"use client";

type Props = {
  mode: "closed" | "menu" | "inbox";
  onClick: () => void;
};

export default function PrimaryFAB({ mode, onClick }: Props) {
  if (mode === "inbox") {
    return (
      <button
        onClick={onClick}
        aria-label="Close Inbox"
        className="
          fixed right-6 bottom-6 w-14 h-14 rounded-full
          bg-[#8785FF]
          flex items-center justify-center
          transition-all duration-300
        "
      >
        <img src="/icons/inbox.svg" className="w-7 h-7" />
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      aria-label="Quick Actions"
      className="
        fixed right-6 bottom-6 w-12 h-12 rounded-full
        bg-primary-blue shadow-lg
        flex items-center justify-center
        hover:bg-primary-blue/80
        transition-all duration-300
      "
    >
      <img src="/icons/cloud-lightning.svg" className="w-8 h-8" />
    </button>
  );
}
