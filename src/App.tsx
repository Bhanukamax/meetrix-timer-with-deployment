import React from 'react';
import TimerModule from './modules/timer-module';
import styled from 'styled-components';

const Header = styled.h1`
  color: #444;
  text-align: center;
  font-size: 2em;
`

function App() {
  return (
    <>
      <Header>Test Dev</Header>
      <TimerModule />
    </>
  );
}

export default App;
