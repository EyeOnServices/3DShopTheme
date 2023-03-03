import React from 'react';
import styled from 'styled-components';
import BackgroundController from './BackgroundController';
import ColorWheel from './ColorWheel';

// const colorways = [
//   { id: 1, name: "Red", available: true },
//   { id: 2, name: "Blue", available: true },
//   { id: 3, name: "Green", available: true },
//   { id: 4, name: "Yellow", available: false },
//   { id: 5, name: "Purple", available: true },
//   { id: 6, name: "Orange", available: false },
//   // ... add more colorways as needed
// ];


const App = () => {

  return (
    <>
      <ColorWheel />
      <BackgroundController>
      </BackgroundController>
    </>

  );
};



export default App;
