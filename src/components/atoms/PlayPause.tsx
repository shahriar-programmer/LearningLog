import React from "react";
import { BsPlay, BsPause } from "react-icons/bs";

type Props = {
  learning: boolean;
  setLearning: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function PlayPause({ learning, setLearning }: Props) {
  return (
    <div
      onClick={() => setLearning((prevState) => !prevState)}
      id="play-pause"
      className="flex items-center justify-center p-1 text-4xl text-gray-500 transition duration-300 border border-transparent rounded-full cursor-pointer hover:border-gray-300 hover:bg-gray-300/20"
    >
      {learning ? <BsPause /> : <BsPlay />}
    </div>
  );
}
