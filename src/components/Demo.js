import React, { useMemo, useState } from 'react'
import { findNthPrime } from '../utils/helper';
//Function to check the number is prime
 const Demo = () => {
    const [text,setText]=useState(0);
    const [isDarkTheme,toggleTheme]=useState(true);
    const prime=useMemo(()=>findNthPrime(text),[text]);
     
   
     return (
      <div className="mx-48 my-72 p-2">
        <button  className='rounded bg-red-900 text-white' onClick={()=>toggleTheme(!isDarkTheme)}>Toggle</button>
       <div className={"w-96 h-96 border border-black" +
       (isDarkTheme && "font-bold text-white bg-gray-900")
       }
       >
     
        <div className='p-2 text-black'>
        <input className='border border-black w-72 px-2' type="number" value={text} onChange={(e)=>{
          setText(e.target.value)
                 } 
        }/>
       
        </div>
        
        <div>
          
        <h1 className='m-4 text-xl font-bold'>Nth Prime: {prime}</h1>
        </div>
       </div>
       </div>
     )
   }
   
   export default Demo
 