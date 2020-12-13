import React from 'react';
import './WeatherInfo.scss';
import {connect} from 'react-redux';

function InfoTable({weather,favorites_opened}) {
  const table=
  <table className="weather-info">
  <tbody className="weather-table">
    <tr className="weather-table__row"><td className="weather-table__item">Feels like:</td><td className="weather-table__item">{`${Math.round(weather.main.feels_like)} °c`}</td></tr>
    <tr className="weather-table__row"><td className="weather-table__item">Pressure:</td><td className="weather-table__item">{`${weather.main.pressure} hPa`}</td></tr>
    <tr className="weather-table__row"><td className="weather-table__item">Humidity:</td><td className="weather-table__item">{`${weather.main.humidity} %`}</td></tr>
    <tr className="weather-table__row"><td className="weather-table__item">Visibility:</td><td className="weather-table__item">{`${(weather.visibility/1000).toFixed(1)} km`}</td></tr>
    <tr className="weather-table__row"><td className="weather-table__item">Wind speed:</td><td className="weather-table__item">{`${weather.wind.speed.toFixed(1)} m/s`}</td></tr>
  </tbody>
</table>;

  return(
    <div>{favorites_opened?(window.innerHeight<800&&window.innerWidth<450?null:table):table}
    </div>
  )
}

function mapStateToProps(state){
  return{
    weather:state.weather,
    favorites_opened:state.favorites.opened
  }
}

export default connect(mapStateToProps,null)(InfoTable);