import React from "react";

const Forecast = ({ forecast }) => {
    return (
        <div className="Forecast">
            <h3>{forecast.date}</h3>
            <p>Summary {forecast.summary}</p>
            <p>Temperatur C° {forecast.temperatureC}</p>
        </div>
    );
}

export default Forecast;