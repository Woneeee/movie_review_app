import styled from "styled-components";
import { spacing } from "../../../GlobalStyled";

import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { W500_URL } from "../../../constant/imgUrl";

const Container = styled.div`
  padding: 50px 0 50px ${spacing.side};

  @media screen and (max-width: 1000px) {
    padding: 40px 0 40px ${spacing.side};
  }

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

  @media screen and (max-width: 1000px) {
    font-size: 33px;
    margin-bottom: 25px;
  }

  @media screen and (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 376px) {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

const params = {
  slidesPerView: 7.3,
  spaceBetween: 15,
  breakpoints: {
    1300: {
      slidesPerView: 7.3,
      spaceBetween: 15,
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

export const Series = ({ title, tvData }) => {
  return (
    <Container>
      <STitle>{title}</STitle>

      <Swiper {...params}>
        {tvData.map((data) => (
          <SwiperSlide key={data.id}>
            <Link to={`/tvdetail/${data.id}`}>
              <img src={W500_URL + data.poster_path} alt={data.title} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
