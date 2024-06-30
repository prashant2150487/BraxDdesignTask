import React, { useContext } from 'react'
import { IoIosCheckmark } from "react-icons/io";
import { ColorContext } from './ColorProvider';

const About = () => {
    const {color}=useContext(ColorContext)
    return (
        <div className='md:flex flex-col  border p-2'>
            <img src="https://imageio.forbes.com/specials-images/imageserve/64cce364ad84ff0538f2b75d/Focused-on-success-and-growth/960x0.jpg?format=jpg&width=960" className='md:w-1/2 w-full h-[400px] rounded-e-lg md:p-5 p-1' alt='' />
            <div className='md:w-1/2 w-full p-5'>
                <h1 className='font-bold text-2xl'>About</h1>
                <p className='mt-4 text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed nisi id lorem blandit consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nte ipsum.</p>
                <div>
                    {
                        [1, 2, 3, 4].map((item, index) => (
                            <div key={index} className='flex items-center shadow-xl p-4 gap-3 max-w-sm'>
                                <IoIosCheckmark className='text-xl  text-white rounded-full' style={{ backgroundColor:color}}/>
                                <p className='text-md font-bold'>Some text here</p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default About