import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import EditableInfo from "@/components/editor/editableInfo";
import TemplateEditor from "@/components/editor/templateEditor";
import { GuideInfoType } from "../editor";

export const GuideEditPage = () => {
  const locate = useLocation();
  const guideId = +locate.pathname.split("/")[3];
  console.log(guideId);
  const [guideInfo, setGuideInfo] = useState<GuideInfoType>({ guideTitle: "가이드 이름", path: "/" });

  return (
    <OuterContainer>
      <RootContainer>
        <EditableInfo setGuideInfo={setGuideInfo} />
        <TemplateEditor guideInfo={guideInfo} />
      </RootContainer>
    </OuterContainer>
  );
};

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100dvw;
`;

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1280px;
  gap: 24px;
  padding: 24px 0;
`;
