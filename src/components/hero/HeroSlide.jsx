import { useState, useEffect } from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { tmdbApi, movieType } from "../../api/tmdbApi";
import { HeroSlideItem } from "./HeroSlideItem";
import { TrailerModal } from "../modal/TrailerModal";
import "../../scss/hero-slide.scss";

export const HeroSlide = () => {
  SwiperCore.use([Autoplay]);

  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });
        const { results } = response;
        setMovieItems(results.slice(0, 5));
      } catch (error) {
        throw error;
      }
    };
    getMovies();
  }, []);

  return (
    <div className="hero-slide">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
      >
        {movieItems.map((movie, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <HeroSlideItem
                movie={movie}
                className={`${isActive ? "active" : ""}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {movieItems.map((movie, i) => (
        <TrailerModal key={i} movie={movie} />
      ))}
    </div>
  );
};
