import React, { useEffect, useState } from 'react'
import { COMMENTS_API_URL } from '../utils/Constants';
import { Link } from 'react-router-dom';
import { Replies } from './Replies';
import { useDispatch } from 'react-redux';
import { toggleReplies } from '../utils/navSlice';

const Comment = ({videoId}) => {
  const [comments_array,fetchComments]=useState([]);
  const dispatch=useDispatch();
  const replies="replies"
    const getComments=async()=>{
    const data=await fetch(COMMENTS_API_URL+'&videoId='+videoId);
    const json=await data.json();
    fetchComments(json.items);
    //console.log(json.items[5].snippet.topLevelComment.snippet.textDisplay);
    //console.log(json.items[5].snippet.topLevelComment.snippet.authorDisplayName);
        }
       const handleReplies=()=>{
        dispatch(toggleReplies());
       } 
    useEffect(()=>{
    getComments();
    },[]);
  return (
    <div className='flex flex-col text-justify justify-center w-2/3'>
     
     {comments_array.length>0 && comments_array.map((comment)=>(
          <ul  key={comment.id} className='px-0 py-0 mx-2 my-2'>
            <img className='p-0 rounded-full' src={comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} />
        <li>{comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}</li>
      <li>{comment?.snippet?.topLevelComment?.snippet?.textDisplay}</li>
        <li><a onClick={handleReplies} className="text-blue-600">{comment?.snippet?.totalReplyCount>0 && comment?.snippet?.totalReplyCount + " " +replies } </a></li>
       <Replies replies={comment?.replies?.comments} />
      </ul>
      
      )
      )}
    
      </div>
       
  )
}

export default Comment;