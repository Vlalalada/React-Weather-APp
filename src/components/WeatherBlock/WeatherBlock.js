import React,{useState} from 'react';
import './WeatherBlock.scss';
import {connect} from 'react-redux';
  
function WeatherBox({weather}) {

  const temperatures=['Fahrenheits','Celsius'];
  const [temp,setTemp]=useState(0);

  function convertToFahrenheit(temperature){
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = (temperature * 9 / 5) + 32;
    const rounded = Math.round(output);
    return rounded.toString();
  }
  
  return(
      <div className="weather-block">
        <div className="weather-block__temp">
        {temp===1?`${convertToFahrenheit(Math.round(weather.main.temp))}°f`:`${Math.round(weather.main.temp)}°c`}
        </div>
        <div className="weather-block__weather-info">{weather.weather[0].main}</div>
        <button className="weather-block__temp-type" onClick={()=>setTemp(Number(!temp))}>Show in {temperatures[temp]}</button>
      </div>
    )
}

function mapStateToProps(state){
  return{
    weather:state.weather
  }
}
  
  
export default connect(mapStateToProps,null)(WeatherBox);
