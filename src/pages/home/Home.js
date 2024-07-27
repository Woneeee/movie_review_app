import { useEffect, useState } from "react";
import { nowPlaying, popular, topRated, trending, upcoming } from "../../api";
import { Loading } from "../../components/Loading";
import { MainBanner } from "./components/MainBanner";
import "swiper/css";
import { Movies } from "./components/Movies";

export const Home = () => {
  const [trdData, setTrdData] = useState();
  const [nowData, setNowData] = useState();
  const [popData, setPopData] = useState();
  const [topData, setTopData] = useState();
  const [upData, setUpData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results: trdResults } = await trending();
        const { results: nowResults } = await nowPlaying();
        const { results: popResult } = await popular();
        const { results: topResult } = await topRated();
        const { results: upResult } = await upcoming();

        setTrdData(trdResults);
        setNowData(nowResults);
        setPopData(popResult);
        setTopData(topResult);
        setUpData(upResult);
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
  // console.log(isLoading);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <MainBanner data={trdData[0]} />

          <Movies title="상영 영화" movieData={nowData} />
          <Movies title="트렌드 영화" movieData={trdData} />
          <Movies title="인기 영화" movieData={popData} />
          <Movies title="평점 높음" movieData={topData} />
          <Movies title="개봉 예정" movieData={upData} />
        </>
      )}
    </>
  );
};
