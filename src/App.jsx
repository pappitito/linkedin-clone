import React, { useEffect } from 'react';

import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/LeftSide/Sidebar';
import MiddleBar from './components/MiddleBar/MiddleBar';
import AddFeed from './components/RightSide/AddFeed';
import { useSelector } from 'react-redux';
import { accountAvailable, logout, login, selectUser, isSearchActive, toggleSearchActive, toggleMobileActive, toggleMobileInactive } from './app/userSlice';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';

function App() {

  const user = useSelector(selectUser)
  const accountAvail = useSelector(accountAvailable)
  const searchActive = useSelector(isSearchActive)

  const dispatch = useDispatch()

  useEffect(()=>{
    onAuthStateChanged(auth, (userCredentials)=>{
      if(userCredentials){
        dispatch(login({
          email: userCredentials.email,
          uid: userCredentials.uid,
          name: userCredentials.displayName,
          avatar: userCredentials.photoURL
        }))
        
      }
      else {
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className="App relative">
      {!user? accountAvail? <Login/> : <SignUp /> : <div>
        <Header />
        {searchActive && <div onClick={()=>{
          dispatch(toggleMobileInactive())
          dispatch(toggleSearchActive())
          }} className='absolute z-[200] w-[100vw] h-[100vh] bg-black opacity-30'></div>}
        <div className='flex flex-col md:flex-row   justify-center w-[100%] gap-5 p-4'>
            <div onClick={()=>test()}><Sidebar/></div>
            <div className='flex flex-col gap-5 lg:flex-row'>
                <MiddleBar />
                <div><AddFeed /></div>
            </div>
            
          </div>
          
      
      </div> }
    </div>
  )
}

export default App;
