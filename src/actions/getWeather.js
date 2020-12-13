import {FETCH_WEATHER_SUCCESS,FETCH_WEATHER_ERROR,FETCH_WEATHER_START, FETCH_WEATHER_END} from './actionTypes';

const api = {
    key: "08d097d7ff8690cace3d32b46af5f651",
    base: "https://api.openweathermap.org/data/2.5/"
}

export const getWeather=cityName=> async dispatch=>{
    dispatch({type:FETCH_WEATHER_START});
    const result=await fetch(`${api.base}weather?q=${cityName}&units=metric&appid=${api.key}`);
    const weather=await result.json();
    if(weather.cod!==200){
        dispatch({type:FETCH_WEATHER_ERROR,weather});
    }else{
        dispatch({type: FETCH_WEATHER_SUCCESS,weather});
    }
    dispatch({type:FETCH_WEATHER_END});
}