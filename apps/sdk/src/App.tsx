import { useState } from "react";
import styled from "@emotion/styled";
import GuideList from "./components/GuideList";
import GuideButton from "./components/GuideButton";
import Feedback from "./components/Feedback";
import ShowGuideModal from "./components/ShowGuideModal";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [isFeedback, setIsFeedback] = useState(false);
  const [guideId, setGuideId] = useState(0);
  return (
    <>
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
      <iframe src="https://jobis-company.team-return.com/" style={{ width: "100vw", height: "100vh" }}></iframe>
    </>
  );
}

export default App;

const StyledWrapper = styled.div`
  position: absolute;
  bottom: 24px;
  right: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
`;
