import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch,useSelector} from 'react-redux';
import { addMessage } from '../utils/chatMessagesSlice';
import { generate, generateString } from '../utils/helper';
const LiveChat = () => {
  const dispatch=useDispatch();
  const msgs=useSelector((store)=>store.chat.messages);
  const [inputMsg,typeMessages]=useState(null);
  
  //api polling:-
  const getData=(()=>{
   dispatch(addMessage({
    name:generate(),
    msg:generateString(10) +" 🚀"
   }))
  });
  useEffect(()=>{
    const timer=setInterval(()=>{
    getData()}
    ,2000);
    return()=>clearInterval(timer);
  },[])
  return (
    <>

    <div className='ml-2 h-[360px] p-2 border border-black w-full bg-slate-100 rounded-lg overflow-y-scroll'>
         
          <div className='flex flex-col-reverse'>
        {msgs.map((msg,index)=>(
        <ChatMessage key={index} name={msg.name} msg={msg.msg} />
        
      ))
      }
        </div>  
          
          </div>
          <form className='p-2 ml-2 w-full border border-black rounded-sm' onSubmit={(e)=>{
            e.preventDefault();
          dispatch(addMessage({
    name:"Deega",
    msg:inputMsg,
  }),
  typeMessages("")
  )}}>
          <input type="text" className='px-2 w-80' value={inputMsg} placeholder='Enter The msg...' onChange={(e)=>{typeMessages(e.target.value)}}/>
          <button className='px-2 mx-2 bg-green-100' >Send</button>
          </form>
          </>
          
  )
}

export default LiveChat