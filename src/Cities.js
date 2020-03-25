import React from 'react'
import { connect } from 'react-redux'

const Cities = ({ cities, number }) => {
  console.log('cities: ', cities)
  return (
    <div />
  )
}

function mapStateToProps (state) {
  return {
    cities: state.cities,
    number: state.number,
    error: state.error
  }
}

export default connect(mapStateToProps)(Cities)
