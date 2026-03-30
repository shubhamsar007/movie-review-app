import axios from "axios";

const API_KEY = "a5019293";

export const searchMovie = (title: string) => {
  return axios.get(
    `https://www.omdbapi.com/?t=${title}&apikey=${API_KEY}`
  );
};