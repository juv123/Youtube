import React, { useRef, useState } from 'react'

const Demo1 = () => {
    let [y,setY]=useState(0);//using state var value can be changed in UI.
    let x=1;
    const z=useRef(0);//refer values that not needed for rendering
   
const incrementX=()=>{
      x=x+1;
      console.log("x="+x);
     }
const incrementY=()=>{
      y=y+1;
      setY(y);
 
    }
    const incrementZ=()=>{
        z.current=z.current+1;
        console.log("z="+z.current);
  
  }
    //after calling incrementY(cliking y+ button) x value reinitializes.
  return (
    <div className='mx-48 my-72 p-2'>
        <span className='font-bold text-xl pr-10'>X={x}</span>
        <button className="p-5" onClick={()=>incrementX()}>X+</button>
        <span className='font-bold text-xl'>Y={y}</span>
        <button className="p-5" onClick={()=>incrementY()}>Y+</button>
        <span className='font-bold text-xl' Ref={z.current}>z={z.current}</span>
        <button className="p-5" onClick={()=>incrementZ()}>Z+</button>
    </div>
  )
}

export default Demo1