import React, { useCallback, useEffect, useState } from 'react'
import { YOUTUBE_API_URL } from '../utils/Constants'
import VideoCard, { HigherOrderComponent } from './VideoCard'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const VideoContainer = () => {
  const [videoData,setVideoData]=useState([])
  const search=useSelector((store)=>store.search.IsOpenSearch);
       
   const getYoutubeVideos=(async()=>{ 
        const data=await fetch(YOUTUBE_API_URL)
        const json=await data?.json();
        const response=json?.items;
        setVideoData(response);
     
   });
    useEffect(()=>{
     getYoutubeVideos();
    },[videoData])
    
  return (
    <div className="flex flex-wrap bg-white pl-10 mt-1">
      {/*

        if search=false ie its for showing default popular videos.*/}
     
      {videoData && !search &&
            videoData.map((videos)=> <Link key={videos.id} to={"/watch?v="+videos.id}> <VideoCard  video={videos} id={videos.id} /></Link>)
   
      }
    </div>
  )
}

export default VideoContainer