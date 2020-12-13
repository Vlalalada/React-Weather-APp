import React, {useEffect} from 'react';
import './Favorites.scss';
import {getWeather} from '../../actions/getWeather';
import {getFavorites} from '../../actions/getFavorites';
import {connect} from 'react-redux';
import {ADD_FAVORITE,CLEAR_FAVORITES,TOGGLE_FAVORITES} from '../../actions/actionTypes';
import {Transition} from 'react-transition-group';

function Favorites({weather,favorites,onGetWeather,onAddFavorite,onClearFavorites,onToggleFavorites,favorites_opened,onGetFavorites}){

  useEffect(()=>{
    onGetFavorites();
  },[onGetFavorites]);

  useEffect(()=>{
    localStorage.setItem('favorites',JSON.stringify(favorites));
  },[favorites]);

  return(
      <Transition
        in={favorites_opened}
        timeout={{
          enter:500,
          exit:500
        }}
        >
          {state=><div className={`favorites ${state}`}>
          <button onClick={()=>onToggleFavorites()} className="favorites__toggle-btn">Favorites</button>
          <div className="favorites__buttons">
            <button className="favorites__add-btn" onClick={()=>onAddFavorite(`${weather.name}, ${weather.sys.country}`)} disabled={!weather.main||favorites.includes(`${weather.name}, ${weather.sys.country}`)}>Add to favorites</button>
            <button className="favorites__clear-btn" onClick={()=>onClearFavorites()} disabled={favorites.length===0}>Clear favorites</button>
          </div>
        {
          favorites.length!==0
          ?<ul className="favorites__list">
            {favorites.map(favorite => (
              <li key={favorite}><button onClick={()=>onGetWeather(favorite)} className="favorites__item">{favorite}</button></li>
            ))}
          </ul>
          :<p className="favorites__message">Add your favorites...</p>
        }
        </div>}
    </Transition>
  )
}

function mapStateToProps(state){
  return{
    weather:state.weather,
    favorites:state.favorites.list,
    favorites_opened:state.favorites.opened
  }
}
  
function mapDispatchToProps(dispatch){
  return{
    onGetWeather:cityName=>{
      dispatch(getWeather(cityName));
    },

    onAddFavorite:favorite=>{
      dispatch({type:ADD_FAVORITE,favorite});
    },
  
    onClearFavorites:()=>{
      dispatch({type:CLEAR_FAVORITES});
    },

    onToggleFavorites:()=>{
      dispatch({type:TOGGLE_FAVORITES});
    },

    onGetFavorites:()=>{
      dispatch(getFavorites());
    }
  }
}
  
export default connect(mapStateToProps,mapDispatchToProps)(Favorites);