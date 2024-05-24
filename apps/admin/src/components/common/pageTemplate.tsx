import { ReactNode } from "react";
import styled from "@emotion/styled";

type PageTemplate = {
  children: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const PageTemplate = ({ children, ...props }: PageTemplate) => {
  return (
    <StyledContainer>
      <StyledWrapper {...props}>{children}</StyledWrapper>
    </StyledContainer>
  );
};

export default PageTemplate;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  padding-top: 100px;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 60%;
  min-width: 700px;
`;
