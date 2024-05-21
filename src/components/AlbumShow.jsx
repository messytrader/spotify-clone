import React from 'react'
import Mainbar from './Mainbar'
import { useParams } from 'react-router-dom'
import { albumdata, songdata } from '../assets/Album'
import { FaClock } from "react-icons/fa";


const AlbumShow = () => {
    const {id}=useParams()
    const albumsdata=albumdata[id];
  return (
    <>
    <Mainbar/>
    <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
        <img src={albumsdata.image} alt=""  className='w-48 rounded'/>
        <div className='flex flex-col'> 
            <p>Playlist</ p>
            <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumsdata.name}</h2>
            <h4>{albumsdata.desc}</h4>
            <p className='mt-1'>
              <img src="spotify.svg" alt="" className='inline-block w-5' />
              <b>spotify</b>
              . 1,22,333
              . <b>50 Songs</b>
              about 2hr 30 mins
            </p>
        </div>
    </div>

    <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
        <p><b className='mr-4'>#</b>Title</p>
        <p>Album</p>
        <p className='hidden sm:block'>Date Added</p>
        <FaClock className='text-2xl'/>
    </div>
    <hr />
    {
        songdata.map((item,index)=>(
        <div key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
            <p className='text-white'>
            <b className='mr-4 text-[#a7a7a7] '>{index+1}</b>
            <img src={item.image} alt="" className='inline w-10 mr-5 rounded' />
            {item.name}
            </p>
            <p className='text-[15px]'>{albumsdata.name}</p>
            <p className='text-[15px] hidden sm:block'>5 days ago</p>
            <p className='text-[15px] text-center'>{item.duration}</p>
         </div>
        ))
    }
    </>
  )
}

export default AlbumShow