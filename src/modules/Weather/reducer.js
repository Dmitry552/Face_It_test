const initialStore = {
  city: '',
  weather: {}
}

export default (state = initialStore, action) => {
  switch (action.type) {
    case 'ADD_CITY':
      return {
        ...state,
        city: action.paiload
      };
    case 'UPDATE_WATHER':
      return {
        ...state,
        weather: action.paiload
      }
    default: return state;
  }
}