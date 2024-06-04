import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Button } from "@onboard/ui";
import { plusImage } from "@/assets";
import { ServiceCard } from "@/components/service";
import PageTeplate from "@/components/common/pageTemplate";
import { useGetServices } from "@/apis/services";
import useTitle from "@/hooks/useTitle";

export const ServicePage = () => {
  const { data } = useGetServices();

  useTitle('등록한 서비스')

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
      <StyledCountText>{data?.data.services.length}개</StyledCountText>
      <StyledServiceCardWrapper>
        {data?.data.services.map((service) => {
          return (
            <Link key={service.serviceUrl} to={`${service.serviceId}`}>
              <ServiceCard {...service} />
            </Link>
          );
        })}
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
  flex-wrap: wrap;
  gap: 12px;
  width: 100%;
`;
