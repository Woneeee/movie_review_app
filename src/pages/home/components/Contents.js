import styled from "styled-components";
import { spacing } from "../../../GlobalStyled";
import { W500_URL } from "../../../constant/imgUrl";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

const Container = styled.div`
  padding: 50px 0 50px ${spacing.side};

  @media screen and (max-width: 768px) {
    padding: 30px 0 30px ${spacing.moside};
  }

  @media screen and (max-width: 376px) {
    padding: 15px 0 15px ${spacing.moside};
  }
`;

const STitle = styled.div`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    font-size: 25px;
    margin-bottom: 15px;
  }

  @media screen and (max-width: 376px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

const params = {
  slidesPerView: 7.3,
  spaceBetween: 20,
  breakpoints: {
    1024: {
      slidesPerView: 7.3,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 5.3,
      spaceBetween: 15,
    },
    320: {
      slidesPerView: 3.3,
      spaceBetween: 10,
    },
  },
};

export const Contents = ({ title, movieData }) => {
  return (
    <Container>
      <STitle>{title}</STitle>

      <Swiper {...params}>
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
