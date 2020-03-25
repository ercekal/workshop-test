const initialState = {
  results: null,
  searchInput: '',
  // Remember to initialise state with correct properties
  isFetching: false,
  errorMessage: null
}

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CITIES_REQUEST':
      return { ...state, isFetching: true }
    case 'GET_CITIES_SUCCESS':
      return { ...state, isFetching: false, results: action.payload, number: action.payload.total }
    case 'GET_CITIES_FAILURE':
      return { ...state, isFetching: false, errorMessage: action.payload.message }
    // In general we wouldn't look to store text input values with redux.
    // Maybe you added this to see it in the console - but in general anything
    // that gets updated often, shouldn't be in redux
    case 'ADD_SEARCH_INPUT':
      return { ...state, searchInput: action.payload }
    default:
      return state
  }
}

export default citiesReducer
