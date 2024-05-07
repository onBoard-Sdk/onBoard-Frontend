import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Button, Input } from "@onboard/ui";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCheckEmailVerify, useSendEmailVerify } from "@/apis/auth";
import { useSignup } from "@/apis/teams";
import { airplaneImage, checkImage, introduceImage } from "@/assets";

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
    <Container>
      <Left>
        <Text>새 계정 생성</Text>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Wrapper>
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
          </Wrapper>
          <Wrapper>
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
          </Wrapper>
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
              로그인
            </Button>
          </Link>
        </Form>
      </Left>
      <Right src={introduceImage} />
    </Container>
  );
};

export default Signup;

const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  padding: 24px;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  background-color: #fff;
`;

const Left = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  padding: 32px 16px;
  border: 1px solid var(--Black-10, rgba(34, 34, 34, 0.1));
  border: 1px solid var(--Black-10, color(display-p3 0.1333 0.1333 0.1333 / 0.1));
  background: linear-gradient(180deg, #fff 0%, #f2fbf5 100%);
  background: linear-gradient(180deg, color(display-p3 1 1 1) 0%, color(display-p3 0.955 0.985 0.9634) 100%);
`;

const Right = styled.img`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Text = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 36px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 400px;
`;
