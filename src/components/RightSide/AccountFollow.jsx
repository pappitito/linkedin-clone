import { Avatar } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const AccountFollow = ({avatar, name, bio}) => {
  return (
    <div className='flex flex-row gap-2'>
        <Avatar className='!w-[3rem] !h-[3rem] cursor-pointer'  src={avatar && avatar} />
        <div className='flex flex-col gap-1'>
            <h2 className='text-[1rem] font-semibold '>{name}</h2>
            <h4 className='text-[0.75rem] text-gray-500'>{bio}</h4>
            <div className='flex text-[0.9rem] cursor-pointer flex-row border-[0.1rem] border-gray-600 max-w-[6rem] hover:border-[0.16rem] hover:bg-gray-200 h-[2.2rem] pl-1 pr-2 justify-center rounded-[1.5rem] items-center '>
                <AddIcon className='!h-[1.2rem]' />
                Follow 
            </div>

        </div>

    </div>
  )
}

export default AccountFollow