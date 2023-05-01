import React from "react";

type Props = {
  title: string;
  totalSubTask: number;
  finishedSubTask: number;
};

export default function TaskHeader({
  title,
  finishedSubTask,
  totalSubTask,
}: Props) {
  return (
    <div id="top-element" className="flex items-center justify-between">
      <h2 className="text-2xl">{title}</h2>
      <p className="text-lg">
        <span>{finishedSubTask}</span>/<span>{totalSubTask}</span>
      </p>
    </div>
  );
}
