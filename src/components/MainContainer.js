import React from 'react'
import Buttons from './Buttons'
import VideoContainer from './VideoContainer'
import Demo from './Demo'

const MainContainer = () => {
  return (
    <div className="flex flex-wrap justify-center items-start">
      <div className="absolute top-24">
        <Buttons />
      </div>
      <div className="absolute top-72 mx-28">
        <VideoContainer />
      </div>
    </div>
  );
}

export default MainContainer