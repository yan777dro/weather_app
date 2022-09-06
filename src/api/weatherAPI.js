import axios from "axios";

const API = process.env.REACT_APP_API;
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchWeather = async (query) => {
  const { data } = await axios.get(API, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });

  return data;
};