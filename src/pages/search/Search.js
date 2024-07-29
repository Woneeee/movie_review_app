import { useForm } from "react-hook-form";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";
import { spacing } from "../../GlobalStyled";
import { searchMovie } from "../../api";
import { useState } from "react";
import { Loading } from "../../components/Loading";
import { W500_URL } from "../../constant/imgUrl";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 150px ${spacing.side};
`;

const Form = styled.form`
  position: relative;
  input {
    all: unset;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #555;
    &::placeholder {
      font-size: 20px;
    }
    padding: 0 10px;
    font-size: 20px;
    letter-spacing: 0;
  }
`;

const Button = styled.button`
  all: unset;
  position: absolute;
  top: 20px;
  right: 0;
  font-size: 25px;
  cursor: pointer;
`;

const ErrorMessage = styled.div`
  color: gold;
  margin-top: 10px;
  font-size: 18px;
  margin-bottom: 30px;
`;

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 30px;
  column-gap: 15px;
`;

const Con = styled.div`
  height: 540px;
  img {
    height: 100%;
    object-fit: cover;
  }
`;

export const Search = () => {
  const [searchData, setSearchData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const searchHandler = async ({ movieTitle }) => {
    const { results } = await searchMovie(movieTitle);

    setSearchData(results);
    setIsLoading(false);
  };

  console.log(searchData);
  // console.log(isLoading);

  return (
    <Container>
      <Form onSubmit={handleSubmit(searchHandler)}>
        <input
          {...register("movieTitle", {
            required: "검색어를 입력해 주세요 😊",
          })}
          type="text"
          placeholder="영화제목, 사람 입력가능"
        />

        <Button>
          <BsSearch />
        </Button>

        <ErrorMessage>{errors?.movieTitle?.message}</ErrorMessage>
      </Form>

      {isLoading ? (
        ""
      ) : (
        <ConWrap>
          {searchData.map((res) => (
            <Link to={`/moviedetail/${res.id}`} key={res.id}>
              <Con>
                <img src={W500_URL + res.poster_path} alt={res.title} />
              </Con>
            </Link>
          ))}
        </ConWrap>
      )}
    </Container>
  );
};
// console.log(errors) 폼 제출을 하거나 안하거나 상관없이 사용가능
