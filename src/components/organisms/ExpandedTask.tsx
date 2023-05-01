import React from "react";
import TaskNote from "./TaskNote";
import SubTask from "./SubTask";

type Props = {
  expandTask: boolean;
};

export default function ExpandedTask({ expandTask }: Props) {
  return (
    <div
      className={`group-sub-task flex flex-col gap-4 transition-all duration-700 ${
        expandTask ? "h-96" : "h-0"
      } overflow-hidden`}
    >
      <hr />
      <TaskNote />
      <SubTask />
    </div>
  );
}
