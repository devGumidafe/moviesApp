import { AppRouter } from "./routers/AppRouter";
import { HashRouter } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import "swiper/swiper.min.css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";

export const App = () => {
  return (
    <HashRouter>
      <Header />
      <AppRouter />
      <Footer />
    </HashRouter>
  );
};
