/* eslint-disable camelcase */
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Pagination from './Pagination'

const CityBox = styled.div`
  display: flex;
  border: 1px solid black;
  padding: 10px;
  margin-right: 10px;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Row = styled.div`
  display: flex;
  margin-bottom: 10px;
`

const Number = styled.div`
  display: flex;
  padding: 10px 0;
`

const City = ({ name }) => <CityBox>{name}</CityBox>

const Cities = ({ results, error, searchInput }) => {
  if (error) return <div>{error.message}</div>
  if (results !== null) {
    const { data, total, total_pages, page } = results
    const GroupedCitiesByState = data.reduce((acc, item) => {
      if (!acc[item.state]) {
        acc[item.state] = []
      }

      acc[item.state].push(item)
      return acc
    }, {})

    const StatesArray = Object.entries(GroupedCitiesByState)

    return (
      <Container>
        <Number>Total cities found: {total}</Number>
        {StatesArray.map((entry) => {
          return (
            <Row key={entry[0]}>
              <City name={entry[0]} />
              {entry[1].map((item, i) => <City name={item.city} key={item.city + i} />)}
            </Row>
          )
        })}
        <Pagination totalPages={total_pages} page={page} searchInput={searchInput} />
      </Container>
    )
  }
  return <div />
}

export default Cities

Cities.propTypes = {
  results: PropTypes.oneOfType([
    () => null,
    PropTypes.shape({
      page: PropTypes.number,
      total_pages: PropTypes.number,
      total: PropTypes.number,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          state: PropTypes.string,
          city: PropTypes.string
        })
      )
    })
  ]),
  error: PropTypes.shape({
    error: PropTypes.string,
    message: PropTypes.string,
    detail: PropTypes.string
  }),
  searchInput: PropTypes.string
}
City.propTypes = {
  name: PropTypes.string
}
