import styled from "@emotion/styled";
import PageTemplate from "@/components/common/pageTemplate";
import { Button } from "@onboard/ui";
import { editImage, leftArrow, plusImage, sampleServiceImage } from "@/assets";
import { FeedbackList, GuildeList } from "@/components/service";

export const ServiceDetailPage = () => {
  return (
    <PageTemplate style={{ gap: "20px" }}>
      <StyledPageHeader>
        <Button buttonColor="gray">
          <img src={leftArrow} alt="leftArrow" />
          연결된 서비스
        </Button>
        <StyledServiceInfo>
          <StyledImage src={sampleServiceImage} alt="sampleServiceImage" />
          <StyledServiceTitle>고깃집</StyledServiceTitle>
          <StyledURL>go.git.zip</StyledURL>
        </StyledServiceInfo>
        <Button buttonColor="gray">
          <img src={editImage} alt="editImage" />
          수정
        </Button>
      </StyledPageHeader>
      <StyledNavHeader>
        <StyledButtonWrapper>
          <Button buttonColor="green">가이드</Button>
          <Button buttonColor="gray">
            사용자 피드백 <StyledCountText>32</StyledCountText>
          </Button>
        </StyledButtonWrapper>
        <Button buttonColor="green">
          <img src={plusImage} alt="plusImage" /> 새 가이드
        </Button>
      </StyledNavHeader>
      {/* <GuildeList /> */}
      <FeedbackList />
    </PageTemplate>
  );
};

const StyledPageHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const StyledServiceInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StyledImage = styled.img`
  width: 64px;
  height: 64px;
`;

const StyledServiceTitle = styled.span`
  color: #222222;
  font-size: 24px;
  line-height: 36px;
  font-weight: bold;
`;

const StyledURL = styled.span`
  color: #909090;
  font-size: 16px;
  line-height: 24px;
  text-decoration: underline;
`;

const StyledNavHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

const StyledCountText = styled.div`
  background-color: #909090;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 16px;
`;
