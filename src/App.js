import React from 'react'
import Header from './components/Header/Header';
import Morgan from './components/Morgan/Morgan';
import Companies from './components/Companies/Companies';
import './App.css'
import Residencies from './components/Residencies/Residencies';
import Value from './components/Value/Value';
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer';
import Gets from './components/Gets/Gets'
function App() {
  return (
    <div className="App">
      <div>
        
        <Header />
        <Morgan />
        <div className="white-gradient" />
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <Contacts/>
      <Footer/>
      <Gets/>
    </div>
  );
};

export default App;
