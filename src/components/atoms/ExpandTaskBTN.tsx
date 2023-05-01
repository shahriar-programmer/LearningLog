import React from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

type Props = {
  expandTask: boolean;
  setExpandTask: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ExpandTaskBTN({ expandTask, setExpandTask }: Props) {
  return (
    <div
      onClick={() => setExpandTask((prevState) => !prevState)}
      className="flex items-center justify-center p-1 text-3xl text-gray-500 transition duration-300 border border-transparent rounded-full cursor-pointer hover:border-gray-300 hover:bg-gray-300/50"
    >
      {expandTask ? <BsChevronUp /> : <BsChevronDown />}
    </div>
  );
}
