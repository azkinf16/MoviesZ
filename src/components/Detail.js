import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";

import { FreeMode } from "swiper";

import ReactPlayer from "react-player";

// import { AiOutlinePlayCircle } from "react-icons/ai";
import { BsFillStarFill, BsArrowRightCircleFill } from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";
import {
  getCasts,
  getDetails,
  getReviews,
  getVideos,
} from "../redux/features/detailSlicer";

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const noPicture =
    "https://upload.wikimedia.org/wikipedia/commons/f/f9/No-image-available.jpg";
  const noData =
    "https://financialadvisors.com/media/no-images/nodata-found.png";

  useEffect(() => {
    dispatch(getDetails(id));
    dispatch(getCasts(id));
    dispatch(getReviews(id));
    dispatch(getVideos(id));
    window.scroll(0, 0);
  }, [id]);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  const details = useSelector((state) => state.detail.details);
  const cast = useSelector((state) => state.cast.casts);
  const review = useSelector((state) => state.review.reviews);
  const video = useSelector((state) => state.video.videos);

  console.log(video);

  return (
    <>
      {/* HERO SECTION */}

      <div className="header">
        <div className="absolute w-full h-screen bg-gradient-to-t from-[#0F182B]"></div>
        <img
          src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`}
          className="block w-full h-screen object-cover"
          alt={details.title}
        />
        <div className="absolute w-full top-[23%] flex justify-evenly">
          <div className="">
            <img
              src={`https://image.tmdb.org/t/p/original/${details.poster_path}`}
              className="block w-[320px] object-cover rounded-2xl transition-all duration-500 hover:scale-110 hover:rounded-2xl hover:shadow-2xl cursor-pointer"
              alt={details.title}
            />
          </div>
          <div className="max-w-md">
            <h1 className="text-3xl font-bold text-white drop-shadow-2xl">
              {details.title}
            </h1>
            <div className="flex">
              {details.genres &&
                details.genres.map((item, index) => {
                  return (
                    <p
                      className="text-white mr-2 font-light bg-slate-500 py-1 pl-3 pr-2 rounded-xl"
                      key={index}
                    >
                      {item.name}
                    </p>
                  );
                })}
            </div>
            <p className="text-white pt-4 pl-1 font-semibold">
              Release at {details.release_date}
            </p>
            <p className="text-white text-base pl-1">
              {truncateString(details.overview, 400)}
            </p>
            <div className="flex pt-2 pl-1 ">
              <BsFillStarFill className="text-yellow-500 mt-1" />
              <p className="text-white ml-4">
                {Math.round(details.vote_average)} / 10
              </p>
            </div>
            <a
              href={
                details.imdb_id
                  ? `https://www.imdb.com/title/${details.imdb_id}`
                  : ""
              }
            >
              <button className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-5 ml-1 mt-4 rounded-full inline-flex items-center transition-all duration-500">
                <span>Get More</span>
                <BsArrowRightCircleFill className="ml-2 mt-1" />
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* END HERO SECTION */}

      {/* TRAILER SECTION */}

      <h1 className="mt-20 mx-11 text-3xl text-slate-300 font-bold text-center">
        Trailer
      </h1>
      <div className="my-16 mx-11 bg-slate-700 py-5 px-5 rounded-xl">
        <ReactPlayer
          width="100%"
          height="40rem"
          controls={true}
          url={
            video === undefined
              ? `https://www.youtube.com/watch?v=undefined`
              : `https://www.youtube.com/watch?v=${video.key}`
          }
        />
      </div>

      {/* END TRAILER SECTION */}

      {/* CAST SECTION */}

      <h1 className="mt-20 mx-11 text-3xl text-slate-300 font-bold text-center">
        Cast
      </h1>
      <div className="py-16 mx-6">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {cast.length ? (
            cast.length >= 0 &&
            cast.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="mt-5 px-5 w-full inline-block cursor-pointer relative p-2 hover:scale-105 hover:drop-shadow-2xl transition-all duration-500">
                  <img
                    className="w-full h-full rounded-lg"
                    src={
                      item.profile_path
                        ? `https://image.tmdb.org/t/p/original/${item.profile_path}`
                        : noPicture
                    }
                    alt={item.name}
                  />
                  <h1 className="text-slate-200 pt-4 font-bold text-xl">
                    {item.name}
                  </h1>
                  <h2 className="text-xs text-slate-500">{item.character}</h2>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <img src={noData} className="mx-auto" />
          )}
        </Swiper>
      </div>

      {/* END CAST SECTION */}

      {/* REVIEW SECTION */}

      <div className="pt-8 mx-11 pb-7 text-center">
        <h1 className="mx-11 text-center text-3xl text-slate-300">
          What People <span className="font-extrabold text-4xl">Says ?</span>
        </h1>
      </div>
      <div className="mx-10 pt-10 pb-10 flex justify-center">
        {review.length ? (
          review.length >= 0 &&
          review.map((item, index) => (
            // <div className="max-w-lg h-full" key={index}>
            //   <div className="border border-gray-400 rounded-lg p-4 flex flex-col justify-between leading-normal">
            //     <div className="mb-2 pt-3">
            //       <img
            //         className="w-20 h-20 rounded-full mx-auto"
            //         src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png"
            //         alt="avatar"
            //       />
            //       <div className="text-gray-900 font-bold text-xl my-3 text-center">
            //         <p>{item.author}</p>
            //       </div>
            //       <p className="text-sm text-gray-600 flex">
            //         <BsFillStarFill className="text-yellow-500 mt-1" />
            //         <p className="ml-2">{item.author_details.rating} / 10</p>
            //       </p>
            //       <p className="text-gray-700 text-xs text-justify">
            //         {item.content}
            //       </p>
            //     </div>
            //     <p className="text-gray-400 text-xs pt-4">
            //       Release at : {item.created_at}
            //     </p>
            //   </div>
            // </div>
            <div class="flex justify-center" key={index}>
              <div class="max-w-lg">
                <div class="block p-4 rounded-lg shadow-lg bg-slate-700 mx-4 h-48 relative hover:scale-105 hover:drop-shadow-2xl transition-all duration-500">
                  <p className="text-sm text-slate-300 flex">
                    <BsFillStarFill className="text-yellow-500 mt-1" />
                    <p className="ml-2">{item.author_details.rating} / 10</p>
                  </p>
                  <p class="text-slate-200 font-light mb-6 text-xs text-justify max-w-lg">
                    {truncateString(item.content, 200)}..<a href={item.url}>For more..</a>
                  </p>
                  <div className="absolute bottom-1 mt-10">
                    <p class="font-semibold text-lg text-slate-200">
                      {item.author}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <img src={noData} />
        )}
      </div>
    </>
  );
}

export default Detail;
