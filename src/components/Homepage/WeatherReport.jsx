import React, { useEffect, useState } from "react";
import  { adToBs, bsToAd, calculateAge } from "@sbmdkl/nepali-date-converter";
import axios from "axios";


function WeatherStatus(){
    const [city, setCity] = useState("kathmandu");
    const [weatherData, setWeatherData] = useState(null);
    // const apikey = process.env.WEATHER_APP_API_KEY ;
    const apikey = "69307cbd903b76b743f037946dbc8465" ;
  
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(()=>{
        fetchWeatherData();
    },[])
  
    const handleSubmit = (event) => {
      event.preventDefault();
      fetchWeatherData();
    };
  
    return (
      <div>
        {/* <form onSubmit={handleSubmit}>                  //to input city name
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
          <button type="submit">Check</button>
        </form> */}
        {weatherData && (
          <div>
            <h2>{weatherData.name}</h2>
            <p>{weatherData.weather[0].description}</p>
            <p>Temperature: {weatherData.main.temp}</p>
          </div>
        )}
      </div>
    );
  };

function ADtoBS(){
    const [time,setTime] =useState(new Date());
    const [nepalidate, setNepalidate]= useState();

    function convert(str) {
        var date = new Date(str),
          mnth = ("0" + (date.getMonth() + 1)).slice(-2),
          day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
      }
    
    useEffect(()=>{
        console.log(time)
        setInterval(()=>setTime(new Date()),1000)
        try {
            let adDate= convert(time);
            const bsDate = adToBs(adDate);
            setNepalidate(bsDate);
            // console.log(bsDate); 
        } catch (e) {
            console.log(e.message);
        }   
    },[])

// adToBs('YYYY-MM-DD') - convert AD to BS date
// bsToAd('YYYY-MM-DD') - convert BS to AD date
// calculateAge('YYYY-MM-DD') - calculate age from BS date.
    return(
        <>
        <div className=' my-1 p-3 '>
        <span>
            <p>{nepalidate} BS</p>
            <h2>{time.toLocaleTimeString()}</h2>
            </span>
        </div>
        
        </>
    )
}

export {ADtoBS};

export default WeatherStatus;
