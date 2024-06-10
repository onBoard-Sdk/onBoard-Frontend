import styled from "@emotion/styled";
import { FeedBackCard } from "./FeedBackCard";
import { useGetFeedbacks } from "@/apis/feedbacks";
import { useLocation } from "react-router-dom";

export const FeedbackList = () => {
  const locate = useLocation();
  const { data: feedbackList } = useGetFeedbacks(+locate.pathname.split("/")[2]);

  return (
    <StyledListWrapper>
      {feedbackList?.data.feedbacks.map((feedback) => {
        const { title, content, path } = feedback;
        return <FeedBackCard title={title} content={content} path={path} />;
      })}
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
