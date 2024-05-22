import styled from "@emotion/styled";

export const FeedBackCard = () => {
  return (
    <StyledWrapper>
      <StyledHeader>
        <StyledTitle>제목입니다</StyledTitle>
        <StyledURL>/sample/url</StyledURL>
      </StyledHeader>
      <StyledInfo>이거추가할래 저것도살래 쿠폰도줄게 팝업좀 그만 띄워 주세요 </StyledInfo>
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
