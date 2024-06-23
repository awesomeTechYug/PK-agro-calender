import React, { useState } from 'react';
import dayjs from "dayjs";


const SingleCardComponents = ({item, className, onClick})=>{

    const weekdayIndex = dayjs.unix(item.dt).day();
    const WEEKDAYS = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
  
    //   console.log('single card', item)
    return (
        <>
            <div className='px-2'>
            <li key={item.moonrise}onClick={onClick} >
                <img  alt="PK"
                // src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                src={`./weather-icon/${item.weather[0].icon}@2x.png`} 
                        />
                <span >{WEEKDAYS[weekdayIndex].slice(0, 3)}</span>
                <span > {Math.round(item.main.temp_min - 273.15)  }°C</span> <br />
                <span className=' text-xs'>{item.dt_txt.slice(11, 16)}</span>
            </li>
            </div>
        </>
    )
}

export default SingleCardComponents;