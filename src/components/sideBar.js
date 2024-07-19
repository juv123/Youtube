import React from 'react'
import { HAMBURGER_ICON, YOUTUBE_ICON } from '../utils/Constants'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
   const menu=useSelector((store)=>store.nav.IsOpenSidebar);
  //console.log(menu)
  ///const sidebar_menus=["Home","Shorts","Subscriptions","You","History","Trending","Shopping","Movies","Live","sports"];
 
  if(!menu) return null;
  return (
     <div className='-my-24 mx-3 shadow-lg w-32 h-auto'>
      <div className='flex flex-col justify-center py-2 my-2 w-48 text-justify'>
      <ul className='py-5'>
       <Link to="/"> <li>🏠Home</li></Link>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <hr className='w-32 '/>
      <h1 className='font-bold pt-5'>You {'>'}</h1>
        <ul>
        <li>Your Channel</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>⏲ Watch later</li>
        <li>👍 Liked Videos</li>
      </ul>
      <br />
      <hr className='w-32 '/>
      <h1 className='font-bold pt-5'>Explore</h1>
      <ul className='px-1 py-2'> 
        <li>Trending</li>
        <li>Shopping</li>
        <li>🎵 Music</li>
        <li>🎬 Movies</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>📰 News</li>
        <li>🏅 Sports</li>
        <li>Courses</li>
        <li>Fashion & Beauty</li>
        <li>Podcasts</li>
      </ul>
      

    </div>

    </div>
    
  )
   }


export default Sidebar