import axios from "axios";

const apiKey = "a30de5cd4546e069dc49d498fe2a5ff6";
const url = "https://api.themoviedb.org/3";
const categoryUrl = `${url}/genre/movie/list`;
const trendingUrl = `${url}/trending/movie/day`;

export const fetchCategories = async () => {
  try {
    const { data } = await axios.get(categoryUrl, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: 1,
      },
    });

    const categoryData = data["genres"].map((genre) => ({
      id: genre["id"],
      name: genre["name"],
    }));
    return categoryData;
  } catch (error) {}
};

export const fetchTrending = async () => {
  try {
    const { data } = await axios.get(trendingUrl, {
      params: {
        api_key: apiKey,
      },
    });

    const posterUrl = "https://image.tmdb.org/t/p/original";
    const trendingData = data["results"].map((trend) => ({
      id: trend["id"],
      poster: posterUrl + trend["poster_path"],
      rating: trend["vote_average"],
      title: trend["title"],
      year: trend["release_date"].slice(0, 4),
      genre: trend["genre_ids"],
      overview: trend["overview"],
    }));
    return trendingData;
  } catch (error) {}
};
