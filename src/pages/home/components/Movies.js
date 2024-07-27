import styled from "styled-components";
import { spacing } from "../../../GlobalStyled";
import { W500_URL } from "../../../constant/imgUrl";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

const Container = styled.div`
  padding: 100px 0 0 ${spacing.side};
`;

const STitle = styled.div`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const Movies = ({ title, movieData }) => {
  return (
    <Container>
      <STitle>{title}</STitle>

      <Swiper spaceBetween={20} slidesPerView={7.3}>
        {movieData.map((data) => (
          <SwiperSlide key={data.id}>
            <Link to={`/detail/${data.id}`}>
              <img src={W500_URL + data.poster_path} alt={data.title} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
