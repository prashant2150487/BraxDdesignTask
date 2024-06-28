import React, { useState } from "react";

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <button className="border px-3 py-2 z-10" onClick={() => setIsOpen(!isOpen)}>
                Toggle Sidebar
            </button>
            {
                isOpen &&
                <div className="fixed border right-0 top-0 w-64 h-full bg-gray-800 text-white p-4">
                    <button className="btn border px-2 ml-auto block ">*</button>
                    {children}
                </div>
            }
        </div>
    );
};

export default Sidebar;
