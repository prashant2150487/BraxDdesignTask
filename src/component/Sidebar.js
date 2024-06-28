import React, { useContext, useState } from "react";
import { ColorContext } from "./ColorProvider";
import ColorPicker from "../page/ColorPicker";
import LogoChanger from "../page/LogoChanger";

const Sidebar = () => {
    const [isOpenColor, setIsOpenColor] = useState(false);
    const [isOpenLogo, setIsOpenLogo] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const { color } = useContext(ColorContext)
    return (
        <div>
            <div className="fixed flex gap-2 flex-col right-0 top-1/2 text-white z-10">
                <button className=" px-4 py-2 z-10 " style={{ backgroundColor: color }} onClick={() => setIsOpenColor(!isOpenColor)}>
                    Select Color
                </button>
                <button className=" px-4 py-2 z-10 " style={{ backgroundColor: color }} onClick={() => setIsOpenLogo(!isOpenLogo)}>
                    Select Logo
                </button>
                <button className=" px-4 py-2 z-10 " style={{ backgroundColor: color }} onClick={() => setShowModal(!showModal)}>
                    Submit
                </button>
            </div>


            {
                isOpenColor &&
                <div className="fixed border right-0 top-0 w-64 h-full bg-gray-800 text-white p-4">
                    <button className="btn border px-2 ml-auto block ">*</button>
                    <ColorPicker />
                </div>
            }
            {isOpenLogo &&
                <div className="fixed border right-0 top-0 w-64 h-full bg-gray-800 text-white p-4">
                    <button className="btn border px-2 ml-auto block ">*</button>
                    <LogoChanger />
                </div>
            }
            {
                showModal &&
                < div className='border'>
                    <p> When you submit this form our team will receive a notification with the color you selected and the logo you designed.</p>
                    <input placeholder='Company' />
                    <input placeholder='Name'></input>
                </div>

            }
        </div >
    );
};

export default Sidebar;
