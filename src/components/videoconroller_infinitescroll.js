import React, { useCallback, useEffect, useState } from 'react'
import { YOUTUBE_API_URL } from '../utils/Constants'
import VideoCard, { HigherOrderComponent } from './VideoCard'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const VideoContainer_InfiniteScroll = () => {
  const [videoData,setVideoData]=useState([])
  const search=useSelector((store)=>store.search.IsOpenSearch);
  const [page,setPage]=useState(1);
  const [loading,setLoading]=useState(false);
     
   const getYoutubeVideos=useCallback(async()=>{ 
    setLoading(true);
        try{
        //const data=await fetch(YOUTUBE_API_URL+'&page=${page}');
        const data=await fetch(YOUTUBE_API_URL)
        const json=await data?.json();
        const response=json?.items;
        //implement infinite scrolling
        setVideoData(prev=>[...prev,...response]);
        
       //setPage(prevPage=>prevPage+1);
      }
      catch(error){
        console.log(error);
       }
          finally{
           setLoading(false);
          }
        },[page]
      )
    
    useEffect(()=>{
     getYoutubeVideos();
    },[])
    useEffect(()=>{
      const handleScroll=()=>{
        if(window.innerHeight+document.documentElement.scrollTop+1>=document.documentElement.scrollHeight){
          getYoutubeVideos();
        }
      };
      window.addEventListener('scroll',handleScroll);
    
      return()=>window.removeEventListener('scroll',handleScroll);
    },[getYoutubeVideos])
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

export default VideoContainer_InfiniteScroll