import { Avatar } from '@mui/material'
import React, {forwardRef} from 'react'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import RecyclingIcon from '@mui/icons-material/Recycling';
import SendIcon from '@mui/icons-material/Send';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import { selectUser } from '../../app/userSlice';
import { db } from '../../firebase'
import {   deleteDoc, doc,  } from 'firebase/firestore';

const Post = forwardRef(({name, id, description, avatar, onClick, message, deletePost}, ref) => {

    async function deletePost(){
        try {
          await deleteDoc(doc(db, 'posts', id));
          console.log('Document deleted successfully.');
        } catch (error) {
          console.error('Error deleting document:', error);
        }
      }
    
  return (
    <div ref={ref} className='flex flex-col w-[100%] gap-4 p-4 pt-3 pb-2 border-[0.1rem]  rounded-[0.7rem] bg-white'>
        <div className='flex flex-row justify-between items-start'>
            <div className='flex flex-row items-center gap-3'>
                <Avatar src={avatar}>{name? name[0].toUpperCase() : ''}</Avatar>
                <div className='flex mt-[-0.3rem] flex-col '>
                    <div className='font-semibold text-[0.9rem]'>{name}</div>
                    <div className='text-[0.75rem] mt-[-0.2rem] text-gray-500'>{description? description: 'Software engineer and Forex trader'}</div>
                </div>
            </div>
            <div className='flex flex-row mt-[-0.3rem]'>
                <div className='rounded-[50%] cursor-pointer p-1 hover:bg-gray-200'><MoreHorizIcon/></div>
                <div onClick={deletePost}  className='rounded-[50%] cursor-pointer p-1 hover:bg-gray-200'><CloseIcon/></div>
            </div>
        </div>
        <div className='text-[0.9rem]'>{message? message : 'This is a test message for the posts'}</div>
        <div className='flex flex-row flex-wrap border-t-[1px] pt-1 font-semibold text-[0.9rem] place-items-center justify-around text-gray-500'>
        <div className='postOption hover:bg-gray-200'><ThumbUpOutlinedIcon className='!w-[1.9rem]'/> Like</div>
            <div className='postOption hover:bg-gray-200'><SmsOutlinedIcon className=' !w-[1.9rem]'/> Comment</div>
            <div className='postOption hover:bg-gray-200'><RecyclingIcon className=' !w-[1.9rem]'/> Repost </div>
            <div className='postOption hover:bg-gray-200'><SendIcon className=' !w-[1.9rem]'/> Send </div>
            
        </div>
    </div>
  )
})

export default Post