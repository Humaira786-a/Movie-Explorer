import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3";


// Get popular movies for Hero Slider + Home page
export const getPopularMovies = async () => {

    const response = await axios.get(
        `${BASE_URL}/movie/popular`,
        {
            params: {
                api_key: API_KEY,
                language: "en-US",
                page: 1
            }
        }
    );

    return response.data.results;

};



// Get single movie details
export const getMovieDetails = async (id) => {

    const response = await axios.get(
        `${BASE_URL}/movie/${id}`,
        {
            params: {
                api_key: API_KEY,
                language: "en-US"
            }
        }
    );

    return response.data;

};



// Get all movie genres
export const getGenres = async () => {

    const response = await axios.get(
        `${BASE_URL}/genre/movie/list`,
        {
            params: {
                api_key: API_KEY,
                language: "en-US"
            }
        }
    );

    return response.data.genres;

};



// Get movies by selected genre
export const getMoviesByGenre = async (genreId) => {

    const response = await axios.get(
        `${BASE_URL}/discover/movie`,
        {
            params: {
                api_key: API_KEY,
                language: "en-US",
                with_genres: genreId,
                sort_by: "popularity.desc"
            }
        }
    );

    return response.data.results;

};



// Search movies by title
export const searchMovies = async (query) => {

    const response = await axios.get(
        `${BASE_URL}/search/movie`,
        {
            params: {
                api_key: API_KEY,
                language: "en-US",
                query: query
            }
        }
    );

    return response.data.results;

};
export const addToFavorites = async (
  accountId,
  sessionId,
  movieId,
  favorite = true
) => {

  const response = await axios.post(
    `${BASE_URL}/account/${accountId}/favorite`,
    {
      media_type: "movie",
      media_id: movieId,
      favorite: favorite
    },
    {
      params: {
        session_id: sessionId
      }
    }
  );

  return response.data;
};


export const getSimilarMovies = async (id) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/similar`,
    {
      params: {
        api_key: API_KEY,
        language: "en-US",
      },
    }
  );

  return response.data.results;
};

export const getMovieVideos = async (id) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/videos`,
    {
      params: {
        api_key: API_KEY,
        language: "en-US",
      },
    }
  );

  return response.data.results;
};
export const getMovieCredits = async (id) => {

  const response = await axios.get(
    `${BASE_URL}/movie/${id}/credits`,
    {
      params: {
        api_key: API_KEY,
        language: "en-US",
      },
    }
  );

  return response.data.cast;
};