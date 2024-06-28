import React, { useContext } from 'react'
import { ColorContext } from '../component/ColorProvider';

const ColorPicker = () => {
    const colors = ['green', '#f44336', '#e91e63', '#9c27b0', '#673ab7'];
    const { color, setColor } = useContext(ColorContext)
    console.log(color)
    return (
        <div>
            <h2>Pick a color</h2>
            <div className='flex gap-4 flex-wrap' >
                {colors.map((colorItem, index) => (
                    <button key={index} className='btn border px-4 py-2' style={{ backgroundColor: colorItem }} onClick={() => setColor(colorItem)}>{colorItem}</button>
                ))}</div>
        </div>
    )
}

export default ColorPicker