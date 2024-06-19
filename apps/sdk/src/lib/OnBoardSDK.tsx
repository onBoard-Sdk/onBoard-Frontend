import { useState } from "react";
import styled from "@emotion/styled";
import ShowGuideModal from "./components/ShowGuideModal";
import GuideList from "./components/GuideList";
import Feedback from "./components/Feedback";
import GuideButton from "./components/GuideButton";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const OnBoardSdk = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isFeedback, setIsFeedback] = useState(false);
  const [guideId, setGuideId] = useState(0);
  return (
    <QueryClientProvider client={queryClient}>
      {!!guideId && <ShowGuideModal guideId={guideId} setGuideId={setGuideId} />}
      <StyledWrapper>
        {isClicked && !isFeedback && (
          <GuideList
            onClickGuide={setGuideId}
            onClickClose={() => setIsClicked(!isClicked)}
            onClickFeedback={() => setIsFeedback(true)}
          />
        )}
        {isFeedback && <Feedback onClick={() => setIsFeedback(false)} />}
        <GuideButton onClick={() => setIsClicked(!isClicked)} disalbed={!!guideId} />
      </StyledWrapper>
    </QueryClientProvider>
  );
};

export default OnBoardSdk;

const StyledWrapper = styled.div`
  position: absolute;
  bottom: 24px;
  right: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
`;
