import React, { useEffect, useState } from 'react'

const App = () => {

  const [color , setColor] = useState('white')


  const Changer = (color)=>{
    setColor(color)
  }


  useEffect(()=>{
    document.body.style.backgroundColor = color
  },[color])

  return (
    <>
    <div style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
    }}>
    <h1>Color Changer</h1>

    </div>

    <div style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      gap:'10px',
      cursor:'pointer',
      border:'none',
      borderRadius:'20px',
    }}>
    <button onClick={()=>Changer('white')}>Default</button>
    <button onClick={()=>Changer('yellow')}>Yellow</button>
    <button onClick={()=>Changer('blue')}>Blue</button>
    <button onClick={()=>Changer('red')}>Red</button>
    <button onClick={()=>Changer('pink')}>Pink</button>
    <button onClick={()=>Changer('green')}>Green</button>
    <button onClick={()=>Changer('purple')}>Purple</button>
    <button onClick={()=>Changer('gray')}>Gray</button>

    </div>
    

    </>
  )
}

export default App