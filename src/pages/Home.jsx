import { Link } from "react-router-dom";
import { OutlineButton } from "../components/buttons/Button";
import { HeroSlide } from "../components/hero/HeroSlide";

export const Home = () => {
  return (
    <>
      <HeroSlide />
      <div className="section mb-3">
        <div className="section__header mb-2">
          <h2 className="section__title">Popular Movies</h2>
          <Link to="/movie">
          <OutlineButton>View more</OutlineButton>
          </Link>
        </div>
      </div>
    </>
  );
};
