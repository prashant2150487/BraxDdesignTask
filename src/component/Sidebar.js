import React, { useContext, useState } from "react";
import { ColorContext } from "./ColorProvider";
import ColorPicker from "../page/ColorPicker";
import LogoChanger from "../page/LogoChanger";
import { RxCross2 } from "react-icons/rx";
const Sidebar = () => {
    const [isOpenColor, setIsOpenColor] = useState(false);
    const [isOpenLogo, setIsOpenLogo] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const { color } = useContext(ColorContext);
    return (
        <div>
            <div className="fixed flex gap-2 flex-col right-0 top-1/2 text-white z-10">
                <button
                    className=" px-4 py-2 z-10 "
                    style={{ backgroundColor: color }}
                    onClick={() => setIsOpenColor(!isOpenColor)}
                >
                    Select Color
                </button>
                <button
                    className=" px-4 py-2 z-10 "
                    style={{ backgroundColor: color }}
                    onClick={() => setIsOpenLogo(!isOpenLogo)}
                >
                    Select Logo
                </button>
                <button
                    className=" px-4 py-2 z-10 "
                    style={{ backgroundColor: color }}
                    onClick={() => setShowModal(!showModal)}
                >
                    Submit
                </button>
            </div>

            {isOpenColor && (
                <div className="fixed border right-0 top-0 w-xl z-10 h-full bg-[#f2f2f2] text-black p-4">
                    <button className="font-bold px-2 ml-auto block text-white p-2 rounded-lg " style={{ backgroundColor: color }} onClick={() => setIsOpenColor(!isOpenColor)}>
                        <RxCross2 />
                    </button>
                    <ColorPicker />
                </div>
            )}
            {isOpenLogo && (
                <div className="fixed border right-0 top-0 w-1/3 h-full bg-gray-800 text-white p-4">
                    <button className="font-bold px-2 ml-auto block text-white p-2 rounded-lg " style={{ backgroundColor: color }} onClick={() => setIsOpenLogo(!isOpenLogo)}>
                        <RxCross2 />
                    </button>
                    <LogoChanger />
                </div>
            )}
            {showModal && (
                <div className="border max-w-sm rounded-lg fixed transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 p-5 flex flex-col">
                    <p className="font-bold">
                        When you submit this form our team will receive a notification with
                        the color you selected and the logo you designed.
                    </p>
                    <div className="flex flex-col gap-2">
                        <input placeholder="Company" className="p-1 border rounded-lg" />
                        <input placeholder="Name" className="p-1 border rounded-lg" />
                        <input placeholder="Email" className="p-1 border rounded-lg" />
                        <textarea
                            placeholder="Comments"
                            className="p-1 border rounded-lg h-20"

                        />
                    </div>
                    <div className="flex justify-between mt-3">
                        <button
                            className="text-white px-4 py-2 rounded-md"
                            style={{ backgroundColor: color }}
                        >
                            Submit
                        </button>
                        <button
                            className="text-white px-4 py-2 rounded-md"
                            style={{ backgroundColor: color }}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
