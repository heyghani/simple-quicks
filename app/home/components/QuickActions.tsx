"use client";

import { useState } from "react";
import QuickActionButton from "./QuickActionButton";
import PrimaryFAB from "./PrimaryFAB";
import InboxPopup from "./InboxPopup";

type Mode = "closed" | "menu" | "inbox";

export default function QuickActions() {
  const [mode, setMode] = useState<Mode>("closed");

  const handlePrimaryClick = () => {
    if (mode === "closed") setMode("menu");
    else if (mode === "menu") setMode("closed");
    else if (mode === "inbox") setMode("menu");
  };

  return (
    <>
      {/* Inbox popup ONLY in inbox mode */}
      {mode === "inbox" && <InboxPopup />}

      {/* Secondary actions ONLY in menu mode */}
      {mode === "menu" && (
        <div
          className="
            fixed right-22 bottom-6
            flex items-center space-x-4
            transition-all duration-300
          "
        >
          <QuickActionButton
            label="Task"
            icon="/icons/task.svg"
            onClick={() => {
              // future task behavior
            }}
          />

          <QuickActionButton
            label="Inbox"
            icon="/icons/inbox.svg"
            onClick={() => setMode("inbox")}
          />
        </div>
      )}

      {/* Primary FAB always exists */}
      <PrimaryFAB mode={mode} onClick={handlePrimaryClick} />
    </>
  );
}
