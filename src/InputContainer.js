import React from 'react';
import styled from 'styled-components';
import Input from './Input';
import SearchButton from './SearchButton';

const Div = styled.div`
  display: flex;
`

const InputContainer = () => {
  return (
    <Div>
      <Input />
      <SearchButton />
    </Div>
  );
};

export default InputContainer;