import * as _ from "./style";
import { TooltipProps } from "./type";

export const Tooltip = function ({
  emoji,
  title,
  explanation,
  image = "",
  count,
  onPrevStep,
  onNextStep,
}: TooltipProps) {
  return (
    <_.StyledWrapper>
      <_.StyledEmoji>{emoji}</_.StyledEmoji>
      <_.StyledText>{title}</_.StyledText>
      <_.StyledExplanation>{explanation}</_.StyledExplanation>

      {image && <_.StyledImage src={image} />}

      <_.StyledButtonWrapper>
        <_.StyledButton onClick={onPrevStep}>이전</_.StyledButton>
        <_.StyledText>{count}</_.StyledText>
        <_.StyledButton onClick={onNextStep}>다음</_.StyledButton>
      </_.StyledButtonWrapper>
    </_.StyledWrapper>
  );
};
