import React, { useEffect } from 'react';

import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/LeftSide/Sidebar';
import MiddleBar from './components/MiddleBar/MiddleBar';
import AddFeed from './components/RightSide/AddFeed';
import { useSelector } from 'react-redux';
import { accountAvailable, logout, login, selectUser } from './app/userSlice';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';

function App() {

  const user = useSelector(selectUser)
  const accountAvail = useSelector(accountAvailable)

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
        
        <div className='flex flex-row sticky  justify-center w-[100%] gap-5 p-4'>
            <Sidebar/>
            <MiddleBar />
            <AddFeed />
            
          </div>
          
      
      </div> }
    </div>
  )
}

export default App;
