import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../routes";
import {
  Container,
  BackBG,
  Form,
  GoSIgnUp,
  ErrorMessage,
} from "./components/SignStyle";
import { Title } from "../../components/Title";
import { useScrollTop } from "../../lib/useScrollTop";
import { trending } from "../../api";

export const SignIn = () => {
  useScrollTop();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const navi = useNavigate();

  const loginHandler = () => {
    navi("/");
    alert("로그인 되었습니다!");
  };

  // console.log(isValid);

  return (
    <Container>
      <Title titleName="SIGNIN" />
      <BackBG />

      <Form onSubmit={handleSubmit(loginHandler)}>
        <h3>로그인</h3>

        <input
          {...register("username", {
            required: "아이디를 입력해주세요",
          })}
          type="text"
          placeholder="아이디"
        />
        <ErrorMessage>{errors?.username?.message}</ErrorMessage>

        <input
          {...register("password", {
            required: "비밀번호를 입력해주세요",
          })}
          type="password"
          placeholder="비밀번호"
        />
        <ErrorMessage>{errors?.password?.message}</ErrorMessage>

        <button>로그인</button>

        <GoSIgnUp>
          YEAHFLIX 회원이 아닌가요? 지금 <Link to={routes.signup}>가입</Link>
          하세요 😊
          <p>
            이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을
            확인합니다.
          </p>
        </GoSIgnUp>
      </Form>
    </Container>
  );
};
