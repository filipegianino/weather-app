import React, { ChangeEvent } from "react";
// css
import style from './WeatherApp.module.css'

import search_icon from '../Assets/search.png'
import clear_icon from '../Assets/clear.png'
import cloud_icon from '../Assets/cloud.png'
import drizzle_icon from '../Assets/drizzle.png'
import humidity_icon from '../Assets/humidity.png'
import rain_icon from '../Assets/rain.png'
import snow_icon from '../Assets/snow.png'
import wind_icon from '../Assets/wind.png'


const WeatherApp = () => {

    let api_key = "7021e5d590b724f4b227c958ef6253bd";

    const search = async () => {
const element = document.getElementsByClassName("cityInput") as unknown as HTMLTextAreaElement
if(element.value === "") {
    return 0;
}
let url = `https://api.openweathermap.org/data/2.5/weather?q=${element.value}&units=Metric&appid=${api_key}`

let response = await fetch(url);
let data = await response.json();

const humidity = document.getElementsByClassName("humididyPercent")
const wind = document.getElementsByClassName('windSpeed')
const temperature = document.getElementsByClassName('weatherTemp')
const location = document.getElementsByClassName('location')
 
humidity[0].innerHTML = data.main.humidity;
wind[0].innerHTML = data.wind.speed;
temperature[0].innerHTML = data.main.temp;
location[0].innerHTML = data.name;
};


    return (
        <div className={style.container}>
            <div className={style.topBar}>
                <input type="text" className="cityInput" placeholder="search"/>
                <div className={style.searchIcon} onClick={()=>{search()}}>
                    <img src={search_icon} alt="" />
                </div>
            </div>
            <div className={style.weatherImage}>
                <img src={cloud_icon} alt="" />
            </div>
            <div className={style.weatherTemp}>24º</div>
            <div className={style.weatherLocation}>Brazil</div>
            <div className={style.dataContainer}>
                <div className={style.element}>
                    <img src={humidity_icon} alt="" className={style.icon}/>
                    <div className={style.data}>
                        <div className="humididyPercent">63%</div>
                        <div className={style.text}>Humidity</div>
                    </div>
                </div>
                <div className={style.element}>
                    <img src={wind_icon} alt="" className={style.icon}/>
                    <div className={style.data}>
                        <div className="windSpeed">18km/h</div>
                        <div className={style.text}>Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherApp;