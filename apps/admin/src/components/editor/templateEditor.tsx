import React, { useState, Dispatch } from "react"
import styled from "@emotion/styled"
import { Input, Button } from "@onboard/ui"
import PageElement from "./pageElement"
import { checkImage, tooltipPreviewImage, uploadImage } from "@/assets"

const DemoData = ["내용은 마이드래곤 푸하하", "삼양라면"]

export default function TemplateEditor(){
  const [selectedPage, setSelectedPage] = useState<number>(0);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  return(
    <EditorContainer>
      {
        isEditing ? 
        <EditingSidebar setIsEditing={setIsEditing}/> :
        <DefaultSidebar selectedPage={selectedPage} setSelectedPage={setSelectedPage} setIsEditing={setIsEditing} data={DemoData}/>
      }
      <StyledIframe src="https://www.entrydsm.hs.kr"/>
    </EditorContainer>
  )
}

const EditingSidebar = ({setIsEditing}:{setIsEditing:Dispatch<React.SetStateAction<boolean>>}) => {
  return (
    <FlowContainer>
      <Button buttonColor="gray" onClick={()=>setIsEditing(false)}>취소</Button>
      <Button buttonColor="green"><img src={checkImage}/>완료</Button>
      <StyledTextTitle>툴팁</StyledTextTitle>
      우측에서 추가할 템플릿이 웹사이트의 어떤 요소를 따르게 할지 선택하세요
      <StyledImage src={tooltipPreviewImage}/>
      <Input label="이모지(선택)"/>
      <Input label="제목"/>
      <Input label="내용"/>
      <StyledTextLabel>이미지(선택)</StyledTextLabel>
      <ButtonNonStrechContainer>
        <Button buttonColor="green"><img src={uploadImage}/>이미지 업로드</Button>
        <Button buttonColor="gray">삭제</Button>
      </ButtonNonStrechContainer>
    </FlowContainer>
  );
}

interface DefaultSidebarPropsType {
  selectedPage: number;
  setSelectedPage: Dispatch<React.SetStateAction<number>>;
  setIsEditing: Dispatch<React.SetStateAction<boolean>>;
  data: string[];
}

const DefaultSidebar = ({selectedPage, setSelectedPage, setIsEditing, data}: DefaultSidebarPropsType) => {
  return (
    <FlowContainer>
      <StyledTextSubtle>페이지 {DemoData.length ? `${selectedPage}/${DemoData.length}` : "없음"}</StyledTextSubtle>
      <PageList>
        <PageElement description="기본 상태" index={0} selected={selectedPage===0} onClick={()=>setSelectedPage(0)}/>
        {data.map((d,i)=>
          <PageElement key={i} description={d} index={i+1} selected={selectedPage===i+1} onClick={()=>setSelectedPage(i+1)} />
        )}
      </PageList>
      <Button buttonColor="gray">저장</Button>
      <ButtonContainer>
        <Button buttonColor="green">새 페이지</Button>
        <Button buttonColor="green" disabled={selectedPage===0} onClick={()=> setIsEditing(true)}>편집</Button>
        <Button buttonColor="gray" disabled={selectedPage===0}>삭제</Button>
      </ButtonContainer>
    </FlowContainer>
  );
}

const EditorContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`

const StyledIframe = styled.iframe`
  width: 922px;
  height: 779px;

  border: 1px #2222221A solid;
  border-radius: 8px;
`

const FlowContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding: 16px;
  width: 340px;

  background: #f7f7f7;
  border-radius: 16px;
`

const PageList = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;

  overflow: scroll;
`

const StyledTextSubtle = styled.p`
  color: #22222280;
  font-size: 16px;
  font-weight: 400;
`

const StyledTextTitle = styled.p`
  font-size: 28px;
  font-weight: 700;
  line-height: 1.5;
`

const StyledTextLabel = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 1.5;
  color: #222222BF;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  &>button{
    flex: 1;
  }
`

const ButtonNonStrechContainer = styled.div`
  display: flex;
  gap: 12px;
`

const StyledImage = styled.img`
  border-radius: 8px;
  width: 100%;
`