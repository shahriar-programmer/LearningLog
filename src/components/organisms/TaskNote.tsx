import React from "react";
import TaskText from "../atoms/TaskText";

type Props = {};

export default function TaskNote({}: Props) {
  return (
    <div className="flex flex-col w-full p-3 border border-gray-600 rounded-3xl">
      <TaskText text="Very soon" textPrefix="Start" />
      <TaskText text="Very soon" textPrefix="Start" />
      <TaskText
        text="Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use hover:divide-solid to only apply the divide-solid utility on hover."
        textPrefix="Start"
      />
    </div>
  );
}
