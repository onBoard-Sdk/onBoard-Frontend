import React from "react";

export type TextareaProps = {
  width?: string;
  height?: string;
  label?: string;
  helpMessage?: string;
  isInvalid?: boolean;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;
