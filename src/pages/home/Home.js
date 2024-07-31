import { useEffect, useState } from "react";
import {
  nowPlaying,
  onAir,
  popTv,
  popular,
  topRated,
  topTv,
  trending,
  trendingTv,
  upcoming,
} from "../../api";
import { Loading } from "../../components/Loading";
import { MainBanner } from "./components/MainBanner";
import "swiper/css";
import { Title } from "../../components/Title";
import { Movies } from "./components/Movies";
import { Series } from "./components/Series";

export const Home = () => {
  const [trdData, setTrdData] = useState();
  const [nowData, setNowData] = useState();
  const [popData, setPopData] = useState();
  const [topData, setTopData] = useState();
  const [upData, setUpData] = useState();
  const [trdTvData, setTrdTvData] = useState();
  const [onAirData, setOnAirData] = useState();
  const [popTvData, setPopTvData] = useState();
  const [topTvData, setTopTvData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results: trdResult } = await trending();
        const { results: nowResult } = await nowPlaying();
        const { results: popResult } = await popular();
        const { results: topResult } = await topRated();
        const { results: upResult } = await upcoming();
        const { results: trdTvResult } = await trendingTv();
        const { results: onAirResult } = await onAir();
        const { results: popTvResult } = await popTv();
        const { results: topTvResult } = await topTv();

        setTrdData(trdResult);
        setNowData(nowResult);
        setPopData(popResult);
        setTopData(topResult);
        setUpData(upResult);
        setTrdTvData(trdTvResult);
        setOnAirData(onAirResult);
        setPopTvData(popTvResult);
        setTopTvData(topTvResult);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // console.log(trdData);
  // console.log(nowData);
  // console.log(popData);
  // console.log(topData);
  // console.log(upData);
  // console.log(onAirData);
  // console.log(isLoading);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Title titleName="HOME" />
          <MainBanner data={trdData[0]} />

          <Movies title="상영 영화" movieData={nowData} />
          <Movies title="트렌드 영화" movieData={trdData} />
          <Movies title="인기 영화" movieData={popData} />
          <Movies title="높은 평점 영화" movieData={topData} />
          <Movies title="개봉 예정 영화" movieData={upData} />

          <Series title="방영 TV시리즈" tvData={onAirData} />
          <Series title="트렌드 TV시리즈" tvData={trdTvData} />
          <Series title="인기 TV시리즈" tvData={popTvData} />
          <Series title="높은 평점 TV시리즈" tvData={topTvData} />
        </>
      )}
    </>
  );
};
