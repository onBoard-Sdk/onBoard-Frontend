import styled from "@emotion/styled";
import { ServiceType } from "@/apis/services/useGetServices";

export const ServiceCard = ({ name, logoImageUrl, serviceUrl }: ServiceType) => {
  return (
    <StyledWrapper>
      <StyledImage src={logoImageUrl} alt="logo image" />
      <StyledServiceTitle>{name}</StyledServiceTitle>
      <StyledURL>{serviceUrl}</StyledURL>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid #e9e9e9;
  border-radius: 4px;
  padding: 16px;
  height: 100%;
`;

const StyledImage = styled.img`
  width: 64px;
  height: 64px;
  border: 1px solid #dedede;
  border-radius: 8px;
  object-fit: cover;
`;

const StyledServiceTitle = styled.span`
  color: #222222;
  font-size: 24px;
  line-height: 36px;
  font-weight: bold;
`;

const StyledURL = styled.div`
  min-width: 170px;
  color: #909090;
  font-size: 16px;
  line-height: 24px;
  word-break: break-all;
`;
