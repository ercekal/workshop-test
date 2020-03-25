/* eslint-disable indent */
import React from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'
import Cities from './Cities'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const Result = ({ cities, number, isFetching }) => {
  return isFetching ? (
    <Loader
      type='Puff'
      color='#00BFFF'
      height={100}
      width={100}
      timeout={3000}
    />
  ) : <Cities cities={cities} number={number} />
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
