import { AppRouter } from "./routers/AppRouter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "swiper/swiper.min.css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<AppRouter />} />
      </Routes>
    </Router>
  );
};
