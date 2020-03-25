import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { getCities, addSearchInput } from '../actions'

const Wrapper = styled.div`
  display: column;
`

const Row = styled.div`
  display: flex;
`

const Error = styled.div`
  padding-top: 5px;
  color: red;
`

const Input = styled.input`
  background:#C6E2FF;
  margin: 0 10px 10px 0;
  border: 1px solid ${props => props.error ? 'red' : 'black'};
`

const Button = styled.button`
  background:#C6E2FF;
  border: 1px solid black;
`

const InputContainer = ({ onGetCities, onAddSearchInput }) => {
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)

  const onClick = (e) => {
    e.preventDefault()
    if (input !== '') {
      const result = /^[a-zA-Z_\\-]+$/.test(input)
      if (result) onGetCities(input)
      setError(!result)
    }
  }

  const onChange = (e) => {
    onAddSearchInput(e.target.value)
    setInput(e.target.value)
  }

  return (
    <Wrapper>
      <Row>
        <form className='form' id='addItemForm'>
          <Input
            type='text'
            value={input}
            onChange={onChange}
            error={error}
          />
          <Button onClick={onClick}>
            Search
          </Button>
        </form>
      </Row>
      {error && <Error>Only use letters without any space</Error>}
    </Wrapper>

  )
}

const mapDispatchToProps = dispatch => {
  return {
    onGetCities: input => dispatch(getCities(input)),
    onAddSearchInput: input => dispatch(addSearchInput(input))
  }
}

export default connect(null, mapDispatchToProps)(InputContainer)

InputContainer.propTypes = {
  onGetCities: PropTypes.func,
  onAddSearchInput: PropTypes.func
}
