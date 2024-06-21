import logo from './logo.png';
import './App.css';
import { getWeather } from './Api';
import { GetWeatherTest } from './ApiTest';
import Counter from './Counter'
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      weather: []
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter />
          <button onClick={()=>getWeather()}>get Weather</button>
          <button onClick={()=>this.setState({weather: JSON.parse(localStorage.getItem("weather"))})}>aktualisieren</button>
          {this.state.weather.length > 0 && <>
          <table>
            
              {Object.keys(this.state.weather[0]).map(key => {
                return <>
                  <tr>
                    <th>{key}</th>
                  </tr>
                  {this.state.weather.map(entry => {
                    return <>
                      <tr>
                        <td>{entry[key]}</td>
                      </tr>
                    </>
                  })}
                </>
              })}
            <tr>
              <th></th>
            </tr>
          </table>
        </>}
        <button onClick={()=>GetWeatherTest()}>get Weather Console</button>
        </header>
        
      </div>
    );
  }
}

export default App;
