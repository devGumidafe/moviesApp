import { useState, useEffect } from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { tmdbApi, category, movieType, tvType } from "../../api/tmdbApi";
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
        setMovieItems(results.slice(1, 4));
      } catch (error) {
        console.log(error);
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
        // autoplay={{delay: 3000}}
      >
        {movieItems.map((movie, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <HeroSlideItem
                movie={movie}
                className={`${isActive ? 'active' : ''}`}
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
