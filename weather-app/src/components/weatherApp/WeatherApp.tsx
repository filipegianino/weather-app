import React from "react";
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

    const search = () => {}
    return (
        <div className={style.container}>
            <div className={style.topBar}>
                <input type="text" className="cityInput" placeholder="search"/>
                <div className={style.searchIcon}>
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
                        <div className="humididyPercent">18km/h</div>
                        <div className={style.text}>Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherApp;