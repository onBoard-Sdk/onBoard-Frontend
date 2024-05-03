import { forwardRef } from "react";
import * as _ from "./style";
import { InputProps } from "./type";

export const Input = forwardRef<HTMLInputElement, InputProps>(function (
  { label, helpMessage, isInvalid = false, width, ...props },
  ref,
) {
  return (
    <_.StyledWrapper style={{ width }}>
      <_.StyledLabel>
        {label}
        <_.StyledInput ref={ref} isInvalid={isInvalid} {...props} />
      </_.StyledLabel>
      <_.StyledHelpMessage isInvalid={isInvalid}>{helpMessage}</_.StyledHelpMessage>
    </_.StyledWrapper>
  );
});
