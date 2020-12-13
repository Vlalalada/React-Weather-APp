import {FETCH_WEATHER_START,FETCH_WEATHER_SUCCESS,FETCH_WEATHER_ERROR,FETCH_WEATHER_END} from '../actions/actionTypes';

export default function weather(state={loading:false},action) {
    switch(action.type){
        case FETCH_WEATHER_START:
            return {...state,loading:true};
        case FETCH_WEATHER_SUCCESS:
            return action.weather;
        case FETCH_WEATHER_ERROR:
            return action.weather;
        case FETCH_WEATHER_END:
            return {...state,loading:false};
        default:
            return state;
    }
}