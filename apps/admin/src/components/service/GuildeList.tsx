import styled from "@emotion/styled";
import { GuideCard } from "./GuideCard";

export const GuildeList = () => {
  return (
    <StyledListWrapper>
      <GuideCard />
      <GuideCard />
      <GuideCard />
      <GuideCard />
      <GuideCard />
      <GuideCard />
      <GuideCard />
    </StyledListWrapper>
  );
};

const StyledListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  height: 500px;
  border: 1px solid #e9e9e9;
  border-radius: 16px;
  padding: 12px;
  overflow: scroll;
`;
