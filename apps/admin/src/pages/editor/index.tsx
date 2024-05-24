import EditableInfo from "@/components/editor/editableInfo";
import TemplateEditor from "@/components/editor/templateEditor";
import styled from "@emotion/styled";

export default function EditorPage(){
  return(
    <OuterContainer>
      <RootContainer>
        <EditableInfo/>
        <TemplateEditor/>
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