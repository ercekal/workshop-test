import React from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'
import PropTypes from 'prop-types'
import Cities from './Cities'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const Result = ({ cities, number, isFetching, error }) => {
  return isFetching ? (
    <Loader
      type='Puff'
      color='#00BFFF'
      height={100}
      width={100}
      timeout={3000}
    />
  ) : <Cities cities={cities} number={number} error={error} />
}

function mapStateToProps (state) {
  return {
    cities: state.cities,
    number: state.number,
    error: state.error,
    isFetching: state.isFetching
  }
}

export default connect(mapStateToProps)(Result)

Result.propTypes = {
  number: PropTypes.number,
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      state: PropTypes.string,
      city: PropTypes.string
    })
  ),
  error: PropTypes.shape({
    error: PropTypes.string,
    message: PropTypes.string,
    detail: PropTypes.string
  }),
  isFetching: PropTypes.bool
}
