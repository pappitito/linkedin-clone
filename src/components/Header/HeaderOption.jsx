import React from 'react'
import { Avatar } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const HeaderOption = ({avatar, name, Icon, isDropDown}) => {
  return (
    <div className='flex flex-col w-[6rem] cursor-pointer border-b-white items-center gap-0 text-gray-500 border-b-[0.2rem] active:border-b-black hover:text-black'>
        {Icon && <Icon  />}
        {avatar && <Avatar className='!w-[1.33rem] !h-[1.33rem] ' src={avatar} />}
        <div className='text-[0.8rem] flex flex-row items-center gap-0'>{name}{isDropDown && <ArrowDropDownIcon />}</div>
    </div>
  )
}

export default HeaderOption