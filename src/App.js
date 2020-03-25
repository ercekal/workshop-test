import React from 'react'
import styled from 'styled-components'
import InputContainer from './components/InputContainer'
import Cities from './components/Result'
// import './App.css'

const Div = styled.div`
  display: column;
  justify-content: flex-start;
  height: 100vh;
  background:#C6E2FF;
  padding: 20px;
`

function App () {
  return (
    <Div>
      <InputContainer />
      <Cities />
    </Div>
  )
}

export default App
