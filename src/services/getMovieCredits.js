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