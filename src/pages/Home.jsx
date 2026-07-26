import { useEffect, useState } from "react";
import { getPopularMovies, getMoviesByGenre, searchMovies } from "../services/api";
import MovieCard from "../components/MovieCard";
import HeroSlider from "../components/HeroSlider";
import GenreList from "../components/GenreList";
import SearchBar from "../components/SearchBar";
import Loading from "../components/Loading";

function Home() {
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  // 1. Fetch popular movies on load
  useEffect(() => {
    setLoading(true);
    getPopularMovies()
      .then((data) => setMovies(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false)); // Stops loading
  }, []);

  // 2. Fetch movies by genre
  const handleGenre = (id) => {
    setSelectedGenre(id);
    
    
    getMoviesByGenre(id)
      .then((data) => setMovies(data))
      .catch((err) => console.log(err))
       // Stops loading
  };

  // 3. Search movies
  useEffect(() => {
    if (search.trim() === "") return;

    
    searchMovies(search)
      .then((data) => {
        console.log(data);
        setMovies(data);
      })
      .catch((err) => console.log(err))
      ; // Stops loading
  }, [search]);

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-500">
      <HeroSlider movies={movies} />
      <GenreList selectedGenre={selectedGenre} onSelect={handleGenre} />

      <div className="p-6">
        <SearchBar search={search} setSearch={setSearch} />
        <h2 className="text-white text-3xl font-bold mb-6">Popular Movies</h2>

        <div className="w-[80%] m-[10%] mt-0 grid
grid-cols-1
sm:grid-cols-2
md:grid-cols-3
lg:grid-cols-4
xl:grid-cols-5
gap-6  justify-center align-center">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
