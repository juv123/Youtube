import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch,useSelector} from 'react-redux';
import { addMessage } from '../utils/chatMessagesSlice';
import { generate, generateString } from '../utils/helper';
const LiveChat = () => {
  const dispatch=useDispatch();
  const msgs=useSelector((store)=>store.chat.messages);
  const [inputMsg,typeMessages]=useState(null);
  const search=useSelector((store)=>store.search.IsOpenSearch);//to find if search=true ie show search results
  //api polling:-
  const getData=(()=>{
   dispatch(addMessage({
    name:generate(),
    msg:generateString(10) +" 👍"
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

<div
        className={`w-auto bg-white shadow-lg z-10 flex flex-wrap p-4 transition-opacity duration-300 opacity-100`}
      >
         
          <div className='flex flex-col-reverse'>
        {msgs.map((msg,index)=>(
        <ChatMessage key={index} name={msg.name} msg={msg.msg} />
        
      ))
      }
        </div>  
          
          </div>
          <form
  className="p-2 ml-2 w-full border border-black rounded-sm flex items-center"
  onSubmit={(e) => {
    e.preventDefault();
    if (!inputMsg.trim()) return; // Prevent sending empty messages
    dispatch(
      addMessage({
        name: "Deega",
        msg: inputMsg.trim(), // Trim any unnecessary spaces
      })
    );
    typeMessages(""); // Clear the input after dispatch
  }}
>
  <input
    type="text"
    className="px-2 w-3/4 border border-gray-300 rounded-sm"
    value={inputMsg}
    placeholder="Enter the message..."
    onChange={(e) => typeMessages(e.target.value)}
  />
  <button
    type="submit"
    className="px-4 mx-2 bg-green-100 rounded-sm hover:bg-green-200 transition"
  >
    Send
  </button>
</form>

          </>
          
  )
}

export default LiveChat