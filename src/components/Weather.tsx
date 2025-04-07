import { useState } from "react";
import { getWeather } from "../services/weatherService";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError("Por favor, digite uma cidade.");
      return;
    }

    setLoading(true);
    setError("");
    setWeatherData(null); // Resetando os dados

    try {
      const data = await getWeather(city);
      setWeatherData(data);
    } catch (err) {
      setError("Cidade não encontrada.");
    }

    setLoading(false);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px", background: "#f0f0f0", borderRadius: "10px" }}>
      <h2>Consulta do Tempo</h2>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Digite uma cidade"
        style={{ padding: "10px", marginRight: "10px", borderRadius: "5px" }}
      />
      <button onClick={fetchWeather} style={{ padding: "10px", borderRadius: "5px", cursor: "pointer" }}>
        Buscar
      </button>

      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {weatherData && (
        <div>
          <h3>
            {weatherData.name}, {weatherData.sys.country}
          </h3>
          <p><strong>Temperatura:</strong> {weatherData.main.temp}°C</p>
          <p><strong>Condição:</strong> {weatherData.weather[0].description}</p>
          <p><strong>Umidade:</strong> {weatherData.main.humidity}%</p>
          <p><strong>Vento:</strong> {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
