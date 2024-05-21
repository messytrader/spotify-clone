import React from 'react'
import Mainbar from '../components/Mainbar'
import {albumdata} from '../assets/Album'
import { songdata } from '../assets/Album'
import Album from './Album'
import Song from './Song'

const Displayhome = () => {
  return (
  <>
  <Mainbar/>
  <div className='mb-4'>
    <h1 className='my-5 font-bold text-2xl'>Featued Chart</h1>
    <div className='flex overflow-auto'>
    {albumdata.map((item,index)=>(<Album key={index} image={item.image} name={item.name} desc ={item.desc.slice(0,10)} id={item.id}/>))}
    </div>
   
  </div>

  <div className='mb-4'>
    <h1 className='my-5 font-bold text-2xl'>Featued Chart</h1>
    <div className='flex overflow-auto'>
    {songdata.map((item,index)=>(<Song key={index} image={item.image} name={item.name} desc ={item.desc.slice(0,10)} id={item.id}/>))}
    </div>
   
  </div>
  </>
  )
}

export default Displayhome