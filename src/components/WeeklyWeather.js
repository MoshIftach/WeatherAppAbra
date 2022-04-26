import React from "react";
import { CurrentDayWeather } from "./CurrentDayWeather";
import Moment from "react-moment";

export const WeeklyWeather = ({
                                  weatherData, selectedCity, selectedDay, handleDaySelection}) => {
    return (
        <div className="container col-6 mx-auto mt-2 gray  rounded text-white ">
            {weatherData[0] ? (
                <div className="d-flex p-2 bd-highlight justify-content-center top-weather">
                    <div className="flex-row bd-highlight">
                        <h4>{selectedCity}</h4>
                        <Moment format="dddd">{weatherData[selectedDay].Date}</Moment>

                        <div className="flex-row bd-highlight">
                            <img
                                src={`https://developer.accuweather.com/sites/default/files/${
                                    weatherData[selectedDay].Day.Icon >= 10
                                        ? weatherData[selectedDay].Day.Icon
                                        : "0" + weatherData[selectedDay].Day.Icon
                                }-s.png`}
                                alt="weather-icon"
                            />
                            <p>{weatherData[selectedDay].Day.IconPhrase}</p>
                        </div>
                    </div>
                </div>
            ) : null}

            <div className="d-flex p-2 bd-highlight justify-content-center bottom-weather">
                {weatherData.map((day, index) => (
                    <CurrentDayWeather
                        selectedDay={selectedDay}
                        dayIndex={index}
                        key={day.EpochDate}
                        dayDate={day.Date}
                        dayIcon={day.Day.Icon}
                        dayMaxTemp={day.Temperature.Maximum.Value}
                        dayMinTemp={day.Temperature.Minimum.Value}
                        handleDaySelection={() => handleDaySelection(index)}
                    />
                ))}
            </div>
        </div>
    );
};
