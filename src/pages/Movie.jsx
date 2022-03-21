import React from "react";
import MovieList from "../components/MovieList";
import SearchBox from "../components/SearchBox";

export default function Movie() {
  const [movies, setMovies] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");

  async function getMovies(searchValue) {
    if (searchValue) {
      const res = await fetch(
        `http://www.omdbapi.com/?s=${searchValue}&apikey=2f2034db`
      );
      const data = await res.json();
      if (data.Search) {
        setMovies(data.Search);
      }
    } else {
      setSearchValue("");
      setMovies([]);
    }
  }

  React.useEffect(() => {
    getMovies(searchValue);
  }, [searchValue]);
  return (
    <div>
      <div className='row m-3'>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

      <div className='list'>
        <MovieList movies={movies} />
      </div>
    </div>
  );
}
