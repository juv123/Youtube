import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";
const VideoCard = ({ video }) => {
  const isSidebarOpen = useSelector((store) => store.nav.IsOpenSidebar);
  const { snippet, statistics } = video;
  const { title, channelTitle, thumbnails } = snippet;

  return (
    <div className={`p-4 rounded-lg h-72 md:h-64 w-screen ${isSidebarOpen ? 'md:w-1/2 lg:w-[80%]' : 'md:w-1/3 lg:w-1/4'} 
   mx-auto `}>
      <div className="rounded overflow-hidden h-52 w-72 shadow-sm bg-transparent">
      <motion.img 
  src={thumbnails?.medium?.url} 
  alt="Thumbnail" 
  className="w-72 h-32 object-cover"  whileHover={{ scale: 1.05, y: -5 }}
  transition={{ type: "spring", stiffness: 300 }}
/>
        <div className="px-4 py-2">
          <h2 className="font-bold text-lg truncate">{title}</h2>
          <p className="text-sm text-gray-700 truncate">{channelTitle}</p>
          <p className="text-sm text-gray-600">{statistics?.viewCount} views</p>
        </div>
      </div>
    </div>
  );
};

// Higher-order component
export const HigherOrderComponent = ({ video }) => {
  return (
    <div>
      <VideoCard video={video} />
    </div>
  );
}

export default VideoCard;