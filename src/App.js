import { useRef, useState } from 'react';
import './App.css';
import Searchbar from './components/searchbar/searchbar';
import Searchbody from './components/searchbody/searchbody';

const api ={
  base: "https://api.openweathermap.org/data/2.5/",
  key: "6fcebf1698cdaab411a61bb910302974"
}

function App() {
    const [place, setplace] = useState('')
    const takeinputplace = useRef('')
    const [weather, setweather] = useState({});


    const fetchData = async e =>{
      const currentplace = takeinputplace.current.value
      const response = await fetch(`${api.base}weather?q=${currentplace}&appid=${api.key}`)
      const data = await response.json()
      console.log(data)
      setplace(takeinputplace.current.value)
      setweather(data)

    }

  return (
    <div className="App">
      <Searchbar onEnter={fetchData} takeinputplace={takeinputplace} />
      {place && <Searchbody place={place} weather={weather}/>}
    </div>
  );
}

export default App;
