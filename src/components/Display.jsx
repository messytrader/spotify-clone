import React, { useEffect, useRef } from 'react'
import { Routes,Route, useLocation } from 'react-router-dom'
import Displayhome from './Displayhome'
import AlbumShow from './AlbumShow'
import { albumdata } from '../assets/Album'

const Display = () => {
    const display=useRef();
    const location =useLocation()
    const isAlbum =location.pathname.includes("album");
    const albumid=isAlbum?location.pathname.slice(-1):"";
    const bgColor=albumdata[Number(albumid)].bgColor;
    useEffect(()=>{
        if(isAlbum){
            display.current.style.background=`linear-gradient(${bgColor},#121212)`
        }
        display.current.style.background=`#121212`
    })
  return (
    <div ref={display} className='w-[100%] px-6 m-2 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
      <Routes>
        <Route path='/' element={<Displayhome/>}/>
        <Route path='/album/:id' element={<AlbumShow/>}/>
      </Routes>
   
    </div>
  )
}

export default Display