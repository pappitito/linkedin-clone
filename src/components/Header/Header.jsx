import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import SmsIcon from '@mui/icons-material/Sms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOption from './HeaderOption';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useDispatch } from 'react-redux';
import { logout, selectUser } from '../../app/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useSelector } from 'react-redux';

const Header = () => {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()
const logUserOut = ()=>{
  dispatch(logout())
  signOut(auth)
}

  return (
    <div className='pt-2 items-center sticky top-0 w-full z-[999] justify-evenly flex flex-row bg-white'>
      <div className='flex flex-row items-center gap-4' id='left-side'>
        <img className='w-[2.3rem]' src="/assets/linkedinLogo.svg" alt="logo" />
        <div className='flex flex-row h-[2.3rem] items-center bg-[#eef3f8] rounded-[0.3rem]'>
          <SearchIcon className='ml-3 text-gray-400' />
          <input className='outline-none bg-transparent pl-2' type="text" placeholder='Search' />
        </div>

      </div>
      <div className='flex flex-row gap-2 ' id='right-side'>
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