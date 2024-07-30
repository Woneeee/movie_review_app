import { useForm } from "react-hook-form";
import {
  Container,
  BackBG,
  Form,
  GoSIgnUp,
  ErrorMessage,
} from "../signin/components/SignStyle";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../routes";
import styled from "styled-components";
import { Title } from "../../components/Title";
import { useScrollTop } from "../../lib/useScrollTop";

export const SignUp = () => {
  useScrollTop();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const navi = useNavigate();

  const loginHandler = () => {
    navi("/signin");
    alert("가입 되었습니다!");
  };

  return (
    <Container>
      <Title titleName="SIGNUP" />

      <BackBG />

      <Form onSubmit={handleSubmit(loginHandler)}>
        <h3>회원가입</h3>

        <input
          {...register("username", {
            required: "아이디를 입력해주세요",
          })}
          type="text"
          placeholder="아이디"
        />
        <ErrorMessage>{errors?.username?.message}</ErrorMessage>

        <input
          {...register("email", {
            required: "이메일을 입력해주세요",
          })}
          type="text"
          placeholder="이메일"
        />
        <ErrorMessage>{errors?.email?.message}</ErrorMessage>

        <input
          {...register("password", {
            required: "비밀번호를 입력해주세요",
            minLength: {
              value: 8,
              message: "8자리 이상 입력해주세요",
            },
          })}
          type="password"
          placeholder="비밀번호"
        />
        <ErrorMessage>{errors?.password?.message}</ErrorMessage>

        <button>로그인</button>

        <GoSIgnUp>
          이미 YeahFlix 회원인가요? 지금
          <Link to={routes.signin}>로그인</Link> 하세요 😊
        </GoSIgnUp>
      </Form>
    </Container>
  );
};
