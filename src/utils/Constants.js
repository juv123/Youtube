export const YOUTUBE_ICON="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-YeoYyfM0RWeAHk-LQxGXfUcGAOAC8HqbNw&usqp=CAU"
export const USER_ICON="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmNphLvPzUU-hNqLT-TGqlDiW13F6_NQ52JxLGRquJTA&s"
export const HAMBURGER_ICON="https://cdn-icons-png.flaticon.com/128/9663/9663120.png"
const GOOGLE_API_KEY='AIzaSyBhfT1Qw1o73fTyo34l8YuXea8_S-RqSSA';
export const YOUTUBE_API_URL='https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails&part=snippet&part=statistics&chart=mostPopular&maxResults=50&regionCode=IN&key='+GOOGLE_API_KEY;
export const COMMENTS_API_URL='https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&part=replies&maxResults=100&key='+GOOGLE_API_KEY;
export const OVERVIEW_API_URL='https://www.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&maxResults=100&key='+GOOGLE_API_KEY;
export const SEARCH_QUERY_SUGGESTION_API='http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';
export const SEARCH_VIDEO_API= "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&regionCode=IN&key="+GOOGLE_API_KEY;
export const OFFSET_LIVE_CHAT=25;