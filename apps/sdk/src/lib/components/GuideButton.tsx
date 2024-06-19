import styled from "@emotion/styled";
import TextBallon from "../assets/airplane.svg";

type GuideButtonPropsType = {
  onClick: () => void;
  disalbed: boolean;
};

const GuideButton = ({ onClick, disalbed }: GuideButtonPropsType) => {
  return (
    <StyledWrapper onClick={onClick} disabled={disalbed}>
      도움이 필요하신가요? <img src={TextBallon} alt="TextBallon" />
    </StyledWrapper>
  );
};

export default GuideButton;

const StyledWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 210px;
  height: 52px;
  border: 1px solid #2222221a;
  border-radius: 26px;
  font-size: 16px;
  font-weight: 600;
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 60%, rgba(168, 240, 188, 1) 100%);
  cursor: pointer;
  &:disabled {
    cursor: no-drop;
  }
`;
