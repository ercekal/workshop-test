import React from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'
import PropTypes from 'prop-types'
import Cities from './Cities'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const Result = ({ results, isFetching, error, searchInput }) => {
  // Nice use of redux loading state
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
    // You probably weren't able to trigger an API error which is why this
    // didn't cause you any issues, but it looks like a typo
    error: state.errorMessage,
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
