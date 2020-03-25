import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { getCities } from './actions'

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
  margin-right: 10px;
  border: 1px solid black;
`

const Button = styled.button`
  background:#C6E2FF;
  border: 1px solid black;
`

const InputContainer = ({ onGetCities }) => {
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
          />
          <Button onClick={(e) => onClick(e)}>
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
    onGetCities: input => dispatch(getCities(input))
  }
}

export default connect(null, mapDispatchToProps)(InputContainer)
