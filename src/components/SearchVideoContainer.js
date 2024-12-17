import React from 'react';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SearchVideoContainer = ({ videoData }) => {
  const search = useSelector((store) => store.search.IsOpenSearch);

  if (!search) return null; // Avoid rendering when search is inactive

  return (
    <div
  className={`absolute left-0 w-full bg-white shadow-lg z-10 p-4 mt-36 transition-opacity duration-300 ${
    search ? 'opacity-100' : 'opacity-0 pointer-events-none'
  }`}
  aria-hidden={!search}
>
  {videoData.length > 0 ? (
    <div className="flex flex-col gap-4 w-screen">
      {videoData.map((videos) => (
        <Link key={videos.id.videoId} to={"/watch?v="+videos.id.videoId}>
          <VideoCard id={videos.id.videoId} video={videos} />
        </Link>
      ))}
    </div>
  ) : (
    <div className="w-full text-center text-gray-500">
      No results found.
    </div>
  )}
</div>

  );
};

export default SearchVideoContainer;
