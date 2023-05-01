import React from "react";

type Props = {
  progress: number;
};

export default function ProgressBar({ progress }: Props) {
  return (
    <div
      id="progress"
      className="relative w-full h-4 border border-gray-400 rounded-md"
    >
      <div
        id="timer-indicator"
        style={{ width: `${progress}%` }}
        className="absolute bottom-0 left-0 z-10 h-full bg-gray-300 rounded-l-md"
      ></div>
    </div>
  );
}
