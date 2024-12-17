import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeSidebar } from '../utils/navSlice';
import { useSearchParams } from 'react-router-dom';
import LiveChat from './LiveChat';
import Overview from './Overview';
import CommentsContainer from './CommentsContainer';

const WatchContainer = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('v');
  const search = useSelector((store) => store.search.IsOpenSearch);

  useEffect(() => {
    dispatch(closeSidebar());
  }, [dispatch]);

  if (!id) {
    return <div className="text-center text-red-500">Invalid video ID!</div>;
  }

  return (
    <div
      className={`absolute top-0 left-0 w-full bg-white shadow-lg z-10 flex flex-col p-6 transition-opacity duration-300 opacity-100`}
    >
      {/* Main layout with video and live chat */}
      <div className="flex flex-col md:flex-row">
        {/* Video Section */}
        <div className="flex-1 w-full md:w-3/4 p-4">
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <Overview videoId={id} />
        </div>

        {/* Live Chat Section */}
        <div className="w-full md:w-1/4 p-4 md:border-l border-gray-300 h-screen overflow-y-auto">
          <LiveChat />
        </div>
      </div>

      {/* Comments Section */}
      <div className="w-full mt-6">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchContainer;
