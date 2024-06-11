import styled from "@emotion/styled";
import { GuideCard } from "./GuideCard";
import { useGetGuideList } from "@/apis/guides";
import { useLocation } from "react-router-dom";

export const GuildeList = () => {
  const locate = useLocation();
  const serviceId = +locate.pathname.split("/")[2];
  const { data: guideList } = useGetGuideList();

  return (
    <StyledListWrapper>
      {guideList?.data.guides.length! > 0 ? (
        guideList?.data.guides.map((guide) => {
          return (
            <GuideCard
              key={guide.guideId}
              title={guide.guideTitle}
              path={guide.path}
              guideId={guide.guideId}
              serviceId={serviceId}
            />
          );
        })
      ) : (
        <></>
      )}
    </StyledListWrapper>
  );
};

const StyledListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  height: 500px;
  border: 1px solid #e9e9e9;
  border-radius: 16px;
  padding: 12px;
  overflow: scroll;
`;
