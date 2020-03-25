import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

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

const Cities = ({ cities, number }) => {
  if (cities !== null) {
    const GroupedCitiesByState = cities.reduce((acc, item) => {
      if (!acc[item.state]) {
        acc[item.state] = []
      }

      acc[item.state].push(item)
      return acc
    }, {})

    const StatesArray = Object.entries(GroupedCitiesByState)

    return (
      <Container>
        <Number>Total cities found: {number}</Number>
        {StatesArray.map((entry) => {
          return (
            <Row key={entry[0]}>
              <City name={entry[0]} />
              {entry[1].map((item, i) => <City name={item.city} key={item.city + i} />)}
            </Row>
          )
        })}
      </Container>
    )
  }
  return <div />
}

export default Cities

Cities.propTypes = {
  number: PropTypes.number,
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      state: PropTypes.string,
      city: PropTypes.string
    })
  )
}
City.propTypes = {
  name: PropTypes.string
}
