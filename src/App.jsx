import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/LeftSide/Sidebar';
import MiddleBar from './components/MiddleBar/MiddleBar';
import AddFeed from './components/RightSide/AddFeed';
import { useSelector } from 'react-redux';
import { selectUser } from './app/userSlice';
import Login from './components/Login';

function App() {

  const user = useSelector(selectUser)

  return (
    <div className="App">
      {!user? <Login/> : <div>
        <Header />
        <div className='flex flex-row justify-center w-[100%] gap-5 p-4'>
            <Sidebar/>
            <MiddleBar />
            <AddFeed />
          </div>
      
      </div> }
    </div>
  )
}

export default App;
