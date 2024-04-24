import React from "react"

export type InputProps = {
  color?: "red" | "yellow" | "green";
} & React.InputHTMLAttributes<HTMLInputElement>