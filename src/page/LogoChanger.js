import React, { useContext, useState } from "react";
import { ColorContext } from "../component/ColorProvider";

const logoUrl = [
    "https://dynamic.brandcrowd.com/asset/logo/547e6711-66db-4562-bd79-408ef9528e8c/logo-search-grid-1x?logoTemplateVersion=1&v=638446843985570000",
    "https://logos-world.net/wp-content/uploads/2020/05/Huawei-Logo.jpg",
    "https://uploads.vw-mms.de/system/production/images/vwn/030/145/images/7a0d84d3b718c9a621100e43e581278433114c82/DB2019AL01950_web_1600.jpg?1649155356",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU",
    "https://img.freepik.com/free-vector/leaf-maple-icon-logo-design_474888-2154.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1719532800&semt=sph",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROVSm4N7Clp8EgEH-kg6zBpNROIqAvAvub8g&usqp=CAU",
];
const LogoChanger = () => {
    const [showSubheading, setShowSubheading] = useState(false);
    const [heading, setHeading] = useState("Your Logo");
    const [subheading, setSubheading] = useState("Headline");
    const { url, setUrl } = useContext(ColorContext);

    return (
        <div>
            <h1 className="font-bold text-4xl">Logo Preview</h1>
            <div className="flex gap-5 border border-blue-200 p-4 w-fit rounded-sm mt-5">
                <div className="max-w-20">
                    <img
                        src={url || "https://logos-world.net/wp-content/uploads/2020/05/Huawei-Logo.jpg"}
                        alt="logo"
                    />
                </div>
                <div
                    className="https://demo.braxwebdesign.com/wp-content/uploads/…04/PHOTO-2024-04-15-14-35-45-removebg-preview.png"
                    alt="img"
                >
                    <p className="text-2xl ">{heading}</p>
                    {!showSubheading && <p>{subheading}</p>}
                </div>
            </div>
            <div className="border-b-2 border-black mt-3">
                <h1 className="text-xl font-bold">Logo Customization</h1>
            </div>
            <div>
                <p>Sub heading required?</p>
                <div className="flex gap-3">
                    <p>No</p>
                    <input
                        type="checkbox"
                        checked={showSubheading}
                        value={showSubheading}
                        onClick={() => setShowSubheading(!showSubheading)}
                    />
                </div>
                <div className="flex gap-2">
                    <div className="flex flex-col">
                        <label
                            className="-ml-1"
                            value={heading}
                            onChange={(e) => setHeading(e.target.value)}
                        >
                            Heading
                        </label>
                        <input
                            type="text"
                            className="border rounded-md p-1"
                            value={heading}
                            onChange={(e) => setHeading(e.target.value)}
                        />
                    </div>
                    {!showSubheading && (
                        <div className="flex flex-col">
                            <label className="-ml-1">Sub Heading</label>
                            <input
                                type="text"
                                className="border rounded-md p-1"
                                value={subheading}
                                onChange={(e) => setSubheading(e.target.value)}
                            />
                        </div>
                    )}
                </div>
                <button className="px-6 py-2 bg-black rounded-md text-white mt-3">
                    Apply
                </button>
            </div>
            <div className="border-b-2 border-black mt-4">
                <div className="font-bold text-2xl">Select Logo below</div>
            </div>
            <div className="py-4">
                <div className="flex flex-row gap-3 flex-wrap" >
                    {logoUrl.map((logo, index) => (
                        <img src={logo} key={index} alt="logo" className="max-w-20 h-14  inline" onClick={() => setUrl(logo)} />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default LogoChanger;
