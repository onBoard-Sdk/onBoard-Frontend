import React from "react";
import * as _ from "./style";
import { ButtonProps } from "./type";

export function Button({color, ...props}: ButtonProps) {
  return <_.Wrapper {...props}>example</_.Wrapper>;
}