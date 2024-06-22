import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styled from 'styled-components'
import GlobalStyles from './styles/GlobalStyles';
import Input from './ui/Input';

import Button from "./ui/Button";
import Heading from './ui/Heading';
import Row from './ui/Row';


const StyledApp = styled.main`
background-color:orangered;
padding:20px;
`;

function App() {

  return (
    <>
   <GlobalStyles />
   <StyledApp>
    <Row type='vertical'>

   
    <Row type='horizontal'>

      <Heading as='h1'>The wild ones </Heading>
      <div>
        <Heading as='h2'>check in and check out </Heading>
        <Button 
        variation='primary' 
        size='medium' 
        onClick={() => alert("check in")}> check in</Button>
        <Button 
          variation='secondary' 
          size='small' 
        onClick={() => alert("check out")}>Check out</Button>
      </div>
    </Row>
    
    <Row type='vertical'>
      <Heading as="h3">Form</Heading>
      <form>
        <Input type='number' placeholder='Number of guests' ></Input>
        <Input type='number' placeholder='Number of guests' ></Input>
      </form>
    </Row>
    </Row>
   </StyledApp>
   </>
  )
}

export default App
