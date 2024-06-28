import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const ColorContext = createContext();


const ColorProvider = ({ children }) => {
    const [color, setColor] = useState('yello')
    return (
        <ColorContext.Provider value={{ color, setColor }}>
            {children}
        </ColorContext.Provider>
    )
}

export default ColorProvider