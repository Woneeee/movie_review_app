import { useEffect, useState } from "react";
import { keywordMovie, movieDetail, previewMovie, recomMovie } from "../../api";
import { Loading } from "../../components/Loading";
import { W500_URL } from "../../constant/imgUrl";
import { Title } from "../../components/Title";
import { Link, useParams } from "react-router-dom";
import { useScrollTop } from "../../lib/useScrollTop";
import { FaPlay } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import {
  Container,
  ConWrap,
  PosterWrap,
  InfoWrap,
  Info,
  Button,
  Genres,
  Keyword,
  Desc,
  Recommand,
  Wrap,
  Con,
  Video,
  Close,
} from "./components/DetailStyle";
import noImage from "../../img/c.gif";

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
                    &nbsp;&nbsp;예고편
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
                      <p>#{key.name}</p>
                    </Link>
                  ))}
                </Keyword>

                <Desc>{detail.overview.slice(0, 600)}</Desc>
              </InfoWrap>
            </ConWrap>
          </Container>

          {recomData && (
            <Recommand>
              <h3>"{detail.title}" 를 좋아하신다면 이 영화도 추천드려요 🤗</h3>

              <Wrap>
                {recomData.map((data) => (
                  <Link key={data.id} to={`/moviedetail/${data.id}`}>
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
                width="1025vw"
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
