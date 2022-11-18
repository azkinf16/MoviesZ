import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ButtonCategory from "./ButtonCategory";

import { useDispatch, useSelector } from "react-redux";
import { getMainCategory } from "../redux/features/mainCategorySlicer";

import { BsFillStarFill } from "react-icons/bs";

function MainCategory() {
  const { cat, genreId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";

  useEffect(() => {
    dispatch(getMainCategory(genreId));
    window.scroll(0, 0);
  }, [genreId]);

  const category = useSelector((state) => state.mainCategory.mainCategory);

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
          <h1 className="text-5xl font-bold text-white mx-11">
            Category by "{cat[0].toUpperCase() + cat.substring(1)}"
          </h1>
        </div>
      </div>
      <div className="my-24 w-4/5 mx-auto flex justify-between items-center bg-slate-700 py-5 px-5 rounded-xl">
        <h1 className="text-center text-3xl text-slate-300">
          <span className="font-extrabold text-5xl">Category</span> Movies
        </h1>
        <ButtonCategory />
      </div>
      <div className="grid gap-6 grid-cols-4 mx-12">
        {category &&
          category.map((item, index) => (
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
    </>
  );
}

export default MainCategory;
