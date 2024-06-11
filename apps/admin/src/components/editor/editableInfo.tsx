import { useState, useEffect, useCallback } from "react";
import { Input, Button } from "@onboard/ui";
import { pencilSquare } from "@/assets";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { useSaveGuide } from "../../apis/guides/useSaveGuide";

export type editableIndoProps = {
  guideId: number;
};

export default function EditableInfo({ guideId }: editableIndoProps) {
  const [IsEditing, setIsEditing] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({ values: { guideTitle: "가이드1", path: "/" } });
  
  const saveGuide = useSaveGuide(guideId);

  const saveGuideData = useCallback(() => {
    saveGuide.mutate({
      guideTitle: watch("guideTitle"),
      path: watch("path"),
    });
  }, [saveGuide, watch]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (IsEditing) {
        saveGuideData();
      }
    }, 60000);

    return () => clearInterval(interval);
  }, [IsEditing, saveGuideData]);

  // const { data } = useGetGuideFlow(guideId);

  if (!IsEditing) {
    return (
      <HorizonalContainer>
        <StyledText>{watch("guideTitle")}</StyledText>
        <StyledTextSubtle>{watch("path")}</StyledTextSubtle>
        <Button buttonColor="gray" onClick={() => {
          setIsEditing(true);
          saveGuideData();
        }}>
          <img src={pencilSquare} alt="편집 아이콘" />
          편집
        </Button>
      </HorizonalContainer>
    );
  } else {
    return (
      <HorizonalContainer>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="제목"
            defaultValue="새 가이드"
            helpMessage="서비스 사용자에게 표시되는 제목입니다"
            {...register("guideTitle")}
          />
          <Input
            label="URL"
            defaultValue="/pathname"
            helpMessage={!errors.path?.message ? "가이드를 표시할 주소입니다" : errors.path?.message}
            {...register("path", {
              pattern: {
                value: /\/[0-9A-Za-z.\-]+/g,
                message: "path가 올바르지 않습니다",
              },
            })}
            isInvalid={!!errors.path?.message}
          />
          <Button buttonColor="green" type="submit">
            저장
          </Button>
        </StyledForm>
        <Button buttonColor="gray" onClick={() => setIsEditing(false)}>
          취소
        </Button>
      </HorizonalContainer>
    );
  }
}

const HorizonalContainer = styled.header`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  padding-top: 60px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
`;

const StyledText = styled.span`
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
`;

const StyledTextSubtle = styled.span`
  font-size: 20px;
  color: #00000080;
`;
