import styled from "styled-components";
import { spacing } from "../../../GlobalStyled";
import { W500_URL } from "../../../constant/imgUrl";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "../css/swiperStyle.css";

const Container = styled.div`
  padding: 50px 0 50px ${spacing.side};

  @media screen and (max-width: 1000px) {
    padding: 40px 0 40px ${spacing.side};
  }

  @media screen and (max-width: 768px) {
    padding: 30px 0 30px ${spacing.moside};
  }

  @media screen and (max-width: 500px) {
    padding: 10px 0 10px ${spacing.moside};
  }
`;

const STitle = styled.div`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 30px;

  @media screen and (max-width: 1000px) {
    font-size: 33px;
    margin-bottom: 25px;
  }

  @media screen and (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 500px) {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 13px;
  }
`;

const params = {
  slidesPerView: 7.3,
  spaceBetween: 20,
  breakpoints: {
    1300: {
      slidesPerView: 7.3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5.3,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 4.3,
      spaceBetween: 13,
    },
    320: {
      slidesPerView: 3.3,
      spaceBetween: 10,
    },
  },
};

export const Movies = ({ title, movieData }) => {
  return (
    <Container>
      <STitle>{title}</STitle>

      <Swiper {...params}>
        {movieData.map((data) => (
          <SwiperSlide key={data.id}>
            <Link to={`/moviedetail/${data.id}`}>
              <img src={W500_URL + data.poster_path} alt={data.title} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
