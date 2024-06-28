import React, { useContext } from 'react'
import { ColorContext } from './ColorProvider'

const Contact = () => {
    const {color}=useContext(ColorContext)
    return (
        <div className='flex mt-3 p-4'> 
            <div className='max-w-screen-sm flex flex-col items-start gap-5 justify-center p-5'>
                <h2 className='font-bold text-6xl'>Contact</h2>
                <p className='text-lg'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed nisi id lorem blandit consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque consectetur</p>
                <button className='px-3 py-2 rounded-xl text-white text-nowrap' style={{backgroundColor:color}}>Call to action 3.</button>
            </div>
            <div>
                <img className='rounded-xl' src="https://demo.braxwebdesign.com/wp-content/uploads/2024/04/portrait-of-a-mixed-race-cheerful-businessman-remo-2023-11-27-05-01-04-utc-1-scaled-1.jpg" width={688} height={459} alt='img'/>
            </div>
        </div>
    )
}

export default Contact