import React from 'react'
import { CiCircleChevRight,CiCircleChevLeft } from "react-icons/ci";
import { FaBell } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Mainbar = () => {
    const navigate=useNavigate()

  return (<>
  <div className='w-full flex flex-col gap-3'>
    <div className='w-full flex justify-between items-center font-semibold '>
        <div className='flex items-center gap-2'>
         <CiCircleChevLeft  className='text-5xl bg-black rounded-full outline-none p-2 border-none cursor-pointer ' onClick={()=>navigate(-1)}/>
         <CiCircleChevRight className='text-5xl bg-black rounded-full outline-none p-2 border-none cursor-pointer'onClick={()=>navigate(1)} />
        </div>
        <div className='flex items-center gap-3'>
         <p className='w-44 h-10 bg-[#242424] rounded-lg text-center px-1 py-1.5'>Upgrade Premium</p>
         <FaBell className='text-xl cursor-pointer bg-black  items-center'/>
         <p className='bg-gray-500 rounded-full cursor-pointer w-10 h-10 text-center py-1.5 text-xl'>R</p>
        </div>
    </div>
    <div className='flex items-center gap-3'>
            <p className='bg-white text-black px-4 py-1 rounded-2xl '>ALL</p>
              <p className='bg-black px-4 py-1 rounded-2xl'>Music</p>
              <p className='bg-black px-4 py-1 rounded-2xl '>Podcast</p>
        </div>
    </div>
    </>
  )
}

export default Mainbar