export type TooltipProps = {
  emoji?: string;
  title: string;
  explanation: string;
  image?: string;
  count?: string;
  onPrevStep?: () => void;
  onNextStep?: () => void;
};
