import { useGetGuideList } from "@/api/guides";
import styled from "@emotion/styled";
import { Button } from "@onboard/ui";
import Airplaine from "../assets/airplane.svg";
import Powered from "../assets/powered.png";

type GuideListPropsType = {
  onClickGuide: (guideId: number) => void;
  onClickClose: () => void;
  onClickFeedback: () => void;
};

const GuideList = ({ onClickGuide, onClickClose, onClickFeedback }: GuideListPropsType) => {
  const { pathname } = window.location;
  const { data } = useGetGuideList(17, pathname);
  return (
    <StyledWrapper>
      <StyledCardList>
        {data?.data.guides.map((guide) => (
          <StyledCard
            key={guide.guideId}
            onClick={() => {
              onClickGuide(guide.guideId), onClickClose();
            }}
          >
            {guide.guideTitle}
          </StyledCard>
        ))}
      </StyledCardList>
      <StyledFooter>
        <Button buttonColor="gray" onClick={onClickFeedback}>
          <img src={Airplaine} alt="airplaine" /> 피드백
        </Button>
        <img src={Powered} alt="Powered" style={{ width: "60px", height: "27px" }} />
      </StyledFooter>
    </StyledWrapper>
  );
};

export default GuideList;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 260px;
  height: 350px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #2222221a;
`;

const StyledCardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledCard = styled.div`
  border-radius: 8px;
  padding: 8px;
  font-size: 16px;
  background-color: #f3f3f3;
  cursor: pointer;
`;

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;
