import React, { useState } from 'react';
import Welcome from './Components/Welcome';

const api = {
  key: "89d162a00d18dbfdc8e4e806bd7453c5",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [displayWeather, setDisplayWeather] = useState('');
  const [symbol, setSymbol] = useState('');
  const [displayStatus, setDisplayStatus] = useState(1);

 function fetchForcast() {
  fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
  .then(res => res.json())
  .then(result => {
    setWeather(result);
    setQuery('');
    if(result.cod !== '404'){
      setDisplayStatus(0);
      setDisplayWeather((Math.round(result.main.temp)));
      setSymbol('F');
    }
  });
 }

  const search = evt => {
    if (evt.key === "Enter") {
      if(query !== ''){
        fetchForcast();
        setDisplayStatus(0);
      }
    }
  }

  const fTempHandler = evt => {
    if(weather !== '' && weather.cod !== '404'){
      setSymbol('F');
      setDisplayWeather((Math.round(weather.main.temp)));
    }
    else {
     // setGreeting('');
    }
  };

  const cTempHandler = evt => {
    if(weather !== '' && weather.cod !== '404'){
      setSymbol('C');
      const calcWeather = Math.round((weather.main.temp-32)/1.8000);
      setDisplayWeather(calcWeather);
    }
    else {
      //setGreeting('');
    }
  };

  return (
    <>
    <Welcome className={(displayStatus !== 0) ? '' : 'hide'} />
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className={(displayStatus !== 0) ? 'hide' : ''}>
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
        ) : <h4 className="not-found">{(weather.message)}. Try city name, state, country</h4>}
        </div>

        <hr />
        
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