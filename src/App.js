import React from 'react';
import styled from 'styled-components';
import InputContainer from './InputContainer';
import Cities from './Cities';
import './App.css';

const Div = styled.div`
  display: column;
`

function App() {
  return (
    <Div className="App">
      <InputContainer />
      <Cities />
    </Div>
  );
}

export default App;
