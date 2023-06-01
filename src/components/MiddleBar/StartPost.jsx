import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ArticleIcon from '@mui/icons-material/Article';
import { db } from '../../firebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { doc, addDoc, Timestamp } from "firebase/firestore"; 
import { useSelector } from 'react-redux';
import { selectUser } from '../../app/userSlice';



const StartPost = () => {
  const [message, setMessage] = useState('')
  const user = useSelector(selectUser)

  const handlePost = async(e)=>{
    e.preventDefault()

   try {
    const newUserDocRef = await addDoc(collection(db, 'posts'), {
      name: user.name,
      description: 'Future robotics engineer',
      message: message,
      avatar: user.avatar || '',
      timestamp: Timestamp.now()
    });
    setMessage('')
   } catch (error) {
    console.log(error);
   }

     

  
  }
  return (
    <div className='flex flex-col w-[100%] text-[0.9rem] font-semibold p-4 pt-3 pb-2 border-[0.1rem] gap-2 rounded-[0.7rem] bg-white '>
        <div className='flex flex-row items-center gap-3'>
            <Avatar className='font-normal' src={user.avatar}>{user.name? user.name[0].toUpperCase() : ''}</Avatar>
            <form className='border-[0.09rem] w-full justify-between h-[3rem] rounded-[1.5rem]  pl-4 pr-4 border-gray-400 flex flex-row items-center'>
                <input className='outline-none h-full w-full bg-transparent' type="text" placeholder='Start a post' value={message}
                      onChange={(e)=> setMessage(e.target.value)} />
                <button onClick={handlePost} type='submit'></button>
            </form>
        </div>

        <div className='flex flex-row flex-wrap place-items-center justify-around text-gray-500'>
            <div className='postOption hover:bg-gray-200'><CropOriginalIcon className='text-[#378FE9] !w-[1.9rem]'/> Photo </div>
            <div className='postOption hover:bg-gray-200'><SmartDisplayIcon className='text-[#609B41] !w-[1.9rem]'/> Video </div>
            <div className='postOption hover:bg-gray-200'><EventAvailableIcon className='text-[#C37D16] !w-[1.9rem]'/> event </div>
            <div className='postOption hover:bg-gray-200'><ArticleIcon className='text-[#E16745] !w-[1.9rem]'/> Write article </div>

        </div>

    </div>
  )
}

export default StartPost