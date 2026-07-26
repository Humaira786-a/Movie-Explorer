import Overview from "./Overview";

function MovieHero({
    movie,
    trailer,
    onWatchTrailer,
}) { 
  return (
    <>
      {/* Backdrop */}
      <div className="relative h-[70vh]">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent dark:bg-gradient-to-t dark:from-black via-white/30 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 -mt-48 relative z-10">

        <div className="flex flex-col lg:flex-row gap-10">

          {/* Poster */}
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-80 rounded-2xl shadow-2xl"
          />

          {/* Information */}
          <div className="flex-1">

            <h1 className="text-5xl font-bold">
              {movie.title}
            </h1>

            <div className="flex flex-wrap gap-6 mt-6 text-lg">

              <p className="text-yellow-500">
                ⭐ {movie.vote_average.toFixed(1)}
              </p>

              <p>📅 {movie.release_date}</p>

              <p>⏱ {movie.runtime} min</p>

            </div>

            {/* Genres */}
            <div className="flex flex-wrap gap-3 mt-8">

              {movie.genres.map((genre) => (

                <span
                  key={genre.id}
                  className="bg-red-600 text-white px-4 py-2 rounded-full"
                >
                  {genre.name}
                </span>

              ))}

            </div>

            {/* Trailer */}
            {trailer && (

              <button
  onClick={() => {
    console.log("Button clicked");
    console.log(onWatchTrailer);
    onWatchTrailer();
  }}
  className="inline-block mt-8 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl"
>
  ▶ Watch Trailer
</button>

            )}
            <Overview overview={movie.overview} />



          </div>

        </div>

      </div>
    </>
  );
}

export default MovieHero;