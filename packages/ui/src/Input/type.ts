import React from "react"

export type InputProps = {
  label?: string;
  helpMessage?: string;
  isInvalid?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>