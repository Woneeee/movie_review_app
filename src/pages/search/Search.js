import { useForm } from "react-hook-form";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";
import { spacing } from "../../GlobalStyled";
import { searchMovie, searchTv } from "../../api";
import { useState } from "react";
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
  margin-bottom: 40px;
  margin-top: 20px;
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
  const [tvData, setTvData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const searchHandler = async ({ searchWord }) => {
    const { results } = await searchMovie(searchWord);
    const { results: tvResult } = await searchTv(searchWord);

    setSearchData(results);
    setTvData(tvResult);
    setIsLoading(false);
  };

  // console.log(searchData);
  console.log(tvData);
  // console.log(isLoading);

  return (
    <Container>
      <Form onSubmit={handleSubmit(searchHandler)}>
        <input
          {...register("searchWord", {
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

      {searchData?.length === 0 ? (
        "영화 검색결과가 없습니다 😢"
      ) : (
        <>
          {searchData && (
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
        </>
      )}
      {tvData?.length === 0 ? (
        "티비시리즈 검색결과가 없습니다 😢"
      ) : (
        <>
          {tvData && (
            <ConWrap>
              {tvData.map((tv) => (
                <Link to={`/tvdetail/${tv.id}`} key={tv.id}>
                  <Con>
                    <img src={W500_URL + tv.poster_path} alt={tv.title} />
                  </Con>
                </Link>
              ))}
            </ConWrap>
          )}
        </>
      )}
    </Container>
  );
};
// console.log(errors) 폼 제출을 하거나 안하거나 상관없이 사용가능
