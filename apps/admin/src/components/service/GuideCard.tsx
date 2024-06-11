import { pencilSquare } from "@/assets";
import styled from "@emotion/styled";
import { Button } from "@onboard/ui";
import { Link } from "react-router-dom";

interface GuideCardType {
  title: string;
  path: string;
  guideId: number;
  serviceId: number;
}

export const GuideCard = ({ title, path, guideId, serviceId }: GuideCardType) => {
  return (
    <StyledWrapper>
      <StyledDIV>
        <StyledTitle>{title}</StyledTitle>
        <StyledURL>{path}</StyledURL>
      </StyledDIV>
      <Link to={`/editor/${serviceId}/${guideId}`}>
        <Button buttonColor="gray">
          <img src={pencilSquare} alt="editImage" />
          수정
        </Button>
      </Link>
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
