import React from 'react';
import './components/App.css' 
import Box from './components/Box';
import LeftBar from './components/LeftBar';
import Nav from './components/Nav';
import Template from './components/Template';
import Words from './components/Words';
const App = () => {
  return (
    <div className='App'>
    <Nav/>
    {/* ///////////////////// */}

    <LeftBar/>
    {/* ///////////////////////////// */}

      <Template/>
  
    {/* ////////////////////////// */}
      <Words/>
    {/* //////////////// */}
    <Box/>

  </div>
  )
}

export default App
