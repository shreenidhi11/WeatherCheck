import React from 'react'
import { useState, useRef } from 'react'
import './searchbar.css'

function Searchbar(props) {

  return (
    
    <div className='searchbody__search'>
      <input type='text'
      placeholder='Enter city'
      ref={props.takeinputplace}
      />
      <button onClick={props.onEnter}>Search</button>

    </div>
   
  )
}

export default Searchbar