import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';

const Loader = () => {
  return (
    <div className='w-screen h-screen flex bg-white items-center justify-center gap-2 flex-col p-[2rem] '>
        <img className='w-[9.9rem]' src="/assets/logo.png" alt="logo" />
        <div className='w-[12rem]'>
            <LinearProgress />
        </div>


    </div>
  )
}

export default Loader