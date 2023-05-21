//Clean Up function

import React, { useEffect } from 'react'
import { useState } from 'react'

const Example_3 = () => {

    const[widthCount, setWidthCount] = useState(window.screen.width)
  
    const actualWidth = ()=>{
      console.log(window.innerWidth);
      setWidthCount(window.innerWidth)
    }


    useEffect(()=>{
      console.log('add event');
      window.addEventListener('resize',actualWidth)
      return ()=>{
        console.log('remove event');
        window.removeEventListener('resize',actualWidth)

      }

    })

  
    return (

    <div>
        <p>The Actual Size of the window is:</p>
        <h1>{widthCount}</h1>


    </div>
  )
}

export default Example_3