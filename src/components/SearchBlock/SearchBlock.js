import React,{useState} from 'react';
import './SearchBlock.scss';
import {getWeather} from '../../actions/getWeather';
import {connect} from 'react-redux';

function SearchBox({onGetWeather}) {
  const [query, setQuery] = useState('');
  return(
    <div className="search-block">
      <input 
        type="text"
        className="search-block__input"
        placeholder="Search..."
        onChange={e => setQuery(e.target.value)}
        value={query}
      />
      <button className="search-block__search-btn" onClick={()=>{onGetWeather(query);setQuery('')}} disabled={query.trim()===''}>OK</button>
    </div>
  )
}

function mapDispatchToProps(dispatch){
  return{
    onGetWeather:cityName=>{
      dispatch(getWeather(cityName));
    }
  }
}
  
export default connect(null,mapDispatchToProps)(SearchBox);