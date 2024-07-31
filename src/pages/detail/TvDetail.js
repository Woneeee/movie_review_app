import { useEffect, useState } from "react";
import { recomTv, seriesDetail } from "../../api";
import { Link, useParams } from "react-router-dom";
import { Loading } from "../../components/Loading";
import {
  Container,
  ConWrap,
  PosterWrap,
  InfoWrap,
  Info,
  Genres,
  Desc,
  Recommand,
  Wrap,
  Con,
} from "./components/DetailStyle";
import { Title } from "../../components/Title";
import { W500_URL } from "../../constant/imgUrl";

export const TvDetail = () => {
  const [detailData, setDetailData] = useState();
  const [recomData, setRecomData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id: series_id } = useParams();
  // console.log(id);

  useEffect(() => {
    (async () => {
      try {
        const detail = await seriesDetail(series_id);
        const { results: recomResult } = await recomTv(series_id);

        setDetailData(detail);
        setRecomData(recomResult);
        setIsLoading(false);
      } catch (error) {
        console(error);
      }
    })();
  }, [series_id]);

  // console.log(detailData);
  console.log(recomData);
  // console.log(isLoading);

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
                {detailData.name} 를 좋아하신다면 ?? 🤔 이 영화도
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
        </>
      )}
    </>
  );
};
