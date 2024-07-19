import React, { useEffect } from 'react'

const ChatMessage = ({name,msg}) => {
  
  return (
    <div>
        <div className='flex items-center text-justify pb-2 shadow-sm'><img src="https://yt3.ggpht.com/ytc/AIdro_l5LLkTg-D-orAjIv3QnONs9TM45y_AotBXm2mRPRn4eltxYktPs1EaE6EeEfGMXSfLHQ=s88-c-k-c0x00ffffff-no-rj" className='w-8 h-8 rounded-full'/><p className='pl-2'>{name} : {msg}</p></div>
           </div>
  )
}

export default ChatMessage