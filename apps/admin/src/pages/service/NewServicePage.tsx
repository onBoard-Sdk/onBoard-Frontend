import { emptyImage, leftArrow, trashImage, uploadImage } from "@/assets";
import PageTemplate from "@/components/common/pageTemplate";
import { Button, Input } from "@onboard/ui";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

export const NewServicePage = () => {
  const navigate = useNavigate();
  return (
    <PageTemplate style={{ gap: "24px" }}>
      <Button
        buttonColor="gray"
        onClick={() => {
          navigate(-1);
        }}
      >
        <img src={leftArrow} alt="leftArrow" /> 돌아가기
      </Button>
      <StyledTitle>새 서비스 연결하기</StyledTitle>
      <StyledInputWrapper>
        <StyledImageWrapper>
          <StyledImage src={emptyImage} alt="emptyImage" />
          <Button buttonColor="green">
            <img src={uploadImage} alt="uploadImage" /> 이미지 업로드
          </Button>
          <Button buttonColor="gray">
            <img src={trashImage} alt="trashImage" /> 삭제
          </Button>
        </StyledImageWrapper>
        <Input label="이름" placeholder="이름을 작성해주세요" helpMessage="대시보드에 표시되는 이름입니다" />
        <Input label="서비스 URL" placeholder="https://~" helpMessage="서비스에 접속할 수 있는 URL을 입력하세요" />
      </StyledInputWrapper>
      <Button buttonColor="green">완료</Button>
    </PageTemplate>
  );
};

const StyledTitle = styled.span`
  color: #222222;
  font-size: 36px;
  font-weight: bold;
`;

const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 50%;
`;

const StyledImageWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
`;

const StyledImage = styled.img`
  width: 128px;
  height: 128px;
`;
