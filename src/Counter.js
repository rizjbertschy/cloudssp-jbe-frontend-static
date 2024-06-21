import axios from "axios";
import React,{ useState } from "react";

function Counter() {
    const [data, setData] = useState([]);
    axios.get(`https://cloudssp-jbe-backend.azurewebsites.net/weatherforecast`)
      .then(res => {
        console.log(res.data)
        setData(res.data)
      })
      .catch (err => {
        console.log(err);
      });
      return (
        <div className="container1">
          <div className="container2">
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

function CounterTest() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Du hast mich {count} mal geklickt</p>
            <button onClick={() => setCount(count + 1)}>Klick mich</button>
        </div>
    );
};

export default Counter;