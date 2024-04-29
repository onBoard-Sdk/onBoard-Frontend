import styled from "@emotion/styled";
import { ButtonColorType } from "./type";
import { css, SerializedStyles } from "@emotion/react";

type ButtonColorGeneratorType = {
  normal: SerializedStyles;
  hover: SerializedStyles;
  active: SerializedStyles;
  disabled: SerializedStyles;
};

const colorGenerator: Record<ButtonColorType, ButtonColorGeneratorType> = {
  green: {
    normal: css({
      fontWeight: "600",
      border: "1px solid #349e52",
      backgroundColor: "#40DE6C",
      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.24), inset 0px 6px 8px -4px #86F9A6",
    }),
    hover: css({ backgroundColor: "#51E179" }),
    active: css({
      backgroundColor: "#25DA58",
      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.24), inset 0px 6px 8px -4px rgba(0, 0, 0, 0.24)",
    }),
    disabled: css({
      border: "none",
      boxShadow: "none",
      backgroundColor: "#C8E5D0",
    }),
  },
  gray: {
    normal: css({ backgroundColor: "#F1F1F1" }),
    hover: css({ backgroundColor: "#E6E6E6" }),
    active: css({ backgroundColor: "#DEDEDE" }),
    disabled: css({
      backgroundColor: "#F1F1F1",
    }),
  },
} as const;

export const StyledButton = styled.button<{ buttonColor: ButtonColorType }>`
  cursor: pointer;
  display: inline-block;
  outline: none;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  color: black;
  ${({ buttonColor }) => colorGenerator[buttonColor]["normal"]}
  &:hover:enabled {
    ${({ buttonColor }) => colorGenerator[buttonColor]["hover"]}
  }
  &:active:enabled {
    ${({ buttonColor }) => colorGenerator[buttonColor]["active"]}
  }
  &:disabled {
    cursor: no-drop;
    color: #a9a9a9;
    ${({ buttonColor }) => colorGenerator[buttonColor]["disabled"]}
  }
`;
