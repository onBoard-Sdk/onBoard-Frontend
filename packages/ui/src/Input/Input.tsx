import * as _ from "./style";
import { InputProps } from "./type";

export function Input({ label, helpMessage, isInvalid = false, width, ...props }: InputProps) {
  return (
    <_.StyledWrapper style={{ width }}>
      <_.StyledLabel>
        {label}
        <_.StyledInput isInvalid={isInvalid} {...props} />
      </_.StyledLabel>
      <_.StyledHelpMessage isInvalid={isInvalid}>{helpMessage}</_.StyledHelpMessage>
    </_.StyledWrapper>
  );
}
