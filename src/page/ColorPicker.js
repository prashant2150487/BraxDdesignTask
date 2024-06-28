import React, { useContext } from 'react'
import { ColorContext } from '../component/ColorProvider';

const ColorPicker = () => {
    const colors = ['green', '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#5083af', '#8fce00', '#ffe599', '#e06666'];
    const { color, setColor } = useContext(ColorContext)
    console.log(color)
    return (
        <div>
            <h2 className='font-bold'>Filter</h2>
            <input placeholder='Search...' className='p-1' />
            <h1 className='font-bold text-md' >Select a color button below </h1>
            <div className='border-black border-b-1' ></div>
            <div className='flex gap-4 flex-wrap my-2' >
                {colors.map((colorItem, index) => (
                    <button key={index} className='btn border px-4 py-2 rounded-lg text-white' style={{ backgroundColor: colorItem }} onClick={() => setColor(colorItem)}>{colorItem}</button>
                ))}</div>
        </div>
    )
}

export default ColorPicker