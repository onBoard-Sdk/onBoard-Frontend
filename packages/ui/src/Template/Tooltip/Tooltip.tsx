import { forwardRef } from "react";
import * as _ from "./style";
import { TooltipProps } from "./type";

export const Tooltip = forwardRef(function ({
  emoji,
  title,
  explanation,
  image = "",
  count,
  prev,
  next,
}: TooltipProps) {
  return (
    <_.StyledWrapper>
      <_.StyledEmoji>{emoji}</_.StyledEmoji>
      <_.StyledText>{title}</_.StyledText>
      <_.StyledExplanation>{explanation}</_.StyledExplanation>

      <_.StyledImage src={image !== "" ? image : ""} image={image} />

      <_.StyledButtonWrapper>
        <_.StyledButton onClick={prev}>이전</_.StyledButton>
        <_.StyledText>{count}</_.StyledText>
        <_.StyledButton onClick={next}>다음</_.StyledButton>
      </_.StyledButtonWrapper>
    </_.StyledWrapper>
  );
});
