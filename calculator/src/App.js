import React, { useState } from 'react';

import Header from './Components/Header';
import KeyPad from './Components/KeyPad/KeyPad';

import './App.css';
import moonIcon from './icon/moon.png'
import sunIcon from './icon/sun.png'


function App() {
  const [isdarkMode,setIsDarkMode]=useState(false);

  return (
    <div className="app" data-theme={isdarkMode?"dark":""}>
      <div className="app_calculator">
        <div className="navbar">
          <div className="toggle"
            onClick={()=>setIsDarkMode(!isdarkMode)}>
            <div className={`circle ${
              isdarkMode? "active" : ""
            }`} >

            </div>
            <img src={isdarkMode ? moonIcon : sunIcon} alt="mode" />
          </div>
        </div>
        <Header />
        <KeyPad />
      </div>
    </div>
  );
}

export default App;
