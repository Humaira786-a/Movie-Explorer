import { useFavorites } from "../contexts/FavoritesContext";
import FavoriteMovieRow from "../components/FavoriteMovieRow";

function Favorites() {

  const { favorites } = useFavorites();

  return (

    <div className="min-h-screen bg-white dark:bg-gray-950
dark:bg-gray-950
transition-colors
duration-500 p-8">

    <h1 className="text-black dark:text-white text-4xl font-bold mb-8">
        ❤️ My Favorites
    </h1>

    {favorites.length === 0 ? (

        <p className="text-gray-400">
            No favorite movies yet.
        </p>

    ) : (

        favorites.map(movie => (

            <FavoriteMovieRow
                key={movie.id}
                movie={movie}
            />

        ))

    )}

</div>
  );

}

export default Favorites;