import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY; // Pegando a chave do .env
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getWeather = async (city: string) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric", // Celsius
        lang: "pt", // Português
      },
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar o clima:", error);
    throw error;
  }
};
