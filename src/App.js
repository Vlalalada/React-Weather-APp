import React, {useEffect } from 'react';
import {connect} from 'react-redux';
import {getWeather} from './actions/getWeather';
import {Loader} from './components/Loader/Loader';
import SearchBlock from './components/SearchBlock/SearchBlock';
import LocationBlock from './components/LocationBlock/LocationBlock';
import WeatherBlock from './components/WeatherBlock/WeatherBlock';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';
import Favorites from './components/Favorites/Favorites';

function App({weather,loading,onGetWeather}) {

  useEffect(()=>{
    onGetWeather('Zaporizhzhia');
  },[onGetWeather]);

  return (
    <div className="app">
      <main className="app__main-block">
        <SearchBlock/>
        {
        loading?<Loader/>:weather.main
        ?<div className="app__weather-block">
          <LocationBlock/>
          <div className="app__weather-info">
            <WeatherBlock/>
            <WeatherInfo/>
          </div>
        </div>
        :<div className="app__error">{weather.message}</div>
        }
        <Favorites/>
      </main>
    </div>
  );
}

function mapStateToProps(state){
  return{
    weather:state.weather,
    loading:state.weather.loading
  }
}

function mapDispatchToProps(dispatch){
  return{
    onGetWeather:cityName=>{
      dispatch(getWeather(cityName));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
