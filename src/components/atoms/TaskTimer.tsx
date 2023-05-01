import React from "react";

type Props = {
  taskTimeLeft: number;
};

export default function TaskTimer({ taskTimeLeft }: Props) {
  return (
    <div
      id="timer"
      className="relative h-full border border-gray-400 rounded-md w-7"
    >
      <div
        id="timer-indicator"
        style={{ height: `${taskTimeLeft}%` }}
        className="absolute bottom-0 left-0 z-10 w-full py-1 bg-gray-300 rounded-b-md"
      ></div>
    </div>
  );
}
