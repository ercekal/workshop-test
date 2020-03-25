const initialState = {
  results: null,
  searchInput: ''
}

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CITIES_REQUEST':
      return { ...state, isFetching: true }
    case 'GET_CITIES_SUCCESS':
      return { ...state, isFetching: false, results: action.payload, number: action.payload.total }
    case 'GET_CITIES_FAILURE':
      return { ...state, isFetching: false, errorMessage: action.payload.message }
    case 'ADD_SEARCH_INPUT':
      return { ...state, searchInput: action.payload }
    default:
      return state
  }
}

export default citiesReducer
