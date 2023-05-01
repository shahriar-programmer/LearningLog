import React, { useState } from "react";
import TaskText from "../atoms/TaskText";
import ProgressBar from "../atoms/ProgressBar";
import SubTaskBTN from "../atoms/SubTaskBTN";

export enum statusType {
  "Running",
  "Finished",
  null,
}

type Props = {};

export default function SubTask({}: Props) {
  const [status, setStatus] = useState<statusType>(statusType.null);
  return (
    <div className="flex p-3 border border-gray-600 rounded-3xl">
      <div className="flex flex-col justify-between w-full gap-y-6">
        <div>
          <TaskText text="Toolkit Practice" textPrefix="Topic" />
          <TaskText text="Toolkit Practice" textPrefix="Source" />
        </div>
        <ProgressBar
          progress={
            status == statusType.Running
              ? 50
              : status == statusType.Finished
              ? 100
              : 0
          }
        />
      </div>
      <div className="flex flex-col items-end justify-center w-3/12 gap-y-2">
        <SubTaskBTN status={status} setStatus={setStatus} />
      </div>
    </div>
  );
}
