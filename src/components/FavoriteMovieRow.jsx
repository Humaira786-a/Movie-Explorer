import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useFavorites } from "../contexts/FavoritesContext";

function FavoriteMovieRow({ movie }) {

    const { removeFavorite } = useFavorites();

    return (

        <div
            className="
            flex
            items-center
            justify-between
            bg-gray-900
            rounded-xl
            p-4
            mb-4
            dark:shadow-black/40
            "
        >

            {/* Left Side */}
            <Link
                to={`/movie/${movie.id}`}
                className="flex items-center gap-4"
            >

                <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                    className="w-24 rounded-lg"
                />

                <div>

                    <h2 className="text-white text-xl font-semibold">
                        {movie.title}
                    </h2>

                    <p className="text-yellow-400">
                        ⭐ {movie.vote_average}
                    </p>

                    <p className="text-gray-400 text-sm">
                        {movie.release_date}
                    </p>

                </div>

            </Link>


            {/* Right Side */}
            <button

                onClick={() => removeFavorite(movie.id)}

                className="
                flex
                items-center
                gap-2
                bg-red-600
                hover:bg-red-700
                text-white
                px-4
                py-2
                rounded-lg
                transition
                "

            >

                <FaHeart />

                Remove

            </button>

        </div>

    );

}

export default FavoriteMovieRow;