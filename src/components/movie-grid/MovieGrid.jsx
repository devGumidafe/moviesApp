import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovieCard } from "../movie-card/MovieCard";
import { category, movieType, tmdbApi, tvType } from "../../api/tmdbApi";
import { OutlineButton } from "../buttons/Button";
import "../../scss/movie-grid.scss";
import { MovieSearch } from "../search/MovieSearch";

export const MovieGrid = (props) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPages] = useState(0);

  const { keyword } = useParams();

  useEffect(() => {
    const getList = async () => {
      let response = null;

      if (keyword === undefined) {
        const params = {};
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(movieType.upcoming, {
              params,
            });
            break;
          default:
            response = await tmdbApi.getTvList(tvType.popular, { params });
        }
      } else {
        const params = {
          query: keyword,
        };

        response = await tmdbApi.search(props.category, { params });
      }
      setMovies(response.results);
      setTotalPages(response.total_pages);
    };
    getList();
  }, [props.category, keyword]);

  const loadMore = async () => {
    let response = null;
    if (keyword === undefined) {
      const params = {
        page: page + 1,
      };
      switch (props.category) {
        case category.movie:
          response = await tmdbApi.getMoviesList(movieType.upcoming, {
            params,
          });
          break;
        default:
          response = await tmdbApi.getTvList(tvType.popular, { params });
      }
    } else {
      const params = {
        page: page + 1,
        query: keyword,
      };
      response = await tmdbApi.search(props.category, { params });
    }
    setMovies([...movies, ...response.results]);
    setPage(page + 1);
  };

  return (
    <>
      <div className="section mb-3">
        <MovieSearch category={props.category} keyword={keyword} />
      </div>
      <div className="movie-grid">
        {movies.length > 0 ? (
          movies.map((movie, i) => (
            <MovieCard category={props.category} movie={movie} key={i} />
          ))
        ) : (
          <h3>Lo sentimos no hay resultados...</h3>
        )}
      </div>
      {page < totalPage ? (
        <div className="movie-grid__loadmore">
          <OutlineButton className="small" onClick={loadMore}>
            Cargar más
          </OutlineButton>
        </div>
      ) : null}
    </>
  );
};
