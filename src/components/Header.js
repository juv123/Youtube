import React, { useEffect, useState } from 'react'
import { HAMBURGER_ICON, SEARCH_API, SEARCH_QUERY_SUGGESTION_API, SEARCH_VIDEO_API, USER_ICON, YOUTUBE_ICON } from '../utils/Constants'
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../utils/navSlice';
import { Link, json } from 'react-router-dom';
import { cacheResults, toggleSearch} from '../utils/searchSlice';
import VideoCard from './VideoCard';
import SearchVideoContainer from './SearchVideoContainer';

const Header = () => {
  const dispatch=useDispatch();
  const [searchQuery,setSearchQuery]=useState("");
  const [searchResult,setSearchResult]=useState([]);
  const [showSuggestions,setShowSuggestions]=useState(false);
  const [videoResults,setVideoResults]=useState([]);
  const cacheSearch=useSelector((store)=>store.search);
    //console.log(searchQuery);
      const handleMenu=()=>{
       dispatch(toggleSidebar());
      };
     
   const handleSearch = async()=>{
    try {
           
        const data=await fetch(SEARCH_QUERY_SUGGESTION_API + searchQuery);
        if (!data.ok) {
          throw new Error('Network response was not ok');
         }
         const json=await data?.json();
         console.log(json[1])
         setSearchResult(json[1]);
         dispatch(cacheResults({
           [searchQuery]:json[1],
         }))
       }
       catch (error) {
        console.error('Fetch error: ', error);
         }
    //console.log(SEARCH_QUERY_SUGGESTION_API + searchQuery);
   
    
    //update cache
    //console.log(searchResult)
   };
   const handleSearchResults=async()=>{
    if(!searchQuery) return null;
    const data=await fetch(SEARCH_VIDEO_API+"&q="+searchQuery);
    const json=await data.json();
    //console.log(json.items);
    dispatch(toggleSearch());
    setVideoResults(json?.items);
    
   }
   const handleListClick=(suggestion)=>{
    setSearchQuery(suggestion);
    console.log(suggestion)
   }
   
   useEffect(()=>{
    const timer=setTimeout(()=>{
      if(cacheSearch[searchQuery]){
        setSearchResult(cacheSearch[searchQuery]);
      }
      else{
       handleSearch();
      }
    },200);//Debouncing-decline api call if diff b/w keystrokes <200ms
    
    return()=>clearTimeout(timer)
   },[searchQuery])
  return (
  
    <div className='px-10 py-10 m-7 flex flex-row'>
        <img src={HAMBURGER_ICON} className='w-10 pr-1 cursor-pointer' onClick={handleMenu}/>
    <img src={YOUTUBE_ICON} className='w-10 pr-4 mx-1' />
    <input 
  type="text" 
  className="rounded-l-full px-5 w-1/2 h-7 border border-zinc-500" 
  value={searchQuery} 
  onFocus={() => setShowSuggestions(true)} 
  onBlur={() => setTimeout(() => setShowSuggestions(false), 100)} 
  onChange={(e) => setSearchQuery(e.target.value)} 
  placeholder='Search' 
/>
<button className="border-2 rounded-r-lg pr-2 h-7 border-zinc-500" onClick={handleSearchResults}>🔍</button>

{showSuggestions && (
  <div className='absolute z-10 bg-white py-5 mx-[5rem] my-[2rem] shadow-lg rounded-lg h-screen w-[43%]'>
    <ul>
      {searchResult.map((suggestion) => (
        <li 
          key={suggestion} 
          className='px-5 py-5 shadow-sm hover:bg-gray-100 h-16 cursor-pointer'  
          onMouseDown={() => handleListClick(suggestion)}>
          🔍 {suggestion}
        </li>
      ))}
    </ul>
  </div>
)}
      
      <a><img src={USER_ICON} className='w-16 h-11 mx-4 -my-2'/></a>
      {videoResults  &&
      <div className="flex flex-wrap bg-white">
    <SearchVideoContainer videoData={videoResults} />
      </div>
}

             </div>
    
     
   
       
  )
}

export default Header