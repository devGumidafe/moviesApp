import { useNavigate } from "react-router-dom";
import { apiConfig } from "../../api/apiConfig";
import { tmdbApi, category } from "../../api/tmdbApi";
import { Button, OutlineButton } from "../buttons/Button";

export const HeroSlideItem = (props) => {
  const navigate = useNavigate();

  const movie = props.movie;
  const background = apiConfig.originalImage(
    movie.backdrop_path ? movie.backdrop_path : movie.poster_path
  );

  const setModalActive = async () => {
    const modal = document.querySelector(`#modal_${movie.id}`);

    const videos = await tmdbApi.getVideos(category.movie, movie.id);

    if (videos.results.length > 0) {
      const videSrc = "https://www.youtube.com/embed/" + videos.results[0].key;
      modal
        .querySelector(".modal__content > iframe")
        .setAttribute("src", videSrc);
    } else {
      modal.querySelector(".modal__content").innerHTML = "No trailer";
    }

    modal.classList.toggle("active");
  };

  return (
    <div
      className={`hero-slide__item ${props.className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <h2 className="title">{movie.title}</h2>
          <div className="overview">{movie.overview}</div>
          <div className="btns">
            <Button onClick={() => navigate(`/movie/${movie.id}`)}>
              Watch now
            </Button>
            <OutlineButton onClick={setModalActive}>Watch trailer</OutlineButton>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={apiConfig.w500Image(movie.poster_path)} alt="" />
        </div>
      </div>
    </div>
  );
};
