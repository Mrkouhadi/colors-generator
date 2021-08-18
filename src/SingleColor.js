import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index, hexColor}) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(', ');
  const hex = rgbToHex(...rgb)
  const hexValue = `#${hexColor}`

  // copy the color
  const copyColor = ()=> {
    navigator.clipboard.writeText(hexValue)
    setAlert(true)
  }
  // handle the alert after coppying the color code
  useEffect(() => {
    const timeoutId = setTimeout(()=> setAlert(false), 1000)
    return ()=> clearTimeout(timeoutId);
  },[alert]);
  

  //render our component
  return(
    <article 
            className={`color ${index > 10 && 'color-light'}`}
            style={{backgroundColor:`rgb(${bcg})`}}
            onClick={copyColor}>

        <p className='percent-value'>{weight}%</p>
        <p className="color-value">{hexValue}</p>
        {alert && <p className="alert">Copied to clipboard</p>}
    </article>
  );
}

export default SingleColor
