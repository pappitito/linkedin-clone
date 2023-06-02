import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FeedIcon from '@mui/icons-material/Feed';
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from 'react-redux';
import { selectUser } from '../../app/userSlice';

const Sidebar = () => {
    const user = useSelector(selectUser)
    const [showMore, setShowMore] = useState(false)

  return (
    <div className='flex flex-col sticky top-[4.6rem] mb-[-0.7rem] z-[100] gap-2'>
        <div className='flex text-[0.75rem] text-gray-500 border-[0.1rem] flex-col  items-center w-full md:w-[14.5rem]  bg-white rounded-[0.7rem]'  id='sidebar top'>
            <img className='h-[4rem] w-[100%] object-cover mb-[-2rem] rounded-t-[0.6rem] ' src="/assets/unnamed.jpg" alt="" />
            <Avatar className='border-white border-[0.2rem]  !w-[4rem] !h-[4rem]' src={user.avatar}>{user.name? user.name[0].toUpperCase() : ''}</Avatar>
            <h2 className='text-[1.05rem] text-black pl-2 pr-2 mt-[1.2rem] font-semibold'>{user.name}</h2>
            <h4 className='text-[0.75rem] mt-1 pl-3 pr-3 mb-[1rem] text-center'>Electrical and Electronics graduate from covenant university</h4>

            <div className={` flex ${showMore? 'flex' : 'hidden'} md:flex font-semibold text-[0.75rem] leading-6 border-t-[0.07rem] border-b-[0.07rem] pt-3 pb-3  gap-0 w-full flex-col `} id='stats'>
                <div className='flex flex-row hover:bg-gray-200 cursor-pointer p-[0.1rem] pr-3 pl-3 justify-between'>Who's viewed your profile <span className='text-[#0966C2]'>15</span></div>
                <div className='flex flex-row hover:bg-gray-200 cursor-pointer p-[0.1rem] pr-3 pl-3 justify-between'>Impressions of your post <span className='text-[#0966C2]'>125</span></div>
            </div>

            <div className={`group flex ${showMore? 'flex' : 'hidden'} md:flex  hover:bg-gray-200 cursor-pointer  border-b-[0.07rem] p-3  mt-[0rem] gap-2 w-full flex-col`}>
                <h4>Access exclusive tools & insights</h4>
                <div className='flex mt-[-0.4rem] flex-row gap-2 items-center'>
                    <div className='w-[0.8rem] h-[0.8rem] bg-yellow-500 rounded-[0.2rem]'></div>
                    <div className='child font-semibold text-black underline'>Try Premium for free</div>
                </div>

            </div>
            <div className={`w-full flex ${showMore? 'flex' : 'hidden'} md:flex  items-center font-semibold pl-3 rounded-b-[0.6rem] cursor-pointer  hover:bg-gray-200 h-[2.5rem] `}><BookmarkIcon/> My Items</div>


        </div>

        <div className={`flex ${showMore? 'flex' : 'hidden'} md:flex  text-[0.75rem] text-gray-500 border-[0.1rem] flex-col  w-full md:w-[14.5rem] bg-white rounded-[0.7rem]`} id='sidebar bottom'>
            <h2 className='p-3 text-black'>Recent</h2>
            <div className='pl-3 pr-3  cursor-pointer p-[0.1rem] flex flex-row gap-2 mt-[-0.5rem] hover:bg-gray-200 hover:text-black font-semibold items-center'><FeedIcon className='!w-[1rem]'/> ML accurate predicting...</div>
            <div className='p-3 gap-3 font-semibold flex flex-col text-blue-700 '>
                <div className='hover:underline cursor-pointer'>Groups</div>
                <div className='flex flex-row w-full items-center justify-between'><span className='hover:underline cursor-pointer'>Events</span> <AddIcon className='text-gray-500 cursor-pointer' /></div>
                <div className='hover:underline'>Followed Hashtags</div>
            </div>
            <div className='font-bold text-[0.85rem] p-3 text-center rounded-b-[0.6rem] cursor-pointer border-t-[0.07rem]  hover:bg-gray-200'>Discover more</div>

        </div>
        <div onClick={()=>setShowMore((prev)=>!prev)} className='font-bold text-[0.85rem] md:hidden p-1 hover:bg-gray-200 text-gray-500 cursor-pointer text-center'>{showMore? 'Show less' : 'Show more'}</div>
    </div>
  )
}

export default Sidebar