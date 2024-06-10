import styled from "@emotion/styled";
import { mainSection1Image, mainSection2Image } from "@/assets";

const MainSection = () => {
  return (
    <StyledContainer>
      <StyledImage />
      <StyledImage image={mainSection1Image} />
      <StyledText>
        언제나 당연한
        <br />
        경험은 없으니까
      </StyledText>
      <StyledImage image={mainSection2Image} />
      <StyledImage />
    </StyledContainer>
  );
};

export default MainSection;

const StyledContainer = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #84f051 0%, #40de6c 100%);
  border: 1px solid rgba(230, 230, 230, 0.9);
  border-radius: 16px;
  overflow: hidden;
`;

const StyledText = styled.div`
  width: 60%;
  font-size: 40px;
  font-weight: 700;
  color: black;
`;

const StyledImage = styled.div<{ image?: string }>`
  flex-shrink: 0;
  width: 60%;
  height: 240px;
  ${({ image }) => (image ? `background-image: url(${image});` : "background-color: white;")}
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: 1px solid rgba(22, 22, 22, 0.1);
  border-radius: 16px;
`;
