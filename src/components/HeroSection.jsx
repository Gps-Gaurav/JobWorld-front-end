import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';
import {Bio} from '../utils/constant'
import Typewriter from "typewriter-effect";

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
                <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#006989] hover:text-orange-400 ... font-medium'>Find What's next </span>
                <h1 className='text-5xl font-bold text-[#10375C]'>
                <Typewriter
                      options={{
                        strings: Bio.scripts,
                        autoStart: true,
                        loop: true,
                      }}
                    />& Get Your
                   <span className='text-[#006989]'> Dream Jobs</span></h1>
                <p className='text-sky-500' >
                <Typewriter
                      options={{
                        strings: Bio.desc,
                        autoStart: true,
                        loop: true,
                      }}/>
                      </p>
                <div className='flex w-[40%] shadow-lg pl-3 rounded-full items-center gap-4 mx-auto'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full rounded-full border-gray-200 bg-gray-100 p-2'

                    />
                    <Button onClick={searchJobHandler} className="rounded-full bg-[#006989]">
                        <Search className='h-5 w-5' />
                    </Button>
                  
                </div>
                </div>
               
        </div>
    )
}

export default HeroSection