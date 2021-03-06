import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Detail } from "../pages/detail/Detail";
import { Catalog } from "../pages/Catalog";
import { NotFound } from "../pages/NotFound";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":category/search/:keyword" element={<Catalog />} />
      <Route path=":category/:id" element={<Detail />} />
      <Route path=":category" element={<Catalog />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
