import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaHome, FaPlus, FaArrowRight } from "react-icons/fa";
import { BsStack } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="w-[25%] h-full p-3 flex-col gap-2  text-white hidden lg:flex ">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around ">
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <i>
            <FaHome />
          </i>
          <p className="font-bold">Home</p>
        </div>

        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <i>
            <CiSearch />
          </i>
          <p className="font-bold">Search</p>
        </div>
      </div>

      <div className="bg-[#121212] h-[85%] rounded ">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <i>
              <BsStack />
            </i>
            <p className="font-semibold">Your Library</p>
          </div>

          <div className="flex items-center gap-3">
            <i>
              <FaArrowRight />
            </i>
            <i>
              <FaPlus />
            </i>
          </div>
        </div>

        <div className="p-4 bg-[#242424] m-3 rounded font-semibold flex flex-col items-start justify-start pl-4 ">
          <h1>Create your first Playlist</h1>
          <p className="font-light">Its Easy to create</p>
          <button className="px-4 py-1.5 bg-white  text-[15px] text-black rounded-full mt-4 w-36 h-10">
            Create playlist
          </button>
        </div>

        <div className="p-4 bg-[#242424] m-3 rounded font-semibold flex flex-col items-start justify-start pl-4 ">
          <h1>Find Poscasts to follow</h1>
          <p className="font-light">Gotta get some podcasts</p>
          <button className="px-4 py-1.5 bg-white text-[15px]  text-black rounded-full mt-4 w-36 h-10">
            Listen Podcast
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
