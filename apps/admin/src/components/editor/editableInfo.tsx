import { useState } from "react";
import { Input, Button } from "@onboard/ui";
import { pencilSquare } from "@/assets";
import styled from "@emotion/styled";
import { GuideRequestType, useGuide } from "@/apis/guides/useGuide";
import { useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

export default function EditableInfo() {
  const [IsEditing, setIsEditing] = useState<boolean>(false);
  const { guideId } = useParams();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { mutate:guideMutate } = useGuide(Number(guideId));

  function onSubmit(data):SubmitHandler<GuideRequestType>{
    return guideMutate(data);
  };

  if (!IsEditing) {
    return (
      <HorizonalContainer>
        <StyledText>뭐 하는 법</StyledText>
        <StyledTextSubtle>/pathname</StyledTextSubtle>
        <Button buttonColor="gray"
        onClick={()=> setIsEditing(true)}>
          <img src={pencilSquare} alt="편집 아이콘"/>
          편집
        </Button>
      </HorizonalContainer>
    );
  }
  else{
    return(
      <HorizonalContainer>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="제목"
            defaultValue="뭐 하는 법"
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
                message: "path가 올바르지 않습니다"
              }
            })}
            isInvalid={!!errors.path?.message}
          />
          <Button buttonColor="green" type="submit">저장</Button>
        </StyledForm>
        <Button buttonColor="gray" onClick={()=> setIsEditing(false)}>취소</Button>
      </HorizonalContainer>
    );
  }
};

const HorizonalContainer = styled.header`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
`

const StyledText = styled.span`
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
`;

const StyledTextSubtle = styled.span`
  font-size: 20px;
  color: #00000080;
`;
