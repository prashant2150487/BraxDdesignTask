import React, { useContext } from 'react'
import { MdBarChart } from "react-icons/md";
import { LuBarChartHorizontal } from "react-icons/lu";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { ColorContext } from './ColorProvider';


const Service = () => {
    const { color } = useContext(ColorContext);
    return (
        <div className='flex flex-wrap justify-center gap-x-20 min-h-80 items-center p-5'>
            <div className='flex gap-5 max-w-[300px]'>
                <div className='p-5 rounded-full text-white text-4xl h-fit w-fit' style={{ backgroundColor: color }}>
                    <MdBarChart  />
                </div>
                <div className=''>
                    <h3 className='font-bold text-2xl'>Services</h3>
                    <p className='mt-3'>lorem fwkefwe fka kiofewf noegewj fnewf.</p>
                    <button className='bg-green-200 mt-5 rounded-xl  px-5 py-2 font-bold text-white'  style={{ backgroundColor: color }}>Read more</button>
                </div>
            </div>
            <div className='flex gap-5  max-w-[300px]'>
                <div className='p-5 rounded-full text-white text-4xl h-fit w-fit' style={{ backgroundColor: color }}>
                    <LuBarChartHorizontal />
                </div>
                <div>
                    <h3 className='font-bold text-2xl'>Services</h3>
                    <p className='mt-3'>lorem fwkefwe fka kiofewf noegewj fnewf.</p>
                    <button className='bg-green-200 mt-5 rounded-xl px-5 py-2 font-bold text-white' style={{ backgroundColor: color }}>Read more</button>
                </div>
            </div>
            <div className='flex gap-5  max-w-[300px]'>
                <div className='p-5 rounded-full  text-white text-4xl h-fit w-fit' style={{ backgroundColor: color }}>
                    <BsFillBarChartLineFill />
                </div>
                <div>
                    <h3 className='font-bold text-2xl'>Services</h3>
                    <p className='mt-3'>lorem fwkefwe fka kiofewf noegewj fnewf.</p>
                    <button className='bg-green-200 mt-5 rounded-xl px-5 py-2 font-bold text-white' style={{ backgroundColor: color }}>Read more</button>
                </div>
            </div>

        </div>

    )
}

export default Service