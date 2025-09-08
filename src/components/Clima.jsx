import { useState, useEffect } from "react";
import  Style  from "../styles/clima.module.css";

function Weather() {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchWeather = async () => {
        try {
        const response = await fetch (`${process.env.NEXT_PUBLIC_API_URL}/api/weather`);

        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        
        const data = await response.json();

        setWeather(data);
        }  catch (error) {
        console.error("Error al obtener clima:", error);
        } finally {
        setLoading(false);
        }
    };

    fetchWeather();
    }, []);

    if (loading) return <p>Cargando clima...</p>;
    if (!weather) return <p>No se pudo cargar el clima</p>;

    return (
    <div className={Style.climaWidget}>
        <h2>Clima en {weather.name}</h2>
        <p>{weather.weather[0].description}</p>
        <p>🌡️ {weather.main.temp}°C</p>
        <p>💨 {weather.wind.speed} km/h</p>
    </div>
    );
}

export default Weather;
