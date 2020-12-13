import {combineReducers} from 'redux';

import weather from './weather';
import favorites from './favorites';

export default combineReducers({
    weather,
    favorites
});