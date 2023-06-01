import React, { useEffect, useRef, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import SmsIcon from '@mui/icons-material/Sms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOption from './HeaderOption';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useDispatch } from 'react-redux';
import { isMobileActive, isSearchActive, logout, selectUser, toggleMobileActive, toggleSearchActive } from '../../app/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useSelector } from 'react-redux';

const Header = () => {
  

  
  const inputRef = useRef(null)

  function focus() {
    inputRef.current.focus()
    
  }
 
  const [search, setSearch] = useState('')
  const user = useSelector(selectUser)
  const searchActive = useSelector(isSearchActive)
  const mobileSearch = useSelector(isMobileActive)
  const dispatch = useDispatch()
const logUserOut = ()=>{
  dispatch(logout())
  signOut(auth)
}
useEffect(()=>{
  focus()

},[searchActive])



  return (
    <div className='pt-2 h-[4rem] items-center sticky top-0 w-full z-[999] pl-3 pr-3 justify-between md:justify-evenly flex flex-row bg-white'>
      <div className='flex flex-row items-center gap-4' id='left-side'>
        <img className='w-[2.3rem]' src="/assets/linkedinLogo.svg" alt="logo" />
        <div onClick={()=>{
          dispatch(toggleMobileActive())
          dispatch(toggleSearchActive())
          focus()
          
          }} className={`hidden lg:flex flex-row h-[2.3rem] ${searchActive && 'lg:hidden'}  items-center bg-[#eef3f8] rounded-[0.3rem]`}>
          <SearchIcon className='ml-3 text-gray-400' />
          <input className='outline-none bg-transparent  pl-2' type="text" placeholder='Search' />
        </div>
        <div  className={` ${searchActive || mobileSearch? 'flex lg:w-full' : 'hidden'}  w-[85vw]  flex-row h-[2.3rem] border-[0.15rem] border-blue-500  items-center bg-[#eef3f8] rounded-[0.3rem]`}>
          <SearchIcon className='ml-3 text-gray-400' />
          <input ref={inputRef} value={search}  onChange={(e)=>setSearch(e.target.value)} className='outline-none bg-transparent w-full pl-2' type="text" placeholder='Search' />
        </div> 
        
        
        <div onClick={()=>{
          dispatch(toggleMobileActive())
           dispatch(toggleSearchActive())
         
          }} className={`${mobileSearch? 'hidden':'flex'} lg:hidden`}><HeaderOption Icon={SearchIcon} name='Search' /></div>

      </div>
      <div className={`${mobileSearch? 'hidden' : 'flex'} lg:flex flex-row gap-2 ' id='right-side`}>
        <HeaderOption Icon={HomeIcon} name='Home' />
        <HeaderOption Icon={GroupIcon} name='My Network' />
        <HeaderOption Icon={WorkIcon} name='Jobs' />
        <HeaderOption Icon={SmsIcon} name='Messaging' />
        <HeaderOption Icon={NotificationsIcon} name='Notifications' />
        <HeaderOption avatar={user?.avatar} isAvatar name='Me' isDropDown onClick={logUserOut} />

      </div>
    </div>
  )
}

export default Header