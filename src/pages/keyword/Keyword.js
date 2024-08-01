import { Link, useParams } from "react-router-dom";
import { keyDetail, keywordRelate } from "../../api";
import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";
import { Title } from "../../components/Title";
import { W500_URL } from "../../constant/imgUrl";
import styled from "styled-components";
import { spacing } from "../../GlobalStyled";

const STitle = styled.div`
  padding: 100px ${spacing.side};
  text-align: center;
  font-size: 60px;
  font-weight: 600;
  @media screen and (max-width: 1000px) {
    padding: 100px ${spacing.moside} 80px ${spacing.moside};
    font-size: 40px;
  }
`;

const Container = styled.div`
  padding: 0 ${spacing.side};
  h3 {
    font-size: 25px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 1000px) {
    padding: 0 ${spacing.moside};
    h3 {
      font-size: 20px;
    }
  }
`;

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 20px;
  column-gap: 15px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 1.5vw;
    column-gap: 1vw;
  }
`;

const Con = styled.div``;

export const Keyword = () => {
  const [keyData, setKeyData] = useState();
  const [keyNameData, setKeyNameData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id: keyword_id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const { results } = await keywordRelate(keyword_id);
        const { name } = await keyDetail(keyword_id);

        setKeyData(results);
        setKeyNameData(name);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [keyword_id]);

  // console.log(keyData);
  // console.log(keyNameData);
  // console.log(isLoading);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Title titleName={keyNameData} />

          <STitle>{keyNameData} 이야기</STitle>

          <Container>
            <h3>꼭 챙겨보세요! 회원님을 위한 컨텐츠! 😄</h3>

            <ConWrap>
              {keyData.map((key) => (
                <Link to={`/moviedetail/${key.id}`} key={key.id}>
                  <Con>
                    <img src={W500_URL + key.backdrop_path} alt={key.title} />
                  </Con>
                </Link>
              ))}
            </ConWrap>
          </Container>
        </>
      )}
    </>
  );
};
