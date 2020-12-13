import {FAVORITES_FROM_LOCAL_STORAGE} from './actionTypes';

export const getFavorites=()=>dispatch=>{
    const favorites_from_ls=JSON.parse(localStorage.getItem('favorites'))||[];
    dispatch({type:FAVORITES_FROM_LOCAL_STORAGE,favorites_from_ls});
}