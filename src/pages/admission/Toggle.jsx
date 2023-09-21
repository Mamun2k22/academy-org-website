import { useState } from "react";


const Toggle = () => {
    const [isCollapsed, setCollapsed] = useState(true);

    const toggleCollapse = () => {
      setCollapsed(!isCollapsed);
    };
    return (
        <div>
                <div className='lg:my-16 lg:mx-4'>
            <div className="bg-white shadow-2xl rounded-md p-2 lg:mx-16 lg:w-11/12 lg:mb-4">
            <div
                className="flex justify-between items-center cursor-pointer lg:gap-10 lg:mb-4"
                onClick={toggleCollapse}
            >
                <h2 className="text-xl font-semibold lg:mx-20">Collapsible Section</h2>
            <div className='rounded-full border border-gray-500 lg:px-2 lg:mx-4'>
            <span className="transition-transform transform">
                {isCollapsed ? (
                    <span className=" text-3xl">&#43;</span>
                ) : (
                    <span className="text-3xl lg:px-1">&#45;</span>
                )}
                </span>
            </div>
                
            </div>
            {!isCollapsed && (
                <div className="mt-4 p-4 border-t lg:mx-10 justify-center text-center">
                <p>This is the collapsible content. You can add any content here.</p>
                </div>
            )}
            </div>

            <div className="bg-white shadow-2xl rounded-md p-2 lg:mx-16 lg:w-11/12 lg:mb-4">
            <div
                className="flex justify-between items-center cursor-pointer lg:gap-10 lg:mb-4"
                onClick={toggleCollapse}
            >
                <h2 className="text-xl font-semibold lg:mx-20">Collapsible Section</h2>
            <div className='rounded-full border border-gray-500 lg:px-2 lg:mx-4'>
            <span className="transition-transform transform">
                {isCollapsed ? (
                    <span className=" text-3xl">&#43;</span>
                ) : (
                    <span className="text-3xl lg:px-1">&#45;</span>
                )}
                </span>
            </div>
                
            </div>
            {!isCollapsed && (
                <div className="mt-4 p-4 border-t lg:mx-10 justify-center text-center">
                <p>This is the collapsible content. You can add any content here.</p>
                </div>
            )}
            </div>

            <div className="bg-white shadow-2xl rounded-md p-2 lg:mx-16 lg:w-11/12 lg:mb-4">
            <div
                className="flex justify-between items-center cursor-pointer lg:gap-10 lg:mb-4"
                onClick={toggleCollapse}
            >
                <h2 className="text-xl font-semibold lg:mx-20">Collapsible Section</h2>
            <div className='rounded-full border border-gray-500 lg:px-2 lg:mx-4'>
            <span className="transition-transform transform">
                {isCollapsed ? (
                    <span className=" text-3xl">&#43;</span>
                ) : (
                    <span className="text-3xl lg:px-1">&#45;</span>
                )}
                </span>
            </div>
                
            </div>
            {!isCollapsed && (
                <div className="mt-4 p-4 border-t lg:mx-10 justify-center text-center">
                <p>This is the collapsible content. You can add any content here.</p>
                </div>
            )}
            </div>
            </div>
        </div>
    );
};

export default Toggle;