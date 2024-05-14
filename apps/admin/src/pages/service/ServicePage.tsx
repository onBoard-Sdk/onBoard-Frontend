import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Button } from "@onboard/ui";
import { plusImage } from "@/assets";
import { ServiceCard } from "@/components/service";
import PageTeplate from "@/components/common/pageTemplate";

export const ServicePage = () => {
  return (
    <PageTeplate>
      <StyledTitleWrapper>
        <StyledTitle>등록한 서비스</StyledTitle>
        <Link to="new">
          <Button buttonColor="green">
            <img src={plusImage} />
            서비스 연결
          </Button>
        </Link>
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
