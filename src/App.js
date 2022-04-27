import React, { useState,useEffect } from "react";
import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "./components/DropDown";
import { WeeklyWeather } from "./components/WeeklyWeather";


const App =()=> {

  const [locationApi,setLocationApi] = useState([]);

  const [selectedCity,setSelectedCity] = useState("");

  const [weatherForcast,setWeatherForcast] = useState([]);

  const [selectedDay,setSelectedDay] = useState("0");


  useEffect(() => {
     getLocations();
  }, [])

  const getForcast = async value => {
    const forecast = await axios.get(
        `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${value}?apikey=gnAuSabdsDkVLyrgGl8UjG4Oq5nQJnYB&details=true`
    );
    setWeatherForcast(forecast.data.DailyForecasts);
  };

  const getLocations = async () => {
    const locations = await axios.get(
        `https://dataservice.accuweather.com/locations/v1/topcities/150?apikey=gnAuSabdsDkVLyrgGl8UjG4Oq5nQJnYB`
    );
    const cityCountry = [];
    for (let location of locations.data) {
      let label = location.AdministrativeArea.EnglishName;
      let value = location.Country.EnglishName;
      let code = location.Key;
      cityCountry.push({ label, value, code });
    }
    setLocationApi(cityCountry)
  };

  const handleOnChange = (city, code) => {
    setSelectedCity(city);
    getForcast(code);
  };

  const handleDaySelection = e => {
    setSelectedDay(e);
  };


    return (
        <div className="App">
          <h1 className="m-5">Weather Forecast App</h1>
          <br/>
          <h3>Abra</h3>
          <Dropdown
              locations={locationApi}
              handleOnChange={handleOnChange}
          />

          {Object.keys(weatherForcast).length === 0 ? null : (
              <WeeklyWeather
                  handleDaySelection={handleDaySelection}
                  selectedDay={selectedDay}
                  selectedCity={selectedCity}
                  weatherData={weatherForcast}
              />
          )}
        </div>
    );
}

export default App;
