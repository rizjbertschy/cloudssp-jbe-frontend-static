import logo from './logo.png';
import Data from './Api';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={()=>Data()}>get Data</button>
      </header>
    </div>
  );
}

export default App;