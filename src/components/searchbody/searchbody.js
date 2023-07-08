import React, { useRef, useState } from 'react'
import './searchbody.css'
import img from '../searchbody/sun.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaWind } from "react-icons/fa6";
import { AiOutlineCompress } from "react-icons/ai"
import { WiHumidity } from "react-icons/wi"

function Searchbody(props) {

  function getTodayDay() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const dayIndex = today.getDay();
    return daysOfWeek[dayIndex];
  }


  function getCurrentMonth() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const today = new Date();
    const monthIndex = today.getMonth();
    return months[monthIndex];
  }

  function getCurrentDate() {
    const today = new Date();
    const date = today.getDate();
    return date;
  }

  function capitalizeLetter (){
    const letter = props.weather.weather[0].description
    return letter.charAt(0).toUpperCase() + letter.slice(1);
  }



  return (
    <div className='searchbody'>
      <div className='Now'>
        <div className='Now_text'>
          <h3>Now </h3>
        </div>
        <div className='Now_details'>
          <img className="now_img" src={img} />
          <h3 className='temp'>35C</h3>
          <h3 className='temp_desc'>{capitalizeLetter()}</h3>
        </div>
      </div>


      <div className='today'>
        <div className='today_date'>
          <h3>Today</h3>
          <h3>{getTodayDay()}, {getCurrentDate()} {getCurrentMonth()}</h3>
        </div>
        <div className='today_details'>
          <div className='windspeed'>
            <FaWind  size='1rem'  style={{ color: "#f2f2f2", }} />
            <h3>WindSpeed {props.weather.wind.speed}mph</h3>
          </div>
          <div className='pressure'>
            <AiOutlineCompress  size='1rem' style={{ color: "#f2f2f2", }} />
            <h3>
              Pressure {props.weather.main.pressure}mmHG
            </h3>
          </div>
          <div className='humidity'>
            <WiHumidity size='1.5rem'  style={{ color: "#f2f2f2", }} />
            <h3 >
              Humidity {props.weather.main.humidity}g/m3
            </h3>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Searchbody