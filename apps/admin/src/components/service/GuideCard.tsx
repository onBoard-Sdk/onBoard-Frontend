import { editImage, pencilSquare } from "@/assets";
import styled from "@emotion/styled";
import { Button } from "@onboard/ui";

export const GuideCard = () => {
  return (
    <StyledWrapper>
      <StyledDIV>
        <StyledTitle>뭐 하는 법</StyledTitle>
        <StyledURL>/url/suburl</StyledURL>
      </StyledDIV>
      <Button buttonColor="gray">
        <img src={pencilSquare} alt="editImage" />
        수정
      </Button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border: 1px solid #e9e9e9;
  border-radius: 16px;
  padding: 20px 23px;
`;

const StyledDIV = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StyledTitle = styled.span`
  color: #222222;
  font-size: 20px;
  font-weight: bold;
`;

const StyledURL = styled.span`
  color: #909090;
  font-size: 16px;
`;
