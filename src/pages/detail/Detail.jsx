import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { tmdbApi } from "../../api/tmdbApi";
import { apiConfig } from "../../api/apiConfig";
import { CastList } from "./CastList";
import { VideoList } from "./VideoList";
import { MovieList } from "../../components/movie-list/MovieList";
import "../../scss/detail.scss";

export const Detail = () => {
  const { category, id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(category, id, { params: {} });
      setMovie(response);
      window.scrollTo(0, 0);
    };
    getDetail();
  }, [category, id]);

  return (
    <>
        {
            movie && (
                <>
                    <div className="banner" style={{backgroundImage: `url(${apiConfig.originalImage(movie.backdrop_path || movie.poster_path)})`}}></div>
                    <div className="mb-3 movie-content container">
                        <div className="movie-content__poster">
                            <div className="movie-content__poster__img" style={{backgroundImage: `url(${apiConfig.originalImage(movie.poster_path || movie.backdrop_path)})`}}></div>
                        </div>
                        <div className="movie-content__info">
                            <h1 className="title">
                                {movie.title || movie.name}
                            </h1>
                            <div className="genres">
                                {
                                    movie.genres && movie.genres.slice(0, 5).map((genre, i) => (
                                        <span key={i} className="genres__item">{genre.name}</span>
                                    ))
                                }
                            </div>
                            <p className="overview">{movie.overview}</p>
                            <div className="cast">
                                <div className="section__header">
                                    <h2>Reparto</h2>
                                </div>
                                <CastList id={movie.id}/>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="section mb-3">
                            <VideoList id={movie.id}/>
                        </div>
                        <div className="section mb-3">
                            <div className="section__header mb-2">
                                <h2>Similares</h2>
                            </div>
                            <MovieList category={category} type="similar" id={movie.id}/>
                        </div>
                    </div>
                </>
            )
        }
    </>
);
}
