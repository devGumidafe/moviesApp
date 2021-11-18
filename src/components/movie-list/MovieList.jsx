import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';
import { tmdbApi, category } from "../../api/tmdbApi";
import { apiConfig } from "../../api/apiConfig";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "../buttons/Button";
import { MovieCard } from "../movie-card/MovieCard";
import "../../scss/movie-list.scss";

export const MovieList = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = {};

      if (props.type !== "similar") {
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(props.type, { params: {} });
            break;
          default:
            response = await tmdbApi.getTvList(props.type, { params: {} });
        }
      } else {
        response = await tmdbApi.similar(props.category, props.id);
      }

      setMovies(response.results);
    };

    getList();
  }, []);

  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
        {movies.map((movie, i) => (
          <SwiperSlide key={i}>
            <MovieCard movie={movie} category={props.category}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

/* MovieList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}
 */
