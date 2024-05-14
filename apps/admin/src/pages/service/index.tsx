import { plusImage } from "@/assets";
import PageTeplate from "@/components/common/pageTemplate";
import ServiceCard from "@/components/service";
import styled from "@emotion/styled";
import { Button } from "@onboard/ui";

const ServicePage = () => {
  return (
    <PageTeplate>
      <StyledTitleWrapper>
        <StyledTitle>등록한 서비스</StyledTitle>
        <Button buttonColor="green">
          <img src={plusImage} />
          서비스 연결
        </Button>
      </StyledTitleWrapper>
      <StyledCountText>2개</StyledCountText>
      <StyledServiceCardWrapper>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </StyledServiceCardWrapper>
    </PageTeplate>
  );
};

export default ServicePage;

const StyledTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const StyledTitle = styled.span`
  color: #222222;
  font-weight: bold;
  font-size: 36px;
`;

const StyledCountText = styled.span`
  font-size: 16px;
  color: #222222;
  opacity: 0.5;
`;

const StyledServiceCardWrapper = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  width: 100%;
`;
