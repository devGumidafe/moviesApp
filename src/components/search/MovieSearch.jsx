import { useNavigate} from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { category} from "../../api/tmdbApi";
import { Button } from "../buttons/Button";
import { Input } from "../input/Input";

export const MovieSearch = (props) => {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState(props.keyword ? props.keyword : "");

  const goToSearch = useCallback(() => {
    if (keyword.trim().length > 0) {
      navigate(`/${category[props.category]}/search/${keyword}`);
    }
  }, [keyword, navigate, props.category]);

  useEffect(() => {
    const enterEvent = (e) => {
      e.preventDefault();

      if (e.keyCode === 13) {
        goToSearch();
      }
    };
    document.addEventListener("keyup", enterEvent);

    return () => {
      document.removeEventListener("keyup", enterEvent);
    };
  }, [keyword, goToSearch]);

  return (
    <div className="movie-search">
      <Input
        type="text"
        placeholder="Busca en goMovies..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <Button className="small" onClick={goToSearch}>
        Buscar
      </Button>
    </div>
  );
};
