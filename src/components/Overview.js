import React, { useEffect, useState } from 'react'
import { OVERVIEW_API_URL } from '../utils/Constants';

const Overview = ({videoId}) => {
    const [overview,updateOverview]=useState(null)
    const getOverview=async()=>{
        const data=await fetch(OVERVIEW_API_URL+'&id='+videoId);
        const json=await data.json();
        updateOverview(json?.items[0]);
         // console.log(json)     
            }
           
        useEffect(()=>{
        getOverview();
        },[]);
     
  return (
    <div className='block text-justify w-2/3' > 
            <h1 className='font-bold text-xl p-2'>{overview?.snippet?.title}</h1>
            <img className='p-0 rounded-full' src={overview?.snippet?.snippet?.authorProfileImageUrl} />
            <h2 className='p-2 font-bold text-lg'>{overview?.snippet?.channelTitle}</h2>
            <h2 className='p-2'>{overview?.snippet?.description}</h2>
            
    </div>
  )
}

export default Overview