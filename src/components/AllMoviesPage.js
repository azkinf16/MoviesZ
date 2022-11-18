import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";

import { Pagination } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../redux/features/allMoviesSlicer";

import { BsFillStarFill } from "react-icons/bs";

function AllMoviesPage() {
  const [current, setCurrent] = useState(1);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";

  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };

  useEffect(() => {
    dispatch(getAllMovies(current));
    window.scroll(0, 0);
  }, [current]);

  const allMovies = useSelector((state) => state.allMovies.allMovies);

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
      <div className="grid gap-6 grid-cols-4 mx-9 mt-20">
        {allMovies.map((item, index) => (
          <div
            className="group w-full cursor-pointer relative overflow-hidden"
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
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group-hover:bg-black/75 group-hover:rounded-lg">
              <div className="flex justify-center items-end h-3/4 text-center">
                <div>
                  <p className="text-white text-xs md:text-sm font-bold">
                    {item.title}
                  </p>
                  <div className="flex pl-1 text-base justify-center mr-5">
                    <BsFillStarFill className="text-yellow-500 mt-1" />
                    <p className="text-white ml-2">
                      {Math.round(item.vote_average)} / 10
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-20 w-full text-center">
        <Pagination current={current} onChange={onChange} total={50} />
      </div>
    </>
  );
}

export default AllMoviesPage;
