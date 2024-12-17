import React from 'react'

const Buttons = () => {
    const buttons_array=["All","News","Music","Dramedy","Mixes","Game Shows","Filmi","Live","Ceremonies","Cooking Shows","Animated Films","Recently Uploaded","Watched","New to You"]
  return (
    <div className='mx-36 py-10'>
        {buttons_array.map((button,index)=>  <button key={index} className='border-2 mx-2 my-1 bg-gray-100 rounded'>{button}</button>)}
    </div>
  )
}

export default Buttons