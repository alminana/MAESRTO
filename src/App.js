import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import Menu from './components/Menu/Menu';
import Client from './components/Client/Clients';
import Prices from './components/Price/Prices';
function App() {
  return (
    <div>
      <Header/>
      <About/>
      <Shop/>
      <Menu/>
      <Client/>   
      <Prices/>
    </div>
  );
}

export default App;
