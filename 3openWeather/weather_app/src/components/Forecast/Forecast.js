import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';

const Forecast = () => {
let [responseObj, setResponseObj] = useState({});
   function getForecast() {
    fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=oakland", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": "a5f3794ca9msh5810a8c7ee6f887p17dbc9jsn8e4771044fc1"
        }
    })
    .then(response => response.json())
    .then(response => {
        setResponseObj(response)
    })
   }
   return (
    <div>
        <h2>Find Current Weather Conditions</h2>
        <button onClick={getForecast}>Get Forecast</button>
        <Conditions
            responseObj={responseObj}/>
       </div>
   )
}
export default Forecast;