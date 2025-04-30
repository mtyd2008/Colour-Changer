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
      justifyContent:'space-between',
      alignItems:'center',
      marginLeft:'50px'
    }}>
    <h1>Color Changer</h1>

    

    <div style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      gap:'10px',
      cursor:'pointer',
      marginRight:'50px'
    }}>
    <button style={{backgroundColor:'white' , padding:'8px' , borderRadius:'8px', border:'1px solid black'}}
     onClick={()=>Changer('white')}>Default</button>
    <button style={{backgroundColor:'yellow' , padding:'8px' , borderRadius:'8px', border:'1px solid yellow'}}
     onClick={()=>Changer('yellow')}>Yellow</button>
    <button style={{backgroundColor:'blue' , padding:'8px' , borderRadius:'8px', border:'1px solid blue'}}
     onClick={()=>Changer('blue')}>Blue</button>
    <button style={{backgroundColor:'red' , padding:'8px' , borderRadius:'8px', border:'1px solid red'}}
     onClick={()=>Changer('red')}>Red</button>
    <button style={{backgroundColor:'pink' , padding:'8px' , borderRadius:'8px', border:'1px solid pink'}}
     onClick={()=>Changer('pink')}>Pink</button>
    <button style={{backgroundColor:'green' , padding:'8px' , borderRadius:'8px', border:'1px solid green'}}
     onClick={()=>Changer('green')}>Green</button>
    <button style={{backgroundColor:'purple' , padding:'8px' , borderRadius:'8px', border:'1px solid purple'}}
     onClick={()=>Changer('purple')}>Purple</button>
    <button style={{backgroundColor:'gray', padding:'8px' , borderRadius:'8px', border:'1px solid gray'}}
     onClick={()=>Changer('gray')}>Gray</button>
     <button style={{backgroundColor:'orange', padding:'8px' , borderRadius:'8px', border:'1px solid orange'}}
     onClick={()=>Changer('orange')}>Orange</button>
    </div>
    
    </div>
    </>
  )
}

export default App