import { Link } from "react-router-dom";
import { Button } from "../buttons/Button";
import { category } from "../../api/tmdbApi";
import { apiConfig } from "../../api/apiConfig";
import "../../scss/movie-card.scss";

export const MovieCard = (props) => {
  const movie = props.movie;
  const link = `/${category[props.category]}/${movie.id}`;
  const bg = apiConfig.w500Image(movie.poster_path || movie.backdrop_path);

  return (
    <Link to={link}>
      <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
        <Button>
          <i className="bx bx-play"></i>
        </Button>
      </div>
      <h3>{movie.title || movie.name}</h3>
    </Link>
  );
};
