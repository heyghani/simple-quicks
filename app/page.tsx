"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const t = setTimeout(() => {
      router.replace("/home");
    }, 1800);
    return () => clearTimeout(t);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f8a66]">
      <div className="w-full max-w-5xl px-8 py-32">
        <h1 className="font-hiragino text-white text-center font-black text-[190px] leading-[0.9]">
          Simple
          <br />
          Quicks
        </h1>
      </div>
    </div>
  );
}
