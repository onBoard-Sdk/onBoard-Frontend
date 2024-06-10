import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Button, Input } from "@onboard/ui";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLogin } from "@/apis/auth";
import { logoImage } from "@/assets";
import MainSection from "@/components/main";
import useTitle from "@/hooks/useTitle";

interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  useTitle('로그인')

  const { mutate: loginMutate } = useLogin();

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    return loginMutate(data);
  };

  return (
    <StyledContainer>
      <StyledLeft>
        <StyledLogo src={logoImage} />
        <StyledText>로그인</StyledText>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
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
            helpMessage={errors.password?.message}
          />
          <Button buttonColor="green" type="submit">
            로그인
          </Button>
          <Link to="/signup">
            <Button buttonColor="gray" style={{ width: "100%" }}>
              계정 만들기
            </Button>
          </Link>
        </StyledForm>
      </StyledLeft>
      <MainSection />
    </StyledContainer>
  );
};

export default Login;

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

const StyledLogo = styled.img`
  width: 10rem;
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
  width: 320px;
`;
