import React from 'react';
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data, { Cairns as cairns, Londres, Denver } from './data.js';

function App() {
  // console.log(ciudad);
  return (
    <div className="App">
      <div>
        {/* <Card
          max={cairns.main.temp_max}
          min={cairns.main.temp_min}
          name={cairns.name}
          img={cairns.weather[0].icon}
          onClose={() => alert(cairns.name)}
        /> */}
      </div>
      <hr />
      <div>
        <Cards
          cities={data}
        />
      </div>
      <hr />
      <div>
        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
        />
      </div>
    </div>
  );
}

export default App;
