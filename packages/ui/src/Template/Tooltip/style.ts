import styled from "@emotion/styled";

export const StyledWrapper = styled.div`
  padding: 16px;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  border-radius: 12px;
  background-color: white;
`;

export const StyledEmoji = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: normal;
`;

export const StyledText = styled.div`
  color: black;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
`;

export const StyledExplanation = styled.div`
  color: black;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

export const StyledImage = styled.img`
  border-radius: 8px;
  border: 1px solid var(--Black-10, rgba(34, 34, 34, 0.1));
  background: url(<path-to-image>) lightgray 50% / cover no-repeat;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledButton = styled.button`
  border: none;
  outline: none;
  padding: 8px 12px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: #ffffff;
  gap: 10px;
  border-radius: 12px;
  background: #222222;
  cursor: pointer;
  white-space: nowrap;
`;
