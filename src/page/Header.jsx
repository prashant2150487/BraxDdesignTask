import React, { useContext, useState } from 'react'
import { ColorContext } from '../component/ColorProvider'
import { RxCross2 } from "react-icons/rx";
import { FiAlignJustify } from 'react-icons/fi';
const Header = () => {
    const { color, url } = useContext(ColorContext);
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className='w-full'>
            <header className="shadow-lg p-4" >
                <nav className="flex items-center justify-between " aria-label="Global">
                    <div className="">
                        <a href='#home' className="">
                            <img src={url || "	https://braxwebdesign.com/wp-content/uploads/2024/01/Braxweb_Airy-font-Logo-01.png"} className='md:max-h-14 max-h-10 ' alt='' />
                        </a>
                    </div>

                    <div className="md:flex hidden gap-x-6 ">
                        <a href="#Product" className="text-xl font-semibold leading-6 text-gray-900">Home</a>
                        <a href="#Feature" className="text-xl font-semibold leading-6 text-gray-900">Service</a>
                        <a href="#Features" className="text-xl font-semibold leading-6 text-gray-900">About</a>
                        <a href="#Company" className="text-xl font-semibold leading-6 text-gray-900">Contact</a>
                    </div>

                    <button className='md:hidden text-2xl' onClick={() => setShowMenu(!showMenu)}>
                        <FiAlignJustify />
                    </button>
                    {showMenu && <div className="border flex flex-col shadow-lg w-44 p-2 bg-[#f2f2f2] absolute top-0 right-0">
                        <button className="font-bold p-1 text-sm ml-auto block text-white   rounded-lg " style={{ backgroundColor: color }} onClick={() => setShowMenu(!showMenu)}>
                            <RxCross2 />
                        </button>
                        <a href="#Product" className="text-md font-semibold leading-6 text-gray-900">Home</a>
                        <a href="#Product" className="text-md font-semibold leading-6 text-gray-900">Service</a>
                        <a href="#Product" className="text-md font-semibold leading-6 text-gray-900">About</a>
                        <a href="#Product" className="text-md font-semibold leading-6 text-gray-900">Contact</a>
                    </div>}

                </nav>
            </header >

            <div className='container h-[650px]  p-5 md:p-9  flex flex-col justify-center'>
                <div className='max-w-xl w-full flex flex-col'>
                    <h1 className='text-4xl sm:text-5xl md:text-7xl font-bold '>Select a color That matches your brand.</h1>
                    <p className='text-lg mt-10'>Our team created this tool to help users test color designs for their new website. Simply click the color picker button on the right to try it out.</p>
                    <button className='px-4 py-4 border rounded-3xl text-white mt-12 max-w-40' style={{ backgroundColor: color }}>Call to action 2</button>
                </div>
            </div>


        </div>


    )
}

export default Header