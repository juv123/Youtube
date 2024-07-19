import React from 'react'
import { useSelector } from 'react-redux'

export const Replies = ({replies}) => {
  const repliesOpen=useSelector(store=>store.nav.IsOpenReplies);
  if(!repliesOpen) return null;
  return (
  
  <div className='flex flex-col text-justify justify-center w-2/3'>
 {replies?.length>0 && replies.map((reply)=>(
      <ul  key={reply.id} className='px-0 py-0 mx-2 my-2'>
        <img className='p-0 rounded-full' src={reply?.snippet?.authorProfileImageUrl} />
    <li>{reply?.snippet?.authorDisplayName}</li>
  <li>{reply?.snippet?.textDisplay}</li>
     </ul>
  
  )
  )}

  </div>
   )
}
