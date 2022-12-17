import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Header } from "../header/Header";
import HomePage from "../pages/HomePage/HomePage";
// import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Pokedex from "../pages/PokedexPage/PokedexPage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";


function Router() {
  return (
    <BrowserRouter>
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="*" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
