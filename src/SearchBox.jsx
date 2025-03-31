import { useState } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;


export default function SearchBox({updateInfo}){
    
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    

    let getWeatherInfo =async ()=>{
       try{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        console.log(jsonResponse);
        let result ={
            city:city,
            temp:jsonResponse.main.temp,
            tempMax:jsonResponse.main.temp_max,
            tempMin:jsonResponse.main.temp_min,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
       }
       catch(e){
        throw e;
       };
    };
    
    

    let handleChange =(event)=>{
        setCity(event.target.value);
    };
    let handleSubmit=async(event)=>{
        
        try{
            event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        }catch(e){
            setError(true);
        }
    }

    return (
        <div className='Searchbox'>
            <form onSubmit={handleSubmit} >
            <TextField id="city" label="City Name" variant="outlined" required value={city}
            onChange={handleChange}/>
            <br />
            <br />

            <Button variant="contained" type='submit' >
        Search
      </Button>
      {error && <p style={{color:"red"}}>No data available!</p> }
            </form>
        </div>
    )
}
