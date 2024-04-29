import { forwardRef } from "react";
import * as _ from "./style";
import { ButtonProps } from "./type";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function ({ buttonColor, ...props }, ref) {
  return (
    <_.StyledButton buttonColor={buttonColor} {...props} ref={ref}>
      example
    </_.StyledButton>
  );
});
