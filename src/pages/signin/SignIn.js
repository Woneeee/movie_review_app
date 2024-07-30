import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import styled from "styled-components";
import bg from "../../img/a.jpg";
import { color } from "../../GlobalStyled";

const Container = styled.div`
  height: 100vh;
  background: url(${bg}) no-repeat center / cover;
  position: relative;
  display: flex;
  justify-content: center;
  padding: 170px 0;
`;

const BackBG = styled.div`
  height: 100vh;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.4) 100%
  );
  position: absolute;
  top: 0;
  left: 0;
`;

const Form = styled.form`
  width: 500px;
  height: 700px;
  background-color: rgba(17, 17, 17, 0.9);
  padding: 70px 50px;
  h3 {
    font-size: 40px;
    text-align: center;
    font-weight: 700;
    margin-bottom: 50px;
  }

  input {
    all: unset;
    width: 100%;
    height: 50px;
    background-color: rgba(68, 68, 68, 0.4);
    margin-bottom: 10px;
    border-radius: 3px;
    &::placeholder {
      font-size: 18px;
      font-weight: 600;
      padding: 0 20px;
    }
  }

  button {
    all: unset;
    width: 100%;
    height: 60px;
    font-size: 18px;
    background-color: ${color.point};
    text-align: center;
    margin-top: 30px;
    border-radius: 3px;
    cursor: pointer;
  }
`;

const GoSIgnUp = styled.div`
  margin-top: 70px;
  font-size: 17px;
  letter-spacing: 0px;
  a {
    text-decoration: underline;
    color: ${color.point};
  }
  p {
    margin-top: 25px;
    line-height: 23px;
    font-size: 15px;
  }
`;

const ErrorMessage = styled.div`
  color: gold;
  margin-bottom: 10px;
`;

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const loginHandler = () => {};

  console.log(isValid);

  return (
    <Container>
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
          YeahFlix 회원이 아니신가요? 지금 <Link to={routes.signup}>가입</Link>
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
