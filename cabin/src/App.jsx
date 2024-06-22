import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styled from 'styled-components'
import GlobalStyles from './styles/GlobalStyles';
import Input from './ui/Input';

import Button from "./ui/Button";

const H1 = styled.h1`
  font-size: 30px;
  font-weight:600;
  background-color:yellow;
`;




const StyledApp = styled.div`
background-color:orangered;
padding:20px;
`;

function App() {

  return (
    <>
   <GlobalStyles />
   <StyledApp>
    <H1>The wild ones </H1>
    <Button onClick={() => alert("check in")}> check in</Button>
    <Button onClick={() => alert("check out")}>Check out</Button>

    <Input type='number' placeholder='Number of guests' ></Input>
    <Input type='number' placeholder='Number of guests' ></Input>

   </StyledApp>
   </>
  )
}

export default App
