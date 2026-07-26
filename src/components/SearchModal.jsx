import { useEffect, useState } from "react";
import { searchMovies } from "../services/api";
import MovieCard from "./SearchMovieCard";

function SearchModal({ onClose }) {
    const [query, setQuery] = useState("");
const [movies, setMovies] = useState([]);
const [loading, setLoading] = useState(false);

useEffect(() => {
  if (!query.trim()) {
    setMovies([]);
    return;
  }

  const timer = setTimeout(async () => {
    try {
      setLoading(true);

      const data = await searchMovies(query);

      setMovies(data);

    } catch (error) {
      console.log(error);

    } finally {
      setLoading(false);
    }
  }, 500);

  return () => clearTimeout(timer);

}, [query]);

  return (
    <div className="fixed inset-0 h-screen  bg-white dark:bg-gray-950/80 backdrop-blur-md z-50 flex justify-center items-center">
      <div
  className="
    bg-white dark:bg-gray-950/40
    rounded-3xl
    backdrop-blur-md
    w-[100%]
    max-w-7xl
    h-[85vh]
    p-8
    flex
    flex-col
    
  "
>
        <h1 className="text-3xl font-bold dark:text-white">
          Search Movies
        </h1>
<button
  onClick={onClose}
  className="
     absolute
          top-4
          right-4
          bg-red-600
          text-white
          rounded-full
          w-10
          h-10
          hover:bg-red-700
          z-10
  "
>
  ✕
</button>
        <input
  type="text"
  placeholder="Search movies..."
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  className="
    w-[50%]
    dark:text-amber-50
    mt-6
    p-4
    rounded-xl
    outline-none
    bg-gray-200 dark:bg-gray-700

  "
/>
{loading && (
  <p className="text-center mt-6">
    Loading...
  </p>
)}
<div
    className="
        flex-1
        overflow-auto
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-6
    "
>

    {movies.map(movie=>(
        <MovieCard
            key={movie.id}
            movie={movie}
        />
    ))}

</div>
      </div>
    </div>
  );
}

export default SearchModal;