import { Link } from "react-router-dom";

function SearchMovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="flex gap-4 justify-center mt-5 m-5 bg-gray-100 dark:bg-gray-800 rounded-xl p-3 hover:bg-gray-200 dark:bg-gray-700 transition">

        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
              : "/no-poster.png"
          }
          alt={movie.title}
          className="w-20 h-28 object-cover rounded-lg dark:text-white"/>

        <div className="flex flex-col justify-center">
          <h2 className="font-bold text-lg dark:text-white">
            {movie.title}
          </h2>

          <p className="text-yellow-600">
            ⭐ {movie.vote_average}
          </p>

          <p className="text-gray-500 text-sm">
            {movie.release_date}
          </p>
        </div>

      </div>
    </Link>
  );
}

export default SearchMovieCard;