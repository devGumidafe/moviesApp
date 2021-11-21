import { Link } from "react-router-dom";
import { OutlineButton } from "../components/buttons/Button";
import { HeroSlide } from "../components/hero/HeroSlide";
import { MovieList } from "../components/movie-list/MovieList";
import { category, movieType, tvType } from "../api/tmdbApi";

export const Home = () => {
  return (
    <>
      <HeroSlide />
      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2 className="section__title">Trending Películas</h2>
            <Link to="/movie">
              <OutlineButton>Ver más</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2 className="section__title">Top Películas</h2>
            <Link to="/movie">
              <OutlineButton>Ver más</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2 className="section__title">Trending Series</h2>
            <Link to="/tv">
              <OutlineButton>Ver más</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.popular} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2 className="section__title">Top Series</h2>
            <Link to="/tv">
              <OutlineButton>Ver más</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated} />
        </div>
      </div>
    </>
  );
};
