const initialState = {
  cities: [],
  number: null
}

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CITIES_REQUEST':
      return { ...state, isFetching: true }
    case 'GET_CITIES_SUCCESS':
      return { ...state, isFetching: false, cities: action.payload.data, number: action.payload.total }
    case 'GET_CITIES_FAILURE':
      return { ...state, isFetching: false, errorMessage: action.payload.message }
    default:
      return state
  }
}

export default citiesReducer
