import { sampleServiceImage } from "@/assets";
import styled from "@emotion/styled";

export const ServiceCard = () => {
  return (
    <StyledWrapper>
      <StyledImage src={sampleServiceImage} alt="sampleServiceImage" />
      <StyledServiceTitle>고깃집</StyledServiceTitle>
      <StyledURL>go.git.zip</StyledURL>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 18%;
  border: 1px solid #e9e9e9;
  border-radius: 4px;
  padding: 16px;
`;

const StyledImage = styled.img`
  width: 64px;
  height: 64px;
`;

const StyledServiceTitle = styled.span`
  color: #222222;
  font-size: 24px;
  line-height: 36px;
  font-weight: bold;
`;

const StyledURL = styled.span`
  color: #909090;
  font-size: 16px;
  line-height: 24px;
`;
