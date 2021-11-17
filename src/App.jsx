import { AppRoutes } from "./routers/AppRoutes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

import "swiper/swiper.min.css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";

export const App = () => {
  return (
    <Router>
      <Footer />
      <AppRoutes />
      <Header />
    </Router>
  );
};
