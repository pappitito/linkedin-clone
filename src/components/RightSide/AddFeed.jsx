import React from 'react'
import AccountFollow from './AccountFollow'
import EastIcon from '@mui/icons-material/East';

const AddFeed = () => {
  return (
    <div className='flex flex-col sticky top-[4.6rem] mb-[3rem] min-w-[17.5rem] gap-3'>
        <div className='flex flex-col gap-3 w-[100%] p-3  items-start bg-white rounded-[0.7rem]' id='top'>
            <div className='font-semibold '>Add to your feed</div>
            <AccountFollow avatar={'/assets/unnamed.jpg'} name={'James Milner'} bio={'Forex Trader | Software Engineer'} />
            <AccountFollow avatar={'https://www.telegraph.co.uk/content/dam/films/2018/07/16/TELEMMGLPICT000003942113_trans_NvBQzQNjv4BqM37qcIWR9CtrqmiMdQVx7BCEN0plg5HXAKNmFjT8Pw0.jpeg?imwidth=1280'} name={'James Milner'} bio={'Forex Trader | Software Engineer'} />
            <AccountFollow avatar={'/assets/unnamed.jpg'} name={'James Milner'} bio={'Forex Trader | Software Engineer'} />
            <div className='flex flex-row gap-2 text-[0.9rem]  font-semibold rounded-[0.2rem] p-[0.1rem] pl-1 pr-1 text-gray-500 hover:bg-slate-200'>View all recommendations 
            <EastIcon className='!w-[1.3rem]'/> </div>
            

        </div>
        <div id='middle'>

        </div>
        <div id='bottom'>

        </div>
    </div>
  )
}

export default AddFeed