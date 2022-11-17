// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import AllMovies from "./pages/AllMovies";
import Category from "./pages/Category";

import DetailMovie from "./pages/DetailMovie";
import Home from "./pages/Home";
import Search from "./pages/Search";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/detail/:id" element={<DetailMovie />}/>
        <Route path="/category/:cat/:genreId" element={<Category />}/>
        <Route path="/search/:search" element={<Search />}/>
        <Route path="/all-movies" element={<AllMovies />} /> 
      </Routes>
    </div>
  );
}

export default App;
