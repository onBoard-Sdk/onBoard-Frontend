import styled from '@emotion/styled';

export const StyledWrapper = styled.div<{
    is: boolean;
}>`
    display: ${({ is }) => (is ? 'flex' : 'none')};
    width: 324px;
    height: 412px;
    padding: 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-radius: 8px;
    border: 1px solid var(--Black-10, rgba(34, 34, 34, 0.1));
    background: #ffffff;
`;

export const StyledList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 330px;
    overflow-y: scroll;
    gap: 10px;
`;

export const StyledBlock = styled.div`
    display: flex;
    padding: 8px;
    gap: 4px;
    border-radius: 8px;
    background: #f3f3f3;
`;

export const StyledFeedbackBtnWrapper = styled.div`
    display: flex;
    height: 36px;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border-radius: 8px;
    background: #f1f1f1;
    cursor: pointer;
`;

const StyledTitle = styled.div`
    font-size: 24px;
    font-weight: 700;
`;

const StyledText = styled.div`
    font-size: 12px;
    font-weight: 500;
`;

export const StyledBtnsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const StyledSendButton = styled.button`
    display: flex;
    height: 36px;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border-radius: 8px;
    background: #40de6c;
    box-shadow: 0px 1px 1px 0px rgba(255, 255, 255, 0.5) inset, 0px 1px 4px 0px rgba(26, 26, 26, 0.5),
        0px 0px 0px 0.5px #40de6c;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
`;
