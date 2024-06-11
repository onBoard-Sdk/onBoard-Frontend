export type TooltipProps = {
  emoji?: string;
  guideElementTitle: string;
  description: string;
  imageUrl?: string;
  count?: string;
  onPrevStep?: () => void;
  onNextStep?: () => void;
} & React.HTMLAttributes<HTMLDivElement>;
