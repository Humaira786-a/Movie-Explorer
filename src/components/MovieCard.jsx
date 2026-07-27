import { Link } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function MovieCard({ movie }) {

//favriote section feature
    const {
  favorites,
  addFavorite,
  removeFavorite,
} = useFavorites();


const isFavorite = favorites.some(
  (item) => item.id === movie.id
);
const handleFavorite = () => {

  if (isFavorite) {
    removeFavorite(movie.id);
  } else {
    addFavorite(movie);
  }
};


  return (

    <div className="bg-gray-800 rounded-xl hover:shadow-black-700
hover:shadow-2xl hover:-translate-y-2
transition-all overflow-hidden pb-2">

    <Link to={`/movie/${movie.id}`}>

        <img
  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
  alt={movie.title}
  className="
    w-full
    h-70
    object-cover
  "
/>

        <div className="p-4">

            <h2 className="text-white text-xl">{movie.title}</h2>

            <p className="text-white">⭐ {movie.vote_average}</p>

        </div>

    </Link>
<div><button className="ml-10"
        onClick={handleFavorite}
    >
        {isFavorite ? (
    <FaHeart className="text-red-500" />
) : (
    <FaRegHeart className="text-white" />
)}
    </button></div>
    

</div>

  );

}

export default MovieCard;
