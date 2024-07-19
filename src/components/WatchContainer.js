import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeSidebar } from '../utils/navSlice';
import { useSearchParams } from 'react-router-dom';
import Comments from './Comment';
import Comment from './Comment';
import Overview from './Overview';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchContainer = () => {
    const dispatch=useDispatch();
    useEffect(()=>{
   dispatch(closeSidebar());
    },[])
    const [searchParams]=useSearchParams();
    const id=searchParams.get("v");
    //<Comment videoId={id} /> : aftter <Overview> <CommentsContainer>-hardcoded comments using debouncing,recursion,caching
      return (
        <div className='flex flex-col'>
    <div className='px-5'>
      <div className='flex'>
<iframe width="640" height="360" src={"https://www.youtube.com/embed/"+id+"?si=0pL6XLyfZCpodyHd&autoplay=1"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin allowfullscreen"></iframe>
<div className=''>
  <LiveChat />
  </div>
  
</div>
<Overview videoId={id} />
   
    </div>
    <div className='text-left bottom-0 py-32'>
    <CommentsContainer /> 
    </div>
    </div>
    
      )
}

export default WatchContainer