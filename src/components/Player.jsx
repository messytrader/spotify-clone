import React from 'react'
import { FiPlusCircle } from "react-icons/fi";
import { FaShuffle,FaCirclePlay  } from "react-icons/fa6";
import { IoPlaySkipForward,IoPlaySkipBack } from "react-icons/io5";
import { MdOutlineSmartDisplay,MdSpeakerGroup ,MdVoicemail,MdOutlineZoomInMap } from "react-icons/md";
import { CgMiniPlayer } from "react-icons/cg";
import { FaMicrophone } from "react-icons/fa";
import { HiMiniQueueList } from "react-icons/hi2";
import { SlLoop } from "react-icons/sl";
const Player = () => {
  return (
    <div className='h-[10%] bg-black flex justify-evenly items-center text-white px-4'>
        <div className='hidden lg:flex items-center gap-4 '>
         <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7778/1710554557778-h" alt="" className='w-12 h-10 rounded-lg' />
          <div>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem, ipsum dolor.</p>
          </div>
          <i><FiPlusCircle/></i>
        </div>
        
        <div className='flex flex-col items-center gap-1 m-auto '>
           <div className='flex gap-3 cursor-pointer'>
             <FaShuffle className='w-4 cursor-pointer'/>
             <IoPlaySkipBack className='w-4 cursor-pointer'/>
             <FaCirclePlay className='w-4 cursor-pointer'/>
             <IoPlaySkipForward className='w-4 cursor-pointer '/> 
             <SlLoop className='w-4 cursor-pointer'/>
           </div>

           <div className='flex items-center gap-4'>
            <p>0.00</p>
            <div className='w-[60vw] max-w-[500px] bg-gray-300 rounded cursor-pointer'>
              <hr className='h-1 border-none w-0 bg-green-700 rounded-full'/>
            </div>
            <p>1.00</p>
           </div>
        </div>

        <div className='flex items-center gap-3'>
            <FaMicrophone/>
            <HiMiniQueueList/>
            <CgMiniPlayer/>
            <MdSpeakerGroup/>
            <MdVoicemail/>
            <div className='w-20  bg-slate-300 rounded cursor-pointer'>
              <hr className='h-1 border-none w-0 bg-green-700 rounded-full'/>
            </div>
            <MdOutlineSmartDisplay/>
            <MdOutlineZoomInMap/>

        </div>
    </div>
  )
}

export default Player