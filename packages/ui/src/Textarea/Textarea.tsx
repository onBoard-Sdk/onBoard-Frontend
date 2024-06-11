import { forwardRef } from "react";
import * as _ from "./style";
import { TextareaProps } from "./type";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function (
  { label, helpMessage, isInvalid = false, width, height, ...props },
  ref,
) {
  return (
    <_.StyledWrapper style={{ width }}>
      <_.StyledLabel>
        {label}
        <_.StyledTextarea ref={ref} isInvalid={isInvalid} style={{ height }} {...props} />
      </_.StyledLabel>
      <_.StyledHelpMessage isInvalid={isInvalid}>{helpMessage}</_.StyledHelpMessage>
    </_.StyledWrapper>
  );
});
