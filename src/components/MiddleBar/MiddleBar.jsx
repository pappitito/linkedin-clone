import React from 'react'
import StartPost from './StartPost'
import Post from './Post'
import Feed from './Feed'

const MiddleBar = () => {
  return (
    <div className='flex w-[100&] md:w-[60vw] lg:w-[37vw] md:max-w-[38rem] gap-4 flex-col'>
        <StartPost />
        <Feed />
       

    </div>
  )
}

export default MiddleBar