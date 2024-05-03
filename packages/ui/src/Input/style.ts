import styled from "@emotion/styled";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledLabel = styled.label`
  color: rgba(22, 22, 22, 0.5);
  font-size: 12px;
  font-weight: 700;
  line-height: 24px;
`;

export const StyledInput = styled.input<{ isInvalid: boolean }>`
  outline: none;
  width: calc(100% - 32px);
  border: 1px solid ${({ isInvalid }) => (isInvalid ? "#F20D0D" : "rgba(22, 22, 22, 0.1)")};
  border-radius: 8px;
  padding: 12px 16px;
  color: ${({ isInvalid }) => (isInvalid ? "#F20D0D" : "black")};
  font-size: 16px;
  background-color: rgba(22, 22, 22, 0.03);
  &:focus,
  &:hover:enabled {
    border: 1px solid ${({ isInvalid }) => (isInvalid ? "#F20D0D" : "#40de6c")};
  }
  &:disabled {
    cursor: no-drop;
    &::placeholder {
      color: rgba(22, 22, 22, 0.3);
    }
  }
`;

export const StyledHelpMessage = styled.span<{ isInvalid: boolean }>`
  color: ${({ isInvalid }) => (isInvalid ? "#F20D0D" : "rgba(22, 22, 22, 0.5)")};
  font-size: 12px;
  line-height: 24px;
`;
