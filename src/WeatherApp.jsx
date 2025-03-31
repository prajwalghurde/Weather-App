import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo]=useState({
    city:"Pune",
    "feelsLike": 17.42,
    "humidity": 33,
    "temp": 18.64,
    "tempMax": 18.64,
    "tempMin": 18.64,
    "weather": "few clouds"
    });

    let updateInfo =(newInfo) =>{
        setWeatherInfo(newInfo);
    }
    
    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather app</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
};