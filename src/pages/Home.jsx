import React from 'react'
import LeftBar from '../components/LeftBar/LeftBar'
import Works from '../components/Works/Works'

function Home() {
  return (
    <div className='w-full border-t-[1px] mt-12'>
        <div className='flex w-full mt-8'>
            <LeftBar />
            <Works />
        </div>
    </div>
  )
}

export default Home