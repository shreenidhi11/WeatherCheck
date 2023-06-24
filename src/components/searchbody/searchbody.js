import React, { useRef, useState } from 'react'
import './searchbody.css'

function Searchbody(props) {

  return (
    <div className='searchbody'>

      <div className='search__place__sky'>
        <h1>{props.place}</h1>
        <p>
          {props.weather.weather[0].description}
        </p>
      </div>

      <div className='search__place__details'>
        <p>
          Humidity: {props.weather.main.humidity}
        </p>
        <p>
          Pressure : {props.weather.main.pressure}
        </p>
        <p>
          Temperature Range : {props.weather.main.temp_min} - {props.weather.main.temp_max}
        </p>
      </div>



    </div>
  )
}

export default Searchbody