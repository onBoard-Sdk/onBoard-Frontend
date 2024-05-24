import styled from "@emotion/styled"
import { Button } from "@onboard/ui"
import PageElement from "./pageElement"

export default function TemplateEditor(){
    return(
        <EditorContainer>
            <FlowContainer>
                <StyledText>페이지 없음</StyledText>
                <PageList>
                    <PageElement description="기본 상태" index={0} selected/>
                    <PageElement description="내용은 마이드래곤 푸하하" index={1}/>
                </PageList>
                <Button buttonColor="gray">저장</Button>
                <ButtonContainer>
                    <Button buttonColor="green">새 페이지</Button>
                    <Button buttonColor="green" disabled>편집</Button>
                    <Button buttonColor="gray">삭제</Button>
                </ButtonContainer>
            </FlowContainer>
            <StyledIframe src="https://www.entrydsm.hs.kr"/>
        </EditorContainer>
    )
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

const StyledText = styled.p`
    color: #22222280;
    font-size: 16px;
    font-weight: 400;
`

const ButtonContainer = styled.div`
    display: flex;
    gap: 12px;
    &>button{
        flex: 1;
    }
`