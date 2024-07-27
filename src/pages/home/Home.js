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
import { Contents } from "./components/Contents";

export const Home = () => {
  const [trdData, setTrdData] = useState();
  const [nowData, setNowData] = useState();
  const [popData, setPopData] = useState();
  const [topData, setTopData] = useState();
  const [upData, setUpData] = useState();
  const [airingData, setAiringData] = useState();
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
  // console.log(airingData);
  // console.log(onAirData);
  // console.log(isLoading);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <MainBanner data={trdData[0]} />

          <Contents title="상영 영화" movieData={nowData} />
          <Contents title="트렌드 영화" movieData={trdData} />
          <Contents title="인기 영화" movieData={popData} />
          <Contents title="높은 평점 영화" movieData={topData} />
          <Contents title="개봉 예정 영화" movieData={upData} />
          <Contents title="트렌드 TV시리즈" movieData={trdTvData} />
          <Contents title="방영 TV시리즈" movieData={onAirData} />
          <Contents title="유명 TV시리즈" movieData={popTvData} />
          <Contents title="높은 평점 TV시리즈" movieData={topTvData} />
        </>
      )}
    </>
  );
};
