import React from "react";
import { statusType } from "../organisms/SubTask";

type Props = {
  status: statusType;
  setStatus: React.Dispatch<React.SetStateAction<statusType>>;
};

export default function SubTaskBTN({ status, setStatus }: Props) {
  return (
    <>
      <button
        className="w-20 text-center transition bg-gray-200 hover:bg-gray-300 py-0.5 border rounded-md"
        onClick={() =>
          setStatus((prevStatus) =>
            prevStatus == statusType.Running
              ? statusType.null
              : statusType.Running
          )
        }
      >
        {status == statusType.Running ? "Running" : "Start"}
      </button>
      <button
        disabled={status == statusType.Finished}
        className={`w-20 text-center transition bg-gray-200 hover:bg-gray-300 py-0.5 border rounded-md ${
          status == statusType.Finished && "pointer-events-none"
        }`}
        onClick={() => setStatus(statusType.Finished)}
      >
        {status == statusType.Finished ? "Finished" : "Finish"}
      </button>
    </>
  );
}
