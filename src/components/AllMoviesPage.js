import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../redux/features/allMoviesSlicer";

function AllMoviesPage() {
  const [page, setPage] = useState();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const API_KEY = "ae4dbdc73a2bf042cb271a0b322631d5";

  const [filter, setFilter] = useState({
    api_key: API_KEY,
    include_adult: false,
    page: `${page}`,
  });

  const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";

  const handlePageChange = (page) => {
    setPage(page);
    setFilter({ ...filter, page: page });
  };

  useEffect(() => {
    dispatch(getAllMovies(page));
    window.scroll(0, 0);
  }, [page]);

  const allMovies = useSelector((state) => state.allMovies.allMovies);

  const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      primary: {
        main: "#0971f1",
        darker: "#053e85",
      },
      neutral: {
        main: "#64748B",
        contrastText: "#fff",
      },
    },
  });

  return (
    <>
      <div className="Header">
        <div className="absolute w-full h-1/2 bg-gradient-to-t from-[#0F182B]"></div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5aecc44d-2a1f-4313-8399-98df20908b64/c79d7cea-0f2f-4b5c-9130-e3a74468be57/ID-id-20221114-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          className="block w-full h-[50vh] object-cover"
          alt="backdrop"
        />
        <div className="absolute w-1/2 top-[25%] p-5 ml-5">
          <h1 className="text-5xl font-bold text-white mx-11">All Movies</h1>
        </div>
      </div>
      <div className="mt-24 mx-11 flex items-end justify-between ">
        <h1 className="text-4xl font-bold text-white">Result of All Movies</h1>
        <ThemeProvider theme={theme}>
          <Stack spacing={2}>
            <Pagination
              count={5}
              variant="outlined"
              color="neutral"
              onChange={(e) => handlePageChange(e.target.textContent)}
              hideNextButton
              hidePrevButton
            />
          </Stack>
        </ThemeProvider>
      </div>
      <div className="grid gap-6 grid-cols-4 mx-9 mt-12">
        {allMovies.map((item, index) => (
          <div
            className="w-full cursor-pointer relative p-2"
            onClick={() => navigate(`/detail/${item.id}`)}
            key={index}
          >
            <img
              className="w-full h-[520px] rounded-lg"
              src={
                item.poster_path
                  ? `https://image.tmdb.org/t/p/original/${item.poster_path}`
                  : unavailable
              }
              alt={item.name}
            />
            <div className="absolute top-0 left-0 w-full h-full hover:bg-black/50 opacity-0 hover:opacity-100 text-white rounded-lg">
              <div className="flex justify-center items-end h-3/4 text-center">
                <div>
                  <p className="white-space-normal text-xs md:text-sm font-bold">
                    {item.title}
                  </p>
                  <p className="white-space-normal text-xs md:text-sm font-bold mt-2">
                    {Math.round(item.vote_average)} / 10
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AllMoviesPage;
