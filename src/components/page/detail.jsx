import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../css/App.css";

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [trailerKey, setTrailerKey] = useState("");
  const [displayTrailer, setDisplaytrailer] = useState(false);
  const [titles, setTitles] = useState("");
  const getMoive = async () => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=893352da07655c5b4a7ce64069e1d341&&append_to_response=videos`;
    const res = await fetch(url);
    const movies = await res.json();
    // console.log(movies);
    setDetail(movies);
    setTitles("");
  };
  useEffect(() => {
    getMoive();
  }, []);
  const playTrailer = () => {
    const trailer = detail.videos.results.find(
      (video) => video.name === "Official Trailer"
    );
    setTrailerKey(trailer.key);
    setDisplaytrailer(!displayTrailer);
  };
  const img_url = "https://image.tmdb.org/t/p/w500";

  return detail ? (
    <div>
      <title>{detail.title + " | Kh Movie"}</title>
      <img
        src={img_url + detail.poster_path}
        alt="Movie Backdrop"
        className=" fixed w-full h-screen object-cover blur-sm -z-10"
      />
      <div className=" w-[70%] mx-auto ">
        <div className="flex justify-between">
          <div className=" mt-32">
            <AnimatePresence>
              <motion.div
                layout
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                exit={{ opacity: 0, x: 0 }}
              >
                <img
                  src={img_url + detail.poster_path}
                  alt="Movie poster"
                  className=" w-32 object-cover rounded-lg md:w-80"
                />
              </motion.div>
            </AnimatePresence>
            <button className="mt-4 rounded-lg px-3 py-2" onClick={playTrailer}>
              {displayTrailer ? "បិត Trailer" : "មើល Trailer"}
            </button>
            {displayTrailer && (
              <iframe
                width="420"
                height="315"
                allowFullScreen
                src={`https://www.youtube.com/embed/${trailerKey}`}
                className="mt-2 w-80 h-52 rounded-lg "
                frameborder="0"
              ></iframe>
            )}
          </div>
          <div className=" fixed right-0 backdrop-blur-lg h-screen w-[50vw] top-0 flex flex-col p-10 md:overflow-hidden overflow-y-scroll ">
            <motion.div layout>
              <h1 className="mt-20 text-lg md:text-2xl font-bold tracking-wide">
                ចំណងជើង: {detail.title}
              </h1>
            </motion.div>
            <p className="mt-2">Rate: {detail.vote_average}</p>
            <p className="mt-2">
              {detail.status}: {detail.release_date}{" "}
            </p>

            <hr className="mt-2" />
            <p className="mt-2 text-sm"> {detail.overview}</p>
            <hr className="mt-2" />
            {detail.genres?.map((gen) => (
              <p className="mt-2 text-sm" key={gen.id}>
                {gen.name}
              </p>
            ))}
            <h1 className="text-md mt-2 uppercase font-bold">
              Product Company
            </h1>
            {detail.production_companies?.map((com) => (
              <p className="mt-2 text-sm" key={com.id}>
                {com.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <>
      <div
        loading
        className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center"
      >
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
        <h2 className="text-center text-white text-xl font-semibold">
          Loading...
        </h2>
        <p className="w-1/3 text-center text-white">
          This may take a few seconds, please don't close this page.
        </p>
      </div>
    </>
  );
};

export default Detail;
