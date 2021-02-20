import {
  ADD_CITY,
  UPDATE_WATHER
} from '../actionType';

export const addCity = (city) => (dispatch) => {
  return dispatch({type: ADD_CITY, paiload: city});
}

export const updateWather = () =>  async (dispatch, getState) => {
  const CITY = getState().Weather.city;
  const API_KEY = 'e4c2c4b2658729dc7251af701056d163';
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;
  if(!getState().Weather.city) {
    return dispatch({type: UPDATE_WATHER, paiload: {}});
  }
  const response = await fetch(URL);
  if(response.ok) {
      const weather = await response.json();
      localStorage.setItem('City', CITY)
      return dispatch({type: UPDATE_WATHER, paiload: weather});
    } else {
      return dispatch({type: UPDATE_WATHER, paiload: {}});
    }
}