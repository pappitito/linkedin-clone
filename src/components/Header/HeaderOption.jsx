import React from 'react'
import { Avatar } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useSelector } from 'react-redux';
import { selectUser } from '../../app/userSlice';


const HeaderOption = ({avatar, isAvatar, name, Icon, isDropDown, onClick}) => {

  const user = useSelector(selectUser)
  return (
    <div onClick={onClick} className='flex flex-col w-[6rem] cursor-pointer border-b-white items-center gap-0 text-gray-500 border-b-[0.2rem] active:border-b-black hover:text-black'>
        {Icon && <Icon  />}
        {isAvatar && <Avatar className='!w-[1.6rem] text-[0.6rem] mb-[-0.27rem] !h-[1.6rem] ' src={avatar}><div className='text-[0.8rem]'>{!avatar && user.name[0].toUpperCase()}</div></Avatar>}
        <div  className='text-[0.8rem] flex flex-row items-center gap-0'>{name}{isDropDown && <ArrowDropDownIcon />}</div>
    </div>
  )
}

export default HeaderOption