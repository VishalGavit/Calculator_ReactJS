/* eslint-disable no-const-assign */
import React, { useState } from 'react';

import Header from './Components/Header';
import KeyPad from './Components/KeyPad/KeyPad';

import './App.css';
import moonIcon from './icon/moon.png'
import sunIcon from './icon/sun.png'

const usedKeyCodes = [
  48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98,
  99, 100, 101, 102, 103, 104, 105, 8, 13, 190, 187,
  189, 191,56, 111, 106, 107, 109
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operations = ["-", "+", "*", "/",];
  


function App() {
  const [isdarkMode,setIsDarkMode]=useState(false);
  const [expressions,setExpressions] = useState("");
  const [ result, setResult] = useState("");
  const [history, setHistory] = useState();
  


  const handleKeyPress=(keyCode, key)=>{
    if(!keyCode)return;
    if(!usedKeyCodes.includes(keyCode))return;

    if(numbers.includes(key)){
      if(key==="0"){
        if(expressions.length===0)return;
      }
      calculateResult(expressions + key);
      setExpressions(expressions + key);
    }else
    if(operations.includes(key)){
      if(!expressions)return;

      const lastChar = expressions.slice(-1);
      if(operations.includes(lastChar))return;
      if(lastChar=== ".")return;

      setExpressions(expressions + key);

    }else if(key==='.'){
      if(!expressions)return;
      const lastChar = expressions.slice(-1);
      if(!numbers.includes(lastChar))return;

      setExpressions(expressions + key);

    }else if(keyCode===8){
      if(!expressions)return;
      calculateResult(expressions.slice(0, -1));
      setExpressions(expressions.slice(0, -1));
    }else if(keyCode===13){
      if(!expressions)return;
      calculateResult(expressions);

      let tempHistory = [...history];
      if(tempHistory.length>20) tempHistory=tempHistory.splice(0, 1);

      tempHistory.push(expressions);
      setHistory(tempHistory);
    }
  };

  const calculateResult= (exp) =>{
    if(!exp){
    setResult("");
    return;
    }
    const lastChar = exp.slice(-1);
    if(!numbers.includes(lastChar))exp=exp.slice(0,-1);
    // eslint-disable-next-line no-eval
    const answer = eval(exp).toFixed(2)+"";
    setResult(answer);
  };
  return (
    <div className="app" data-theme={isdarkMode?"dark":""}
      tabIndex = "0"
        onKeyDown ={(event) => {
        return handleKeyPress(event.keyCode, event.key);
      }}>
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
        <Header expressions={expressions} result={result} history={history}/>
        <KeyPad handleKeyPress={handleKeyPress}/>
      </div>
    </div>
  );
}

export default App;
