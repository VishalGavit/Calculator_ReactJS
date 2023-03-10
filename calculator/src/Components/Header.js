import React from 'react'

import './Header.css'

function Header() {
  return (
    <div className='header custom-scroll'>
        <div className='header_history'>
          <p>10+2</p>
          <p>125-878*4</p>
          <p>10+5</p>
          <p>10+2</p>
          <p>125-878*4</p>
          <p>10+5</p>
          <p>10+2</p>
          <p>125-878*4</p>
          <p>10+5</p>
        </div>
<br />
        <div className="header_expression custom-scroll">
          <p>10+50+89
          </p>
          <div>
            <p className="header_result">149</p>
          </div>
        </div>
    </div>
  )
}

export default Header