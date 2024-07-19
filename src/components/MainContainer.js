import React from 'react'
import Buttons from './Buttons'
import VideoContainer from './VideoContainer'
import Demo from './Demo'

const MainContainer = () => {
  //<Buttons />-ui pblm
  return (
        <div className="flex flex-wrap">
                 <div className='absolute top-24 m-1'>
                 <Buttons /></div>
                  <VideoContainer />
                  </div>
  )
}

export default MainContainer