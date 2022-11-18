import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getSearch } from "../redux/features/searchSlicer";

import { BsFillStarFill } from "react-icons/bs";

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

  const data = useSelector((state) => state.search.search);

  return (
    <>
      <div className="Header">
        <div className="absolute w-full h-1/2 bg-gradient-to-t from-[#0F182B]"></div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5aecc44d-2a1f-4313-8399-98df20908b64/c79d7cea-0f2f-4b5c-9130-e3a74468be57/ID-id-20221114-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          className="block w-full h-[50vh] object-cover"
          alt="backdrop"
        />
        <div className="absolute w-3/4 top-[25%] p-5 ml-5">
          <h1 className="text-4xl font-bold text-white mx-11">
            Search Result "{search}"
          </h1>
        </div>
      </div>
      <div className="grid gap-6 grid-cols-3 mx-10 mb-10 mt-12">
        {data?.length ? (
          data.length >= 0 &&
          data.map((item, index) => (
            <div
              className="group w-full cursor-pointer relative overflow-hidden"
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
