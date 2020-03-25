import axios from 'axios'

export const GET_CITIES_REQUEST = 'GET_CITIES_REQUEST'
export const GET_CITIES_SUCCESS = 'GET_CITIES_SUCCESS'
export const GET_CITIES_FAILURE = 'GET_CITIES_FAILURE'

export const getCities = (input) => {
  return (dispatch) => {
    dispatch({ type: 'GET_CITIES_REQUEST' })
    return axios(`https://jsonmock.hackerrank.com/api/cities/?city=${input}`)
      .then(cities => dispatch({ type: 'GET_CITIES_SUCCESS', payload: cities.data }))
      .catch(error => dispatch({ type: 'GET_CITIES_FAILURE', payload: error, error: true }))
  }
}
