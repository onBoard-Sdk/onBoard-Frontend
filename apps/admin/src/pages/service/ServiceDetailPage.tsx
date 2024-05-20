import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import styled from "@emotion/styled";
import { Button } from "@onboard/ui";
import { editImage, leftArrow, plusImage } from "@/assets";
import { GetServicesType } from "@/apis/services";
import PageTemplate from "@/components/common/pageTemplate";
import { FeedbackList, GuildeList } from "@/components/service";

export const ServiceDetailPage = () => {
  const [tabMenu, setTabMenu] = useState(true);
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const serviceList = queryClient.getQueryData<GetServicesType>(["serviceList"]);
  const serviceIdx = +window.location.pathname.split("/")[2];
  const serviceInfo = serviceList?.data.services[serviceIdx];

  const onClickNavButton = () => {
    setTabMenu((prev) => !prev);
  };
  return (
    <PageTemplate style={{ gap: "20px" }}>
      <StyledPageHeader>
        <Button buttonColor="gray" onClick={() => navigate(-1)}>
          <img src={leftArrow} alt="leftArrow" />
          연결된 서비스
        </Button>
        <StyledServiceInfo>
          <StyledImage src={serviceInfo?.logoImageUrl} alt="sampleServiceImage" />
          <StyledServiceTitle>{serviceInfo?.name}</StyledServiceTitle>
          <StyledURL>{serviceInfo?.serviceUrl}</StyledURL>
        </StyledServiceInfo>
        <Button buttonColor="gray" onClick={() => navigate("edit")}>
          <img src={editImage} alt="editImage" />
          수정
        </Button>
      </StyledPageHeader>

      <StyledNavHeader>
        <StyledButtonWrapper>
          <Button buttonColor={tabMenu ? "green" : "white"} onClick={onClickNavButton}>
            가이드
          </Button>
          <Button buttonColor={tabMenu ? "white" : "green"} onClick={onClickNavButton}>
            사용자 피드백 <StyledCountText>32</StyledCountText>
          </Button>
        </StyledButtonWrapper>
        <Button buttonColor="green">
          <img src={plusImage} alt="plusImage" /> 새 가이드
        </Button>
      </StyledNavHeader>
      {tabMenu ? <GuildeList /> : <FeedbackList />}
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
  border: 1px solid rgba(22, 22, 22, 0.1);
  border-radius: 8px;
  object-fit: cover;
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
