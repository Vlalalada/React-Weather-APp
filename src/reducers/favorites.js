import {ADD_FAVORITE,CLEAR_FAVORITES,TOGGLE_FAVORITES,FAVORITES_FROM_LOCAL_STORAGE} from '../actions/actionTypes';

export default function favorites(state={list:[],opened:false},action){
    switch(action.type){
        case ADD_FAVORITE:
            return {...state,list:[action.favorite,...state.list]};
        case CLEAR_FAVORITES:
            return {...state,list:[]};
        case TOGGLE_FAVORITES:
            return {...state,opened:!state.opened};
        case FAVORITES_FROM_LOCAL_STORAGE:
            return {...state,list:action.favorites_from_ls};
        default:
            return state;
    }
}