import React from 'react'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const SearchVideoContainer= ({videoData}) => {
  const search=useSelector((store)=>store.search.IsOpenSearch);//to find if search=true ie show search results
      return (
        <div className='absolute left-5 top-96 w-56 px-5 py-56 h-80'>
     
      {videoData.length>0 && search &&
            videoData.map((videos)=> <Link key={videos.id.videoId} to={"/watch?v="+videos.id.videoId}> <VideoCard  id={videos.id.videoId} video={videos} /></Link>)
   
      }
    </div>
    
  )
}

export default SearchVideoContainer