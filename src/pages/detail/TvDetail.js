import { useEffect, useState } from "react";
import { previewTv, recomTv, seriesDetail } from "../../api";
import { Link, useParams } from "react-router-dom";
import { Loading } from "../../components/Loading";
import {
  Container,
  ConWrap,
  PosterWrap,
  InfoWrap,
  Info,
  Button,
  Genres,
  Desc,
  Recommand,
  Wrap,
  Con,
  Video,
  Close,
} from "./components/DetailStyle";
import { Title } from "../../components/Title";
import { W500_URL } from "../../constant/imgUrl";
import { useScrollTop } from "../../lib/useScrollTop";
import { IoClose } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import noImage from "../../img/c.gif";

export const TvDetail = () => {
  useScrollTop();

  const [detailData, setDetailData] = useState();
  const [recomData, setRecomData] = useState();
  const [videoData, setVideoData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id: series_id } = useParams();
  // console.log(id);

  useEffect(() => {
    (async () => {
      try {
        const detail = await seriesDetail(series_id);
        const { results: recomResult } = await recomTv(series_id);
        const { results: videoResult } = await previewTv(series_id);

        setDetailData(detail);
        setRecomData(recomResult);
        setVideoData(videoResult);
        setIsLoading(false);
      } catch (error) {
        console(error);
      }
    })();
  }, [series_id]);

  // console.log(detailData);
  // console.log(recomData);
  // console.log(videoData);
  // console.log(isLoading);

  const [show, setShow] = useState(false);
  const [stop, setStop] = useState(false);

  const playHandler = () => {
    if (!show) {
      setShow(true);
    }
  };

  const closeHandler = () => {
    if (show) {
      setShow(false);
    }
    if (!stop) {
      setStop(true);
    }
    setTimeout(() => {
      setStop(false);
    }, 2000);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Title titleName={detailData.name} />
          <Container>
            <ConWrap>
              <PosterWrap>
                <img
                  src={W500_URL + detailData.poster_path}
                  alt={detailData.title}
                />
              </PosterWrap>

              <InfoWrap>
                <h3>{detailData.name}</h3>
                <Info>
                  <span>{detailData.first_air_date}</span>

                  <span>{Math.round(detailData.vote_average)}점</span>

                  <span>총 {detailData.number_of_seasons}시즌</span>

                  <Button onClick={playHandler}>
                    <FaPlay />
                    &nbsp;&nbsp;예고편
                  </Button>
                </Info>

                <Genres>
                  {detailData.genres.map((gene) => (
                    <li key={gene.id}>{gene.name}</li>
                  ))}
                </Genres>

                <Desc>{detailData.overview.slice(0, 600)}</Desc>
              </InfoWrap>
            </ConWrap>
          </Container>

          {recomData && (
            <Recommand>
              <h3>
                {detailData.name} 를 좋아하신다면 ?? 🤔 이 TV시리즈도
                추천해드릴게요!
              </h3>

              <Wrap>
                {recomData.map((data) => (
                  <Link to={`/tvdetail/${data.id}`} key={data.id}>
                    <Con>
                      <img src={W500_URL + data.poster_path} alt={data.name} />
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
                src={`https://www.youtube.com/embed/${videoData[0].key}?end=${
                  stop ? "1" : ""
                }`}
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
