import React from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'
import PropTypes from 'prop-types'
import Cities from './Cities'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const Result = ({ results, isFetching, error, searchInput }) => {
  return isFetching ? (
    <Loader
      type='Puff'
      color='#00BFFF'
      height={100}
      width={100}
      timeout={3000}
    />
  ) : <Cities results={results} error={error} searchInput={searchInput} />
}

function mapStateToProps (state) {
  return {
    results: state.results,
    error: state.error,
    searchInput: state.searchInput,
    isFetching: state.isFetching
  }
}

export default connect(mapStateToProps)(Result)

Result.propTypes = {
  results: PropTypes.object,
  error: PropTypes.shape({
    error: PropTypes.string,
    message: PropTypes.string,
    detail: PropTypes.string
  }),
  searchInput: PropTypes.string,
  isFetching: PropTypes.bool
}
