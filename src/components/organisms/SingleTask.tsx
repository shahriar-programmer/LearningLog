import React, { useState } from "react";
import TaskTimer from "../atoms/TaskTimer";
import TaskHeader from "../atoms/TaskHeader";
import ProgressBar from "../atoms/ProgressBar";
import PlayPause from "../atoms/PlayPause";
import ExpandTaskBTN from "../atoms/ExpandTaskBTN";
import ExpandedTask from "./ExpandedTask";

type Props = {
  taskLearning: boolean;
  title: string;
  finishedSubTask: number;
  totalSubTask: number;
  taskProgress: number;
  taskTimeLeft: number;
};

export default function SingleTask({
  finishedSubTask,
  taskLearning,
  title,
  totalSubTask,
  taskProgress,
  taskTimeLeft,
}: Props) {
  const [expandTask, setExpandTask] = useState<boolean>(false);
  const [learning, setLearning] = useState<boolean>(taskLearning);
  return (
    <div
      id="single-task"
      className={`w-full max-w-xl p-4 border border-gray-600 rounded-3xl flex flex-col gap-4`}
    >
      <div className="flex items-center justify-between w-full h-20 main-task gap-x-4">
        <div className="w-[7%] h-full flex justify-center">
          <TaskTimer taskTimeLeft={taskTimeLeft} />
        </div>

        <div
          id="center-element"
          className="flex flex-col justify-between w-full h-full"
        >
          <TaskHeader
            title={title}
            finishedSubTask={finishedSubTask}
            totalSubTask={totalSubTask}
          />
          <ProgressBar progress={taskProgress} />
        </div>

        <PlayPause learning={learning} setLearning={setLearning} />

        <ExpandTaskBTN expandTask={expandTask} setExpandTask={setExpandTask} />
      </div>
      <ExpandedTask expandTask={expandTask} />
    </div>
  );
}
