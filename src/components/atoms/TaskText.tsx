import React from "react";

type Props = {
  textPrefix: string;
  text: string;
};

export default function TaskText({ text, textPrefix }: Props) {
  return (
    <p className="w-full">
      <span className="font-semibold">{textPrefix}:</span> {text}
    </p>
  );
}
