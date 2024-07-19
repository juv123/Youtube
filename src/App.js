import logo from './logo.svg';
import './App.css';
import Body from './components/Body';
import { Provider } from 'react-redux';
import Store from './utils/Store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WatchContainer from './components/WatchContainer';
import MainContainer from './components/MainContainer';
import Demo from './components/Demo';
import Demo1 from './components/Demo1';
const appRouter=createBrowserRouter([{
  path:"/",
  element:<Body />,
  children:
  [
    {
  
    path:"/",
  element:<MainContainer />
},
{
  
  path:"/watch",
element:<WatchContainer />
},
{
path:"/Demo",
element:<Demo1 />
},

  ]
}
])
function App() {
  return (
    <Provider store={Store} >
    <div>
       <RouterProvider router={appRouter} />
       </div>
    </Provider>
   
  );
}

export default App;
