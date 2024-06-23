import React, {useEffect, useState} from 'react';
import {cities} from '../../const/cityName';

import axios from "axios";
import SingleCardComponents from './SingleCard';

// import  {UseWeatherAppContext} from '../../Context/Context';

const ChooseCity = ()=>{
    
const [city, setCity] = useState("kathmandu")
const [lat, setLat] = useState("27.700769")
const [lng, setLng] = useState("85.300140")
const [daily, setDaily] = useState("")

    const handleChange = (e)=>{
        const selectedCity = cities.filter(
            (city) => city.city === e.target.value
        )[0]
        console.log('selectedCity', city);
        console.log('selectedlat', city.lat);
        console.log('selectedlon', city.lng);
        setCity(selectedCity);
        setLat(city.lat);
        setLng(city.lng);
    }

    // API VAR
    const apikey = '34480b98aa332da53123a0ac63a4ea9d';
  
    // const ULR = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}`;
    
    
    const fetchData = async () => {
        try {
           await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${apikey}`
          ).then((data)=>{
            setDaily(data.data.list);
            
            // console.log('data with week', data.data);
            // console.log('data ', data.data.list);
        })
       
        } catch (error) {
          console.log(error);
        }
      };
    
    
    useEffect(()=>{
       fetchData();
        // console.log(city)
    }, [city])

    return (
        <>
            <div >
            <div className='pl-2'>
                <select  defaultValue={city} onChange={handleChange}>
                    {
                        cities && cities.length > 0  && cities.map((city)=>{
                            return(
                                <option key={`${city.city}`} value={city.city}>
                                    {city.city} 
                                </option>
                            )
                        })
                    }
                </select>
                </div>

               <div>
                <ul className='flex overflow-x-scroll'>                    
               {
                       daily && daily.length > 0 ? daily.map((item, index)=>{
                        if (index < 40){
                            return (
                                <SingleCardComponents  item={item} key={index}  />
                                )
                        }
                        return '';
                            
                        }) : ''
                    }
                </ul>
               </div>
            </div>
        </>
    )
}

export default ChooseCity;