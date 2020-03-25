import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { getCities } from '../actions'

const Row = styled.div`
  display: flex;
  margin: 10px;
`
const Link = styled.div`
  margin-right: 5px;
  cursor: ${props => props.clickable ? 'pointer' : ''};
  color: ${props => props.clickable ? 'yellow' : 'black'};
`

const Pagination = ({ totalPages, searchInput, onGetCities, page }) => {
  if (totalPages > 1) {
    const list = []
    for (let i = 1; i <= totalPages; i++) {
      list.push(
        <Link
          clickable={parseInt(page) !== i}
          key={i}
          onClick={() => parseInt(page) === i ? {} : onGetCities(`${searchInput}&page=${i}`)}
        >{i}
        </Link>
      )
    }
    return (
      <Row>
        {list.map(l => l)}
      </Row>
    )
  }
  return null
}

const mapDispatchToProps = dispatch => {
  return {
    onGetCities: input => dispatch(getCities(input))
  }
}

export default connect(null, mapDispatchToProps)(Pagination)

Pagination.propTypes = {
  onGetCities: PropTypes.func,
  totalPages: PropTypes.number,
  page: PropTypes.oneOfType([PropTypes.string, PropTypes.number, () => null]),
  searchInput: PropTypes.string
}
