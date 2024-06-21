import axios from "axios";
import { useState } from "react";

export function GetWeatherTest() {
  Get("weatherforecast")
}

function Get(url) {
    const [data, setData] = useState([]);
    axios.get(`https://cloudssp-jbe-backend.azurewebsites.net/` + url)
      .then(res => {
        console.log(res.data)
        setData(res.data)
      })
      .catch (err => {
        console.log(err);
      });
      return (
        <div className="container">
          <div className="mt-3">
            <h3>Fetched Data</h3>
            <table>
              <thead>
                <tr>
                  <th>date</th>
                  <th>summary</th>
                  <th>temperatureC</th>
                  <th>temperatureF</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((weather, index) => {
                    return <tr key={index}>
                      <td>{weather.date}</td>
                      <td>{weather.summary}</td>
                      <td>{weather.temperatureC}</td>
                      <td>{weather.temperatureF}</td>
                    </tr>
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      )
}