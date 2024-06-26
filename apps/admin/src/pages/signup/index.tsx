import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Button, Input } from "@onboard/ui";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCheckEmailVerify, useSendEmailVerify } from "@/apis/auth";
import { useSignup } from "@/apis/teams";
import { airplaneImage, checkImage } from "@/assets";
import MainSection from "@/components/main";
import { leftArrow } from "@/assets";
import useTitle from "@/hooks/useTitle";

interface SignupForm {
  email: string;
  authCode: string;
  password: string;
}

const Signup = () => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupForm>();

  useTitle('새 계정 만들기')

  const [isVerifiedEmail, setIsVerifiedEmail] = useState(true);

  const { mutate: sendEmailVerifyMutate } = useSendEmailVerify({ email: watch("email") });
  const { mutate: checkEmailVerifyMutate } = useCheckEmailVerify({
    email: watch("email"),
    authCode: watch("authCode"),
    options: {
      onSuccess: () => setIsVerifiedEmail(false),
      onError: (e) => {
        alert("인증에 실패하였습니다."), console.log(e);
      },
    },
  });
  const { mutate: signupMutate } = useSignup();

  const onSubmit: SubmitHandler<SignupForm> = (data) => {
    const { authCode, ...props } = data;
    return signupMutate({ name: "initial", ...props });
  };

  return (
    <StyledContainer>
      <StyledLeft>
        <StyledText>새 계정 생성</StyledText>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledWrapper>
            <Input
              label="이메일"
              {...register("email", {
                pattern: {
                  value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
                  message: "이메일 형식이 올바르지 않습니다.",
                },
                required: "필수입니다",
              })}
              placeholder={"example@domain.net"}
              isInvalid={!!errors.email?.message}
              helpMessage={errors.email?.message}
            />
            <Button buttonColor="green" type="button" onClick={() => sendEmailVerifyMutate()}>
              <img src={airplaneImage} alt="airplaneImage" />
              인증
            </Button>
          </StyledWrapper>
          <StyledWrapper>
            <Input
              label="이메일 인증  번호"
              {...register("authCode")}
              isInvalid={!!errors.email?.message}
              helpMessage={"입력한 이메일로 전송된 인증 번호를 입력하세요"}
            />
            <Button buttonColor="green" type="button" onClick={() => checkEmailVerifyMutate()}>
              <img src={checkImage} alt="checkImage" />
              확인
            </Button>
          </StyledWrapper>
          <Input
            type="password"
            label="비밀번호"
            {...register("password", {
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
                message: "영문/숫자/특수기호를 최소 1개씩은 포함해야합니다",
              },
              required: "필수입니다",
            })}
            isInvalid={!!errors.password?.message}
            helpMessage={"8자 이상, 숫자, 영문, 특수기호를 모두 포함해야 합니다"}
          />
          <Button buttonColor="green" type="submit" disabled={isVerifiedEmail}>
            계정 만들기
          </Button>
          <Link to="/">
            <Button buttonColor="gray" style={{ width: "100%" }}>
              <img src={leftArrow} alt="leftArrow" />
              로그인
            </Button>
          </Link>
        </StyledForm>
      </StyledLeft>
      <MainSection />
    </StyledContainer>
  );
};

export default Signup;

const StyledContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  padding: 24px;
  width: 100%;
  height: 100vh;
  background-color: #fff;
`;

const StyledLeft = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  padding: 32px 16px;
  border: 1px solid var(--Black-10, rgba(34, 34, 34, 0.1));
  background: linear-gradient(180deg, #fff 0%, #f2fbf5 100%);
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const StyledText = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 36px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 400px;
`;
