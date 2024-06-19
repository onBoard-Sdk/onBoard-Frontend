import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Tooltip } from "@onboard/ui";
import { useGetGuideFlow } from "@/lib/api/guides";

type ShowGuideModalType = {
  guideId: number;
  setGuideId: React.Dispatch<React.SetStateAction<number>>;
};

const initialState = {
  sequence: 1,
  emoji: "",
  guideElementTitle: "",
  description: "",
  imageUrl: "",
  shape: "",
  width: 0,
  length: 0,
};

const ShowGuideModal = ({ guideId, setGuideId }: ShowGuideModalType) => {
  const { data: guides } = useGetGuideFlow(guideId);
  const [step, setStep] = useState(0);
  const [curGuide, setCurguide] = useState(guides ? guides.data.guideElements[step] : initialState);

  useEffect(() => {
    setCurguide(guides ? guides.data.guideElements[step] : initialState);
  }, [step, guides]);

  const { width, length, sequence, ...rest } = curGuide;
  return (
    <Wrapper>
      <div>
        <Tooltip
          style={{ position: "absolute", top: `${length}px`, left: `${width}px` }}
          count={`${sequence}/${guides?.data.guideElements.length}`}
          onPrevStep={() => {
            step && setStep(step - 1);
          }}
          onNextStep={() => {
            sequence === guides?.data.guideElements.length ? setGuideId(0) : setStep(step + 1);
          }}
          {...rest}
        />
      </div>
    </Wrapper>
  );
};

export default ShowGuideModal;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #2222221a;
`;
