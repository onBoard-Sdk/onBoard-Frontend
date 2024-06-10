import styled from "@emotion/styled";

interface FeedbackCardProps {
  title: string;
  path: string;
  content: string;
}

export const FeedBackCard = ({ title, path, content }: FeedbackCardProps) => {
  return (
    <StyledWrapper>
      <StyledHeader>
        <StyledTitle>{title}</StyledTitle>
        <StyledURL>{path}</StyledURL>
      </StyledHeader>
      <StyledInfo>{content}</StyledInfo>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  border: 1px solid #e9e9e9;
  border-radius: 8px;
  padding: 14px 23px;
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StyledTitle = styled.span`
  color: #222222;
  font-size: 20px;
  line-height: 36px;
  font-weight: bold;
`;

const StyledURL = styled.span`
  color: #909090;
  font-size: 16px;
  line-height: 24px;
  text-decoration: underline;
`;

const StyledInfo = styled.div`
  width: 280px;
  height: 16px;
  color: #222222;
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
