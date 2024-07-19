import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const VideoCard = ({video,id}) => {
  const menu=useSelector((store)=>store.nav.IsOpenSidebar);
     const {snippet,statistics}=video;
    const {title,channelTitle,description,thumbnails}=snippet;
  if(!menu){ // hamburg menu is opened
    return (
      <div className='w-56 mx-1 my-36 px-10 py-10 h-80 mb-2 mt-4'>
       <img src={thumbnails?.medium?.url} className="rounded-lg" alt="can't be loaded" />
       <ul className='text-center'>
         <li className='italic overflow-x-hidden overflow-y-hidden text-lg'>{title}</li>  
          <li className='overflow-hidden'>{channelTitle}</li>
         <li className='overflow-hidden'>{statistics?.viewCount} views</li>
              
       </ul>
       </div>
       
     ) 
  }
     else{

     return (
   <div className='relative -top-96 w-56 mx-28 mr-0 px-8 h-52 mb-24 mt-0'>
    <div className='rounded-sm hover:bg-zinc-500'>
    <img src={thumbnails?.medium?.url} className="rounded-lg" alt="can't be loaded" />
    </div>
    
    <ul className='text-center'>
      <li className='overflow-x-hidden overflow-y-hidden'>{title}</li>  
       <li className='overflow-hidden'>{channelTitle}</li>
      <li className='overflow-hidden'>{statistics?.viewCount} views</li>
           
    </ul>
    </div>
    
  )
}
};
//higher order component:-
export const HigherOrderComponent=({video,id}) =>{
  return (
    <div className='font-bold bg-transparent shadow-lg text-neutral-600'>
      <VideoCard  video={video} id={id}/>
           
    </div>
  );
}
export default VideoCard;
