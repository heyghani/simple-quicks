"use client";

type Props = {
  label: string;
  icon: string;
  onClick: () => void;
};

export default function QuickActionButton({ label, icon, onClick }: Props) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-xs text-white mb-1">{label}</span>
      <button
        onClick={onClick}
        className="w-12 h-12 rounded-full bg-[#f2f2f2] shadow-lg
                   flex items-center justify-center cursor-pointer
                   transition-transform hover:scale-105"
      >
        <img src={icon} className="w-6 h-6" alt={label} />
      </button>
    </div>
  );
}
