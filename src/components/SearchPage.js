import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getSearch } from "../redux/features/searchSlicer";

function SearchPage() {
  const { search } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";
  const noData =
    "https://financialadvisors.com/media/no-images/nodata-found.png";

  
  useEffect(() => {
    dispatch(getSearch(search));
    window.scroll(0, 0);
  }, [search]);

  const data = useSelector((state) => state.search.search)

  return (
    <>
      <div className="Header">
        <div className="absolute w-1/2 h-[50vh] bg-gradient-to-r from-black"></div>
        <img
          src="https://images.unsplash.com/photo-1574267432553-4b4628081c31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
          className="block w-full h-[50vh] object-cover"
          alt=""
        />
        <div className="absolute w-1/2 top-[25%] p-5 ml-5">
          <h1 className="text-5xl font-bold text-white">
            All Movies "{search[0].toUpperCase() + search.substring(1)}"
          </h1>
        </div>
      </div>
      <div className="mt-24 mb-12 mx-11">
        <h1 className="text-3xl font-bold">
          Search Result "{search[0].toUpperCase() + search.substring(1)}"
        </h1>
      </div>
      <div className="grid gap-6 grid-cols-3 mx-10 mb-10">
        {data?.length ? (
          data.length >= 0 &&
          data.map((item, index) => (
            <div
              className="w-full cursor-pointer relative p-2"
              onClick={() => navigate(`/detail/${item.id}`)}
              key={index}
            >
              <img
                className="w-full h-[630px] rounded-lg"
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
          ))
        ) : (
          <div className="flex mt-16">
            <img src={noData} />
            <img src={noData} />
            <img src={noData} />
          </div>
        )}
      </div>
    </>
  );
}

export default SearchPage;
