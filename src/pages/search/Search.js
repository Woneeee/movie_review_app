import { useForm } from "react-hook-form";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";
import { spacing } from "../../GlobalStyled";
import { searchMovie, searchPerson } from "../../api";
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
`;

const Con = styled.div`
  height: 540px;
  img {
    height: 100%;
    object-fit: cover;
  }
`;

const Wrap = styled.div``;

export const Search = () => {
  const [searchData, setSearchData] = useState();
  const [personData, setPersonData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const searchHandler = async ({ searchWord }) => {
    const { results } = await searchMovie(searchWord);
    const { results: personResult } = await searchPerson(searchWord);

    setSearchData(results);
    setPersonData(personResult);
    setIsLoading(false);
  };

  // console.log(searchData);
  console.log(personData);
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
        "검색결과가 없습니다 😢"
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
              {personData.map((person) => (
                <Link to={`/moviedetail/${person.known_for[0].id}`}>
                  <Con>
                    <img
                      src={W500_URL + person.known_for[0].poster_path}
                      alt={person.known_for[0].title}
                    />
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
