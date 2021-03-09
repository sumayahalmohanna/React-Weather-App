import React, { useState } from 'react';
//import Welcome from './Components/Welcome';

const api = {
  key: "89d162a00d18dbfdc8e4e806bd7453c5",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [displayWeather, setDisplayWeather] = useState('');
  const [symbol, setSymbol] = useState('');

 function fetchForcast() {
  fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
  .then(res => res.json())
  .then(result => {
    setWeather(result);
    setDisplayWeather((Math.round(result.main.temp)));
    setSymbol('F');
  });
 }

  const search = evt => {
    if (evt.key === "Enter") {
      if(query !== ''){
        fetchForcast();
      }
    }
  }

  const fTempHandler = evt => {
    if(query !== ''){
      setSymbol('F');
      setDisplayWeather((Math.round(weather.main.temp)));
    }
  };

  const cTempHandler = evt => {
    if(query !== ''){
      setSymbol('C');
      const calcWeather = Math.round((weather.main.temp-32)/1.8000);
      setDisplayWeather(calcWeather);
    }
  };

  return (
    <>
    
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
      {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{new Date().toDateString()}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {displayWeather}°{symbol}
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
        ) : (weather.message)}

        
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Enter city name.."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        
        <label className="radio-box">
                    <input
                        className="radio-btn"
                        type="radio"
                        name="units"
                        value="F"
                        onChange={fTempHandler}
                        />
                    Fahrenheit
                </label>
                <label className="radio-box">
                    <input
                        className="radio-btn"
                        type="radio"
                        name="units"
                        value="C"
                        onChange={cTempHandler}
                        />
                    Celcius
                </label>
      </main>
      
    </div>
    </>
  );
}

export default App;