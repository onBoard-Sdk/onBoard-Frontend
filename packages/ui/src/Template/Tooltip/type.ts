import React from "react";

export type TooltipProps = {
  emoji?: string;
  title: string;
  explanation: string;
  image?: string;
  count?: string;
  prev?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  next?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
