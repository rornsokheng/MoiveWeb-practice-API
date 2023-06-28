import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Detail from "./page/detail";
import List from "./page/list";
function App() {
  const [movies, setMovie] = useState([]);
  const [keyWord, setKeyWord] = useState("");
  const getAllMoive = async (keyWord) => {
    const url = keyWord
      ? "https://api.themoviedb.org/3/search/movie"
      : "https://api.themoviedb.org/3/discover/movie";
    const key = "893352da07655c5b4a7ce64069e1d341";
    const res = await fetch(`${url}?api_key=${key}&&query=${keyWord}`);
    const movies = await res.json();
    setMovie(movies.results);
    // console.log(movies);
  };
  useEffect(() => {
    getAllMoive(keyWord);
  }, []);
  return (
    <>
      <nav className=" flex justify-center items-center fixed z-20 w-full mt-9">
        <input
          placeholder="ស្វែងរករឿង"
          className=" rounded-full px-2 py-1"
          value={keyWord}
          onChange={(e) => setKeyWord(e.target.value)}
        />
        <button
          className=" rounded-full px-2 py-1 ml-3"
          onClick={() => {
            getAllMoive(keyWord);
            setKeyWord("");
          }}
        >
          ស្វែងរក
        </button>
      </nav>
      <div className="pt-10">
        <Routes>
          <Route path="/" element={<List movies={movies} />} />
          <Route path="/Detail/:id" element={<Detail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
