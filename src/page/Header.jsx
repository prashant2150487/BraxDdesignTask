import React, { useContext } from 'react'
import { ColorContext } from '../component/ColorProvider'

const Header = () => {
    const { color, url } = useContext(ColorContext);
    return (
        <div className='w-full'>
            <header className=" inset-x-0  bg-white container stickyn top-0 shadow-lg" >
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href='#home' className="p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img src={url || "	https://braxwebdesign.com/wp-content/uploads/2024/01/Braxweb_Airy-font-Logo-01.png"} className='h-20 max-h-14' alt='' />
                        </a>
                    </div>

                    <div className="hidden lg:flex lg:gap-x-12">
                        <a href="#Product" className="text-sm font-semibold leading-6 text-gray-900">Home</a>
                        <a href="#Feature" className="text-sm font-semibold leading-6 text-gray-900">Service</a>
                        <a href="#Features" className="text-sm font-semibold leading-6 text-gray-900">About</a>
                        <a href="#Company" className="text-sm font-semibold leading-6 text-gray-900">Contact</a>
                    </div>
                </nav>
            </header >
   
            <div className='container h-[650px] p-9  flex flex-col justify-center'>
                <div className='max-w-xl w-full flex flex-col'>
                    <h1 className='text-7xl font-bold '>Select a color That matches your brand.</h1>
                    <p className='text-lg mt-10'>Our team created this tool to help users test color designs for their new website. Simply click the color picker button on the right to try it out.</p>
                    <button className='px-4 py-4 border rounded-3xl text-white mt-12 max-w-40' style={{ backgroundColor: color }}>Call to action 2</button>
                </div>
            </div>


        </div>


    )
}

export default Header