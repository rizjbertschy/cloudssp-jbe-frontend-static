import logo from './logo.svg';
import './App.css';
import { getWeather } from './Api';
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
        </header>
        
      </div>
    );
  }
}

export default App;
