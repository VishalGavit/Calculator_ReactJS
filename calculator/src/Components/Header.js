import React, { useEffect, useRef } from 'react'

import './Header.css'

function Header(props) {
  const resultRef = useRef();
  const expressionsref = useRef();

  useEffect(()=>{
    // eslint-disable-next-line no-unused-expressions
    resultRef.current.scrollIntoView();
  }, [props.history]);

  useEffect(()=>{
      expressionsref.current.scrollLeft = expressionsref.current.scrollWidth;
  }, [props.expressions]);


  return (
    <div className='header custom-scroll'>
        <div className='header_history'>
          {
            props.history &&
            props.history?.map((item)=> 
            ( <p key={item+" "+ Math.random() * 44}></p>))
          }
        </div>
<br />
        <div ref={expressionsref} className="header_expressions custom-scroll">
          <p>{props.expressions}
          </p>
          <div>
            <p ref={resultRef} className="header_result">
              {props.result}
            </p>
          </div>
        </div>
    </div>
  )
}

export default Header