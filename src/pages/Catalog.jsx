import { useParams } from "react-router-dom";
import {category as cat} from "../api/tmdbApi";
import { MovieGrid } from "../components/movie-grid/MovieGrid";
import { PageHeader } from "../components/page-header/PageHeader";

export const Catalog = () => {
  const { category } = useParams();

  return (
    <>
      <PageHeader>
          {category === cat.movie ? "Películas" : "Series"}
          </PageHeader>

          <div className="container">
              <div className="section mb-3">
                  <MovieGrid category={category}/>
              </div>
          </div>
    </>
  );
};
