import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetail, Search, PageNotfound } from "../pages";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/movies/popular" element={<MovieList />} />
        <Route path="/movies/top" element={<MovieList />} />
        <Route path="/movies/upcoming" element={<MovieList />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<PageNotfound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
