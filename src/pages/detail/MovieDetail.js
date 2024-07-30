import { useEffect, useState } from "react";
import { keywordMovie, movieDetail, previewMovie, recomMovie } from "../../api";
import { Loading } from "../../components/Loading";
import styled from "styled-components";
import { ORIGIN_URL, W500_URL } from "../../constant/imgUrl";
import { Title } from "../../components/Title";
import { Link, useParams } from "react-router-dom";
import { useScrollTop } from "../../lib/useScrollTop";
import { FaPlay } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { color } from "../../GlobalStyled";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ConWrap = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
  margin-top: 140px;
`;

const PosterWrap = styled.div`
  width: 47%;
  /* height: 730px; */
  img {
    height: 100%;
    object-fit: cover;
  }
`;

const InfoWrap = styled.div`
  width: 47%;

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

const Button = styled.div`
  all: unset;
  width: 90px;
  margin-left: 50px;
  background-color: white;
  border-radius: 5px;
  color: black;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Genres = styled.div`
  font-size: 18px;
  margin-top: 20px;
  li {
    list-style: disc;
    margin-top: 10px;
  }
`;

const Keyword = styled.div`
  margin-top: 30px;
  font-size: 17px;
  p {
    margin-right: 10px;
    display: inline-block;
    line-height: 22px;
    letter-spacing: 0;
  }
  p:hover {
    text-decoration: underline;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  font-weight: 300;
  opacity: 0.7;
  margin-top: 60px;
  line-height: 30px;
  letter-spacing: 0;
`;

const Recommand = styled.div`
  margin-top: 150px;
  padding: 0 250px;
  h3 {
    font-size: 30px;
    font-weight: 400;
    margin-bottom: 30px;
  }
`;

const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 30px;
  column-gap: 20px;
`;

const Con = styled.div`
  height: 540px;
  img {
    height: 100%;
    object-fit: cover;
  }
`;

const Video = styled.div`
  /* background-color: #222; */
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: ${(props) => props.$playActive};
`;

const Close = styled.button`
  all: unset;
  width: 40px;
  height: 40px;
  border: 1px solid white;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  margin: 20px auto;
  cursor: pointer;
`;

export const MovieDetail = () => {
  useScrollTop();

  const [detail, setDetail] = useState();
  const [recomData, setRecomData] = useState();
  const [keyData, setKeyData] = useState();
  const [videoData, setVideoData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id: movieId } = useParams();
  // console.log(movieId);

  useEffect(() => {
    (async () => {
      try {
        const data = await movieDetail(movieId);
        const { keywords } = await keywordMovie(movieId);
        const { results: recomResult } = await recomMovie(movieId);
        const { results: videoResult } = await previewMovie(movieId);

        setDetail(data);
        setKeyData(keywords);
        setRecomData(recomResult);
        setVideoData(videoResult);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movieId]);

  // console.log(detail);
  // console.log(keyData);
  // console.log(recomData);
  // console.log(videoData);
  // console.log(isLoading);

  const [show, setShow] = useState(false);

  const playHandler = () => {
    if (!show) {
      setShow(true);
    }
  };

  const closeHandler = () => {
    if (show) {
      setShow(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Title titleName={detail.title} />
          <Container>
            <ConWrap>
              <PosterWrap>
                <img src={W500_URL + detail.poster_path} alt={detail.title} />
              </PosterWrap>

              <InfoWrap>
                <h3>{detail.title}</h3>
                <Info>
                  <span>{detail.release_date}</span>

                  <span>{Math.round(detail.vote_average)}점</span>

                  <span>{detail.runtime}분</span>

                  <Button onClick={playHandler}>
                    <FaPlay />
                    재생
                  </Button>
                </Info>

                <Genres>
                  {detail.genres.map((gene) => (
                    <li key={gene.id}>{gene.name}</li>
                  ))}
                </Genres>

                <Keyword>
                  {keyData.map((key) => (
                    <Link key={key.id} to={`/keyword/${key.id}`}>
                      <p>{key.name}</p>
                    </Link>
                  ))}
                </Keyword>

                <Desc>{detail.overview.slice(0, 600)}</Desc>
              </InfoWrap>
            </ConWrap>
          </Container>

          {recomData && (
            <Recommand>
              <h3>
                {detail.title} 를 좋아하신다면 ?? 🤔 이 영화도 추천해드릴게요!
              </h3>

              <Wrap>
                {recomData.map((data) => (
                  <Link to={`/moviedetail/${data.id}`} key={data.id}>
                    <Con>
                      <img src={W500_URL + data.poster_path} alt={data.title} />
                    </Con>
                  </Link>
                ))}
              </Wrap>
            </Recommand>
          )}

          {videoData.length > 0 && (
            <Video $playActive={show ? "block" : "none"}>
              <Close onClick={closeHandler}>
                <IoClose />
              </Close>

              <iframe
                width="1025"
                height="580"
                src={`https://www.youtube.com/embed/${videoData[0].key}?si=naDiGR7aPy8NbSOf`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </Video>
          )}
        </>
      )}
    </>
  );
};
