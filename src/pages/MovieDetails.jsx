import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  getMovieDetails,
  getMovieVideos,
  getMovieCredits,
  getSimilarMovies,
} from "../services/api";

import Loading from "../components/Loading";
import MovieHero from "../components/MovieHero";
import Overview from "../components/Overview";
import CastSection from "../components/CastSection";
import SimilarMovies from "../components/SimilarMovies";
import TrailerModal from "../components/TrailerModal";

function MovieDetails() {

  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [trailer, setTrailer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {

    async function fetchMovie() {

      try {

        setLoading(true);

        const details = await getMovieDetails(id);
        const similar = await getSimilarMovies(id);
        const videos = await getMovieVideos(id);
        const credits = await getMovieCredits(id);

        setMovie(details);
        setSimilarMovies(similar);
        setCast(credits);

        setTrailer(
          videos.find(
            video =>
              video.site === "YouTube" &&
              video.type === "Trailer"
          )
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    }

    fetchMovie();

  }, [id]);

  if (loading) return <Loading />;

  if (!movie)
    return (
      <h1 className="text-center mt-20 text-3xl">
        Movie Not Found
      </h1>
    );

  return (
    <div className="
bg-white dark:bg-gray-950

transition-colors
duration-500
min-h-screen">

      <MovieHero
    movie={movie}
    trailer={trailer}
    onWatchTrailer={() => setShowTrailer(true)}
/>

      
      <CastSection
        cast={cast}
      />

      <SimilarMovies
        movies={similarMovies}
      />
{
showTrailer && (

<TrailerModal
    trailer={trailer}
    onClose={() => setShowTrailer(false)}
/>

)
}
    </div>
  );

}

export default MovieDetails;