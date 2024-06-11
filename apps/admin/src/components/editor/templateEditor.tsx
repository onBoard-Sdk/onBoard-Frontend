import React, { useState, Dispatch, useEffect } from "react";
import styled from "@emotion/styled";
import { Input, Button, Tooltip } from "@onboard/ui";
import PageElement from "./pageElement";
import { checkImage, tooltipPreviewImage, uploadImage } from "@/assets";
import { useForm } from "react-hook-form";
import { useDrag } from "react-use-gesture";
import { animated } from "react-spring";
import { useLocation, useParams } from "react-router-dom";
import { useCreateGuide, useGetGuideFlow } from "@/apis/guides";
import { useSaveGuide } from "@/apis/guides/useSaveGuide";
import { GetServicesType, useGetServices } from "@/apis/services";
import { GuideInfoType } from "@/pages/editor";

interface FlowType {
  emoji: string;
  guideElementTitle: string;
  description: string;
  imageUrl: string;
  shape: string;
  width: string;
  length: string;
}

export default function TemplateEditor({ guideInfo }: { guideInfo: GuideInfoType }) {
  const [selectedPage, setSelectedPage] = useState<number>(0);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [flow, setFlow] = useState<FlowType[]>([]);
  const [logoPos, setlogoPos] = useState({ x: 0, y: 0 });
  const bindLogoPos = useDrag((params) => {
    setlogoPos({
      x: params.offset[0],
      y: params.offset[1],
    });
    let copy = [...flow];
    copy[selectedPage - 1].width = params.offset[0];
    copy[selectedPage - 1].length = params.offset[1];
    setFlow(copy);
  });

  const locate = useLocation();

  const { data: serviceList } = useGetServices();
  const serviceIdx = +locate.pathname.split("/")[2];
  const serviceInfo = serviceList?.data.services.find((element) => element.serviceId === serviceIdx);

  const { data } = useGetGuideFlow(locate.pathname.split("/")[3]);

  useEffect(() => {
    if (locate.pathname.split("/")[3] && data?.data.guideElements) {
      setFlow(data?.data.guideElements);
    }
  }, [data]);

  useEffect(() => {
    if (selectedPage > 0) {
      setlogoPos({ x: flow[selectedPage - 1].width, y: flow[selectedPage - 1].length });
    }
  }, [selectedPage]);

  return (
    <EditorContainer>
      {isEditing ? (
        <EditingSidebar setIsEditing={setIsEditing} setFlow={setFlow} />
      ) : (
        <DefaultSidebar
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          setIsEditing={setIsEditing}
          setFlow={setFlow}
          guideInfo={guideInfo}
          data={flow}
        />
      )}
      <ServiceWrapper>
        {selectedPage !== 0 && !isEditing && (
          <animated.div
            {...bindLogoPos()}
            style={{
              position: "absolute",
              x: logoPos.x,
              y: logoPos.y,
              zIndex: 99,
            }}
          >
            <Tooltip
              title={flow[selectedPage - 1]?.guideElementTitle}
              explanation={flow[selectedPage - 1]?.description}
              emoji={flow[selectedPage - 1]?.emoji}
            />
          </animated.div>
        )}
        <StyledIframe src={serviceInfo?.serviceUrl} />
      </ServiceWrapper>
    </EditorContainer>
  );
}

const EditingSidebar = ({
  setIsEditing,
  setFlow,
}: {
  setIsEditing: Dispatch<React.SetStateAction<boolean>>;
  setFlow: Dispatch<React.SetStateAction<FlowType[]>>;
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setFlow((prev) => [
      ...prev,
      {
        emoji: data?.emoji,
        guideElementTitle: data?.title,
        description: data?.body,
        imageUrl: "",
        shape: "basic",
        width: 0,
        length: 0,
      },
    ]);
    setIsEditing(false);
  };

  return (
    <FlowContainer>
      <Button buttonColor="gray" onClick={() => setIsEditing(false)}>
        취소
      </Button>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Button buttonColor="green" type="submit">
          <img src={checkImage} />
          완료
        </Button>
        <StyledTextTitle>툴팁</StyledTextTitle>
        우측에서 추가할 템플릿이 웹사이트의 어떤 요소를 따르게 할지 선택하세요
        <StyledImage src={tooltipPreviewImage} />
        <Input
          label="이모지(선택)"
          {...register("emoji", {
            pattern: {
              value: /\p{RGI_Emoji}/v,
              message: "이모지만 입력할 수 있습니다",
            },
          })}
          isInvalid={!!errors.path?.emoji}
        />
        <Input label="제목" {...register("title")} />
        <Input label="내용" {...register("body")} />
        <StyledTextLabel>이미지(선택)</StyledTextLabel>
        <ButtonNonStrechContainer>
          <Button type="button" buttonColor="green">
            <img src={uploadImage} />
            이미지 업로드
          </Button>
          <Button type="button" buttonColor="gray">
            삭제
          </Button>
        </ButtonNonStrechContainer>
      </StyledForm>
    </FlowContainer>
  );
};

interface DefaultSidebarPropsType {
  selectedPage: number;
  setSelectedPage: Dispatch<React.SetStateAction<number>>;
  setIsEditing: Dispatch<React.SetStateAction<boolean>>;
  data: FlowType[];
  setFlow: Dispatch<React.SetStateAction<FlowType>>;
  guideInfo: GuideInfoType;
}

const DefaultSidebar = ({
  selectedPage,
  setSelectedPage,
  setIsEditing,
  setFlow,
  data,
  guideInfo,
}: DefaultSidebarPropsType) => {
  const { mutate } = useCreateGuide();
  const locate = useLocation();
  const { guideId } = useParams();

  const { mutateAsync: guideMutate } = useSaveGuide(Number(guideId));

  return (
    <FlowContainer>
      <StyledTextSubtle>페이지 {data?.length ? `${selectedPage}/${data?.length}` : "없음"}</StyledTextSubtle>
      <PageList>
        <PageElement
          description="기본 상태"
          index={0}
          selected={selectedPage === 0}
          onClick={() => setSelectedPage(0)}
        />
        {data?.map((d, i) => (
          <PageElement
            key={i}
            description={d.guideElementTitle}
            index={i + 1}
            selected={selectedPage === i + 1}
            onClick={() => setSelectedPage(i + 1)}
          />
        ))}
      </PageList>
      <Button
        buttonColor="gray"
        onClick={() => {
          !!guideId
            ? guideMutate({
                serviceId: +locate.pathname.split("/")[2],
                guideTitle: guideInfo.guideTitle,
                path: guideInfo.path,
                guideElements: data,
              })
            : mutate({
                serviceId: +locate.pathname.split("/")[2],
                guideTitle: guideInfo.guideTitle,
                path: guideInfo.path,
                guideElements: data,
              });
        }}
      >
        {!!guideId ? "저장" : "생성"}
      </Button>
      <ButtonContainer>
        <Button buttonColor="green" onClick={() => setIsEditing(true)}>
          새 페이지
        </Button>
        <Button buttonColor="green" disabled={selectedPage === 0} onClick={() => setIsEditing(true)}>
          편집
        </Button>
        <Button
          buttonColor="gray"
          disabled={selectedPage === 0}
          onClick={() => {
            setSelectedPage(0);
            setFlow(data.filter((res, idx) => idx + 1 !== selectedPage));
          }}
        >
          삭제
        </Button>
      </ButtonContainer>
    </FlowContainer>
  );
};

const EditorContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

const StyledIframe = styled.iframe`
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
`;

const ServiceWrapper = styled.div`
  position: relative;
  width: 922px;
  height: 779px;
  overflow: scroll;

  border: 1px #2222221a solid;
  border-radius: 8px;
`;

const FlowContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding: 16px;
  width: 340px;

  background: #f7f7f7;
  border-radius: 16px;
`;

const PageList = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;

  overflow: scroll;
`;

const StyledTextSubtle = styled.p`
  color: #22222280;
  font-size: 16px;
  font-weight: 400;
`;

const StyledTextTitle = styled.p`
  font-size: 28px;
  font-weight: 700;
  line-height: 1.5;
`;

const StyledTextLabel = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 1.5;
  color: #222222bf;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  & > button {
    flex: 1;
  }
`;

const ButtonNonStrechContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const StyledImage = styled.img`
  border-radius: 8px;
  width: 100%;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
