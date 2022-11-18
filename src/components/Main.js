import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import { useDispatch, useSelector } from "react-redux";
import {
  getPopular,
  getMain,
  getTop,
  getUpcoming,
} from "../redux/features/mainSlicer";

import "swiper/css";
import "swiper/css/free-mode";

import { FreeMode } from "swiper";

// import { Carousel, Card } from "antd";
// import { BsFilm } from "react-icons/bs";

import { AiOutlinePlayCircle } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";
import ButtonCategory from "./ButtonCategory";

function Main() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopular());
    dispatch(getMain());
    dispatch(getTop());
    dispatch(getUpcoming());
    window.scroll(0, 0);
  }, []);

  const popular = useSelector((state) => state.popular.popular);
  const main = useSelector((state) => state.main.main.slice(0, 3));
  const top = useSelector((state) => state.top.top);
  const upcoming = useSelector((state) => state.upcoming.upcoming);

  return (
    <>
      {/* HERO SECTION */}

      <div
        id="carouselExampleIndicators"
        className="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active float-left w-full">
            <div className="absolute w-full h-screen bg-gradient-to-t from-[#0F182B]"></div>
            <img
              src={`https://image.tmdb.org/t/p/original/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg`}
              className="block w-full h-screen object-cover"
              alt="Thor: Love and Thunder"
            />
            <div className="absolute w-full top-[65%] text-center">
              <h1 className="text-5xl font-bold text-white">
                Thor: Love and Thunder
              </h1>
              <div className="flex pl-1 text-base justify-center mr-5">
                <BsFillStarFill className="text-yellow-500 mt-1" />
                <p className="text-white ml-2">{Math.round(6.8)} / 10</p>
              </div>
              <a href="https://www.youtube.com/watch?v=Go8nTmfrQd8&t">
                <button className="bg-transparent border-solid border-2 border-white text-white hover:border-transparent hover:bg-slate-500 font-bold py-2 px-5 rounded-lg inline-flex items-center transition-all duration-500">
                  <AiOutlinePlayCircle className="mr-2" />
                  <span>Watch Trailer</span>
                </button>
              </a>
            </div>
          </div>
          <div className="carousel-item float-left w-full">
            <div className="absolute w-full h-screen bg-gradient-to-t from-[#0F182B]"></div>
            <img
              src={`https://image.tmdb.org/t/p/original/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg`}
              className="block w-full h-screen object-cover"
              alt="Orphan: First Kill"
            />
            <div className="absolute w-full top-[65%] text-center">
              <h1 className="text-5xl font-bold text-white">
                Orphan: First Kill
              </h1>
              <div className="flex pl-1 text-base justify-center mr-5">
                <BsFillStarFill className="text-yellow-500 mt-1" />
                <p className="text-white ml-2">{Math.round(6.9)} / 10</p>
              </div>
              <a href="https://www.youtube.com/watch?v=_uX6of3vBu0&t">
                <button className="bg-transparent border-solid border-2 border-white text-white hover:border-transparent hover:bg-slate-500 font-bold py-2 px-5 rounded-lg inline-flex items-center transition-all duration-500">
                  <AiOutlinePlayCircle className="mr-2" />
                  <span>Watch Trailer</span>
                </button>
              </a>
            </div>
          </div>
          <div className="carousel-item float-left w-full">
            <div className="absolute w-full h-screen bg-gradient-to-t from-[#0F182B]"></div>
            <img
              src={`https://image.tmdb.org/t/p/original/7ZO9yoEU2fAHKhmJWfAc2QIPWJg.jpg`}
              className="block w-full h-screen object-cover"
              alt="Prey"
            />
            <div className="absolute w-full top-[65%] text-center">
              <h1 className="text-5xl font-bold text-white">Prey</h1>
              <div className="flex pl-1 text-base justify-center mr-5">
                <BsFillStarFill className="text-yellow-500 mt-1" />
                <p className="text-white ml-2">{Math.round(7.9)} / 10</p>
              </div>
              <a href="https://www.youtube.com/watch?v=wZ7LytagKlc&t">
                <button className="bg-transparent border-solid border-2 border-white text-white hover:border-transparent hover:bg-slate-500 font-bold py-2 px-5 rounded-lg inline-flex items-center transition-all duration-500">
                  <AiOutlinePlayCircle className="mr-2" />
                  <span>Watch Trailer</span>
                </button>
              </a>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* END HERO SECTION */}

      {/* NOW PLAYING */}

      <h1 className="mt-32 mx-11 text-center text-3xl text-slate-300">
        Now <span className="font-extrabold text-5xl">Playing</span>
      </h1>
      <div className="flex">
        {main.map((item, index) => (
          <div className="my-16 mx-6 bg-slate-700 py-5 px-6 rounded-xl">
            <div
              className="inline-block relative mx-4 overflow-hidden text-center"
              key={index}
            >
              <img
                className="w-full h-full cursor-pointer rounded-lg object-cover hover:scale-110 hover:shadow-2xl transition-all duration-500"
                src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                alt={item.title}
                onClick={() => navigate(`/detail/${item.id}`)}
              />
              <p className="text-white text-lg font-bold mt-4">{item.title}</p>
              <p className="text-white ml-2 italic">Release Date : </p>
              <p className="text-white ml-2 italic font-bold">{item.release_date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* END NOW PLAYING */}

      {/* GET MOVIES BY CATEGORY */}

      <div className="my-16 w-4/5 mx-auto flex justify-between items-center bg-slate-700 py-5 px-5 rounded-xl">
        <h1 className="text-center text-3xl text-slate-300">
          <span className="font-extrabold text-5xl">Category</span> Movies
        </h1>
        <ButtonCategory />
      </div>

      {/* GET MOVIES BY CATEGORY */}

      {/* POPULAR MOVIES */}

      <h1 className="mt-32 mx-11 text-center text-3xl text-slate-300">
        <span className="font-extrabold text-5xl">Popular</span> Movies
      </h1>
      <div className="my-16 mx-6 bg-slate-700 py-5 px-5 rounded-xl">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {popular.map((item, index) => (
            <SwiperSlide
              key={index}
              onClick={() => navigate(`/detail/${item.id}`)}
            >
              <div className="group w-full inline-block cursor-pointer relative overflow-hidden">
                <img
                  className="w-full h-[500px] rounded-lg object-cover"
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  alt={item.title}
                />
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center duration-500 rounded-lg group-hover:translate-y-0 group-hover:bg-black/75">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* END POPULAR MOVIES */}

      {/* TOP RATED MOVIES */}

      <h1 className="mt-32 mx-11 text-center text-3xl text-slate-300">
        <span className="font-extrabold text-5xl">Top Rated</span> Movies
      </h1>
      <div className="my-16 mx-6 bg-slate-700 py-5 px-5 rounded-xl">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {top.map((item, index) => (
            <SwiperSlide
              key={index}
              onClick={() => navigate(`/detail/${item.id}`)}
            >
              <div className="group w-full inline-block cursor-pointer relative overflow-hidden">
                <img
                  className="w-full h-[500px] rounded-lg object-cover"
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  alt={item.title}
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* END TOP RATED MOVIES */}

      {/* UPCOMING MOVIES */}

      <h1 className="mt-32 mx-11 text-center text-3xl text-slate-300">
        <span className="font-extrabold text-5xl">Upcoming</span> Movies
      </h1>
      <div className="my-16 mx-6 bg-slate-700 py-5 px-5 rounded-xl">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {upcoming.map((item, index) => (
            <SwiperSlide
              key={index}
              onClick={() => navigate(`/detail/${item.id}`)}
            >
              <div className="group w-full inline-block cursor-pointer relative overflow-hidden">
                <img
                  className="w-full h-[500px] rounded-lg object-cover"
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  alt={item.title}
                />
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group-hover:bg-black/75 group-hover:rounded-lg">
                  <div className="mt-5 text-center">
                    <p className="text-white text-lg font-bold">{item.title}</p>
                    <p className="text-white ml-2 italic">Release Date : </p>
                    <p className="text-white ml-2 italic">
                      {item.release_date}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* END UPCOMING MOVIES */}
    </>
  );
}

export default Main;
