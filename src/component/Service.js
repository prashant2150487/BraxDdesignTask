import React, { useContext } from 'react'
import { MdBarChart } from "react-icons/md";
import { LuBarChartHorizontal } from "react-icons/lu";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { ColorContext } from './ColorProvider';

const Service = () => {
    const { color } = useContext(ColorContext);
    return (
        <div className='flex justify-center gap-8'>
            <div className='flex gap-5'>
                <div className='p-5 rounded-full text-white text-2xl h-fit w-fit' style={{ backgroundColor: color }}>
                    <MdBarChart />
                </div>
                <div className=''>
                    <h3 className='font-bold'>Services</h3>
                    <p>lorem fwkefwe fka kiofewf noegewj fnewf.</p>
                    <button className='bg-green-200 rounded-xl px-5 py-2 font-bold' style={{ backgroundColor: color }}>Read more</button>
                </div>
            </div>
            <div className='flex gap-5'>
                <div className='p-5 rounded-full text-white text-2xl h-fit w-fit' style={{ backgroundColor: color }}>
                    <LuBarChartHorizontal />
                </div>
                <div>
                    <h3 className='font-bold'>Services</h3>
                    <p>lorem fwkefwe fka kiofewf noegewj fnewf.</p>
                    <button className='bg-green-200 rounded-xl px-5 py-2 font-bold' style={{ backgroundColor: color }}>Read more</button>
                </div>
            </div>
            <div className='flex gap-5'>
                <div className='p-5 rounded-full text-white text-2xl h-fit w-fit' style={{ backgroundColor: color }}>
                    <BsFillBarChartLineFill />
                </div>
                <div>
                    <h3 className='font-bold'>Services</h3>
                    <p>lorem fwkefwe fka kiofewf noegewj fnewf.</p>
                    <button className='bg-green-200 rounded-xl px-5 py-2 font-bold' style={{ backgroundColor: color }}>Read more</button>
                </div>
            </div>

        </div>

    )
}

export default Service