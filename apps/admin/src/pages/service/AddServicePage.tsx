import { useRef, useState } from "react";
import styled from "@emotion/styled";
import { Button, Input } from "@onboard/ui";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { GetServicesType, ServiceForm, useDeleteService, usePatchService, usePostService } from "@/apis/services";
import PageTemplate from "@/components/common/pageTemplate";
import { emptyImage, leftArrow, trashImage, uploadImage } from "@/assets";
import { useQueryClient } from "@tanstack/react-query";
import { useDidMountEffect } from "@/hooks/useDidMountEffect";
import useTitle from "@/hooks/useTitle";

export const AddServicePage = () => {
  const navigate = useNavigate();
  const locate = useLocation();

  const queryClient = useQueryClient();
  const serviceList = queryClient.getQueryData<GetServicesType>(["serviceList"]);
  const serviceIdx = +locate.pathname.split("/")[2];
  const serviceInfo = serviceList?.data.services.find((element) => element.serviceId === +serviceIdx);
  const hasService = !Number.isNaN(serviceIdx);

  const [serviceImg, setServiceImg] = useState(hasService ? serviceInfo?.logoImageUrl : emptyImage);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ServiceForm>({
    defaultValues: {
      name: hasService ? serviceInfo?.name : "",
      logoImageUrl: hasService ? serviceInfo?.logoImageUrl : emptyImage,
      serviceUrl: hasService ? serviceInfo?.serviceUrl : "",
    },
  });
  const { ref, ...inputRegister } = register("logoImageUrl");
  const selectedImage = watch("logoImageUrl");
  const { mutate: postServiceMutate } = usePostService();
  const { mutate: patchServiceMutate } = usePatchService(serviceInfo?.serviceId);
  const { mutate: deletServiceMutate } = useDeleteService();

  const handleImage = () => {
    if (inputRef.current) inputRef.current.click();
  };

  const onSubmit: SubmitHandler<ServiceForm> = (data) => {
    return hasService ? patchServiceMutate(data) : postServiceMutate(data);
  };

  const onDeleteImage = () => {
    setServiceImg(emptyImage);
  };

  useDidMountEffect(() => {
    if (selectedImage && selectedImage.length > 0) {
      const image = selectedImage[0];
      typeof selectedImage !== "string" && setServiceImg(URL.createObjectURL(image as File));
    }
  }, [selectedImage]);

  useTitle('새 서비스 연결')

  return (
    <PageTemplate style={{ gap: "24px" }}>
      <Button
        buttonColor="gray"
        onClick={() => {
          navigate(-1);
        }}
      >
        <img src={leftArrow} alt="leftArrow" /> 돌아가기
      </Button>
      <StyledTitle>새 서비스 연결하기</StyledTitle>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledImageWrapper>
          <StyledImage src={serviceImg} alt="serviceImg" />
          <Button buttonColor="green" onClick={handleImage}>
            <img src={uploadImage} alt="uploadImage" /> 이미지 업로드
          </Button>
          <StyledInput
            type="file"
            ref={(e) => {
              ref(e), (inputRef.current = e);
            }}
            {...inputRegister}
            accept="image/*"
          />
          <Button buttonColor="gray" onClick={onDeleteImage}>
            <img src={trashImage} alt="trashImage" /> 삭제
          </Button>
        </StyledImageWrapper>
        <Input
          label="이름"
          {...register("name", { required: "필수입니다" })}
          placeholder="이름을 작성해주세요"
          isInvalid={!!errors.name?.message}
          helpMessage={errors.name?.message ?? "대시보드에 표시되는 이름입니다"}
        />
        <Input
          label="서비스 URL"
          {...register("serviceUrl", {
            pattern: {
              value: /^https?\:\/\/[\w\-\.]+[a-z]$/,
              message: "서비스의 메인페이지 url을 작성해주세요.",
            },
            required: "필수입니다",
          })}
          placeholder="https://~"
          isInvalid={!!errors.serviceUrl?.message}
          helpMessage={errors.serviceUrl?.message ?? "서비스에 접속할 수 있는 URL을 입력하세요"}
        />
        <Button buttonColor="green" type="submit">
          {hasService ? "저장" : "완료"}
        </Button>
      </StyledForm>
      {hasService && (
        <Button buttonColor="gray" onClick={() => deletServiceMutate(serviceInfo!.serviceId)}>
          <img src={trashImage} alt="trashImage" /> 서비스 삭제
        </Button>
      )}
    </PageTemplate>
  );
};

const StyledTitle = styled.span`
  color: #222222;
  font-size: 36px;
  font-weight: bold;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 50%;
`;

const StyledImageWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
`;

const StyledImage = styled.img`
  width: 128px;
  height: 128px;
  border: 1px solid #dedede;
  border-radius: 16px;
  object-fit: cover;
`;

const StyledInput = styled.input`
  display: none;
`;
