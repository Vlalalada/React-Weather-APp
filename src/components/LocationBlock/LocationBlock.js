import React from 'react';
import './LocationBlock.scss';
import {connect} from 'react-redux';

function LocationBox({weather}){
  return(
    <div className="location-block">
      <div className="location-block__location">{weather.name}, {weather.sys.country}</div>
      <div className="location-block__date">{new Date().toDateString()}</div>
    </div>
  )
}

function mapStateToProps(state){
  return{
    weather:state.weather
  }
}
  
  
export default connect(mapStateToProps,null)(LocationBox);
  