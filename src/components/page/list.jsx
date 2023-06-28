import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../footer";

const List = ({ movies }) => {
  const img_url = "https://image.tmdb.org/t/p/w500";
  const [titles, setTitles] = useState("");
  return (
    <>
      <title>{titles ? "" : "Movie List | Kh Movie"}</title>
      {movies.length === 0 ? (
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
      ) : (
        <motion.div
          layout
          className=" w-[70%] mx-auto grid md:grid-cols-5 gap-x-5 gap-y-10 py-16"
        >
          <AnimatePresence>
            {movies.map((movies) => (
              <Link to={"/Detail/" + movies.id} key={movies.id}>
                <motion.div
                  layout
                  animate={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0 }}
                  exit={{ opacity: 0 }}
                  className=" h-[50vh] cursor-pointer group overflow-hidden"
                >
                  <img
                    src={img_url + movies.poster_path}
                    alt="movie"
                    className=" object-cover w-full md: rounded-lg h-[80%] md:h-[80%] group-hover:scale-105 transition duration-300 ease-in-out"
                  />
                  <h1 className="text-md md:text-sm mt-4 text-center">
                    {movies.title}
                  </h1>
                </motion.div>
              </Link>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
      <Footer />
    </>
  );
};

export default List;
