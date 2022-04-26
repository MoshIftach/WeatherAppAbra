import React from "react";
import Moment from "react-moment";

export const CurrentDayWeather = ({
                                      selectedDay,
                                      dayIndex,
                                      dayDate,
                                      dayIcon,
                                      dayMinTemp,
                                      dayMaxTemp,
                                      handleDaySelection
                                  }) => {
    return (
        <div
            className={`single-day ${selectedDay === dayIndex ? "selected" : ""}`}
            onClick={handleDaySelection}
        >
            <div className="flex-row bd-highlight m-2 ">
                <h6>
                    <Moment format="ddd">{dayDate}</Moment>
                </h6>
                <img
                    className="small-image"
                    src={`https://developer.accuweather.com/sites/default/files/${
                        dayIcon >= 10 ? dayIcon : "0" + dayIcon
                    }-s.png`}
                    alt="weather-icon"
                />
                <h6>{`${dayMaxTemp}°F`}</h6>
                <h6>{`${dayMinTemp}°F`}</h6>
            </div>
        </div>
    );
};
