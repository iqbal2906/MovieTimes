import axios from "axios";

const apiKey = "a30de5cd4546e069dc49d498fe2a5ff6";
const url = "https://api.themoviedb.org/3";
const categoryUrl = `${url}/genre/movie/list`;

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
