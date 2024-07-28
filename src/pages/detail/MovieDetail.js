import { useEffect, useState } from "react";
import { movieDetail } from "../../api";
import { Loading } from "../../components/Loading";
import styled from "styled-components";
import { ORIGIN_URL } from "../../constant/imgUrl";
import { Title } from "../../components/Title";
import { Link, useParams } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ConWrap = styled.div`
  width: 900px;
  display: flex;
  justify-content: space-between;
  margin-top: 130px;
`;

const PosterWrap = styled.div`
  width: 45%;
  img {
    height: 100%;
    object-fit: cover;
  }
`;

const InfoWrap = styled.div`
  width: 50%;

  h3 {
    font-size: 65px;
    font-weight: 700;
    margin-bottom: 30px;
  }
`;

const Info = styled.div`
  display: flex;
  span {
    display: block;
    padding: 9px 20px;
    background-color: #333;
    border-radius: 20px;
    font-size: 18px;
    font-weight: 400;
    margin-right: 15px;
  }
`;

const Genres = styled.div`
  font-size: 18px;
  margin-top: 20px;
  li {
    list-style: disc;
    margin-top: 10px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  font-weight: 300;
  opacity: 0.7;
  margin-top: 70px;
  line-height: 30px;
`;

export const MovieDetail = () => {
  const [detail, setDetail] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id: movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    (async () => {
      try {
        const data = await movieDetail(movieId);

        setDetail(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movieId]);

  console.log(detail);
  // console.log(isLoading);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <Title titleName={detail.title} />
          <ConWrap>
            <PosterWrap>
              <img src={ORIGIN_URL + detail.poster_path} alt="" />
            </PosterWrap>

            <InfoWrap>
              <h3>{detail.title}</h3>
              <Info>
                <span>{detail.release_date}</span>

                <span>{Math.round(detail.vote_average)}점</span>

                <span>{detail.runtime}분</span>
              </Info>

              <Genres>
                {detail.genres.map((gene) => (
                  <li key={gene.id}>{gene.name}</li>
                ))}
              </Genres>

              <Desc>{detail.overview}</Desc>
            </InfoWrap>
          </ConWrap>
        </Container>
      )}
    </>
  );
};
