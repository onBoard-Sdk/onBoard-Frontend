import * as _ from "./style";
import { TooltipProps } from "./type";

export const Tooltip = function ({
  emoji,
  title,
  description,
  imageUrl,
  count,
  onPrevStep,
  onNextStep,
  ...rest
}: TooltipProps) {
  return (
    <_.StyledWrapper {...rest}>
      <_.StyledEmoji>{emoji}</_.StyledEmoji>
      <_.StyledText>{title}</_.StyledText>
      <_.StyledExplanation>{description}</_.StyledExplanation>

      {imageUrl && <_.StyledImage src={imageUrl} />}

      <_.StyledButtonWrapper>
        <_.StyledButton onClick={onPrevStep}>이전</_.StyledButton>
        <_.StyledText>{count}</_.StyledText>
        <_.StyledButton onClick={onNextStep}>다음</_.StyledButton>
      </_.StyledButtonWrapper>
    </_.StyledWrapper>
  );
};
