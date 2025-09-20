import React from 'react';
import Styled from 'styled-components';
const StyledHead= () => {
  const Heading = Styled.h1`
  color:red;
  border:1px solid black;
  margin:20px;
  padding:20px;
  `
  return (
    <div>
      <h1>Styled Component</h1>
      <Heading>Hello 1</Heading>
      
      <Heading>Hello 2</Heading>
      
      <Heading>Hello 3</Heading>
      
      <Heading>Hello 4</Heading>
      
      <Heading>Hello 5</Heading>
    </div>
  )
}

export default StyledHead
