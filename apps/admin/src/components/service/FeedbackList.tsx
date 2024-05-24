import styled from "@emotion/styled";
import { FeedBackCard } from "./FeedBackCard";

export const FeedbackList = () => {
  return (
    <StyledListWrapper>
      <FeedBackCard />
    </StyledListWrapper>
  );
};

const StyledListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 85px;
  gap: 12px;
  width: 100%;
  height: 500px;
  border: 1px solid #e9e9e9;
  border-radius: 16px;
  padding: 12px;
  overflow: scroll;
`;
