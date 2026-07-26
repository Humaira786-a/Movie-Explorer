import MovieCard from "./MovieCard";

function SimilarMovies({ movies }) {

  return (

    <div className="max-w-7xl mx-auto px-8 mt-20 pb-20">

      <h2 className="text-4xl font-bold mb-8">
        Similar Movies
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

        {movies.slice(0,5).map(movie=>(

          <MovieCard
            key={movie.id}
            movie={movie}
          />

        ))}

      </div>

    </div>

  );

}

export default SimilarMovies;