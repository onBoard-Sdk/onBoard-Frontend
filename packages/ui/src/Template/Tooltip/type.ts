import React from "react";

export type TooltipProps = {
  emoji?: string;
  title: string;
  explanation: string;
  image?: string;
  count?: string;
  onPrevStep?: React.MouseEventHandler<HTMLButtonElement>;
  onNextStep?: React.MouseEventHandler<HTMLButtonElement>;
};
