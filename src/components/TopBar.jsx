import React from 'react';

function TopBar() {
    return (
        <div className="transition-transform -translate-x-full sm:translate-x-0 bg-[#0e1113] p-3 flex flex-row items-center border-b-[1px] border-gray-500 px-7 justify-between fixed top-0 w-full z-10">
            <div className='px-2 flex flex-row'>
                <svg width="40px" height="40px" stroke='blue' fill='lightblue' viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path className="a" d="M24,43.5C7.4055,42.6617-.063,25.2479,24,4.5,48.063,25.2479,40.5945,42.6617,24,43.5Z"/>
                    <path className="a" d="M26.4863,39.3466q12.4508-4.1439,8.2973-15.7658"/>
                </svg>W
                <div className="text-white text-3xl font-mono px-2">
                    DUSAL
                </div>
            </div>
            <div className='flex flex-row'>
                <div className="flex p-2 rounded-xl hover:bg-gray-800 items-center">
                    <svg width="20" height="20" stroke="lightblue" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 18h1a2 2 0 0 1-4 0h3Zm8-3.792v.673A1.12 1.12 0 0 1 17.883 16H2.117A1.12 1.12 0 0 1 1 14.881v-.673a3.947 3.947 0 0 1 1.738-3.277A2.706 2.706 0 0 0 3.926 8.7V7.087a6.07 6.07 0 0 1 12.138 0l.01 1.613a2.7 2.7 0 0 0 1.189 2.235A3.949 3.949 0 0 1 19 14.208Zm-1.25 0a2.7 2.7 0 0 0-1.188-2.242A3.956 3.956 0 0 1 14.824 8.7V7.088a4.819 4.819 0 1 0-9.638 0v1.615a3.956 3.956 0 0 1-1.738 3.266 2.7 2.7 0 0 0-1.198 2.239v.542h15.5v-.542Z"></path>
                    </svg>
                </div>
                <div className="p-2 rounded-full hover:bg-gray-800">
                    <img className="h-8 w-8" src="./space-man.png" alt="user"/>
                </div>
            </div>
        </div>
    );
}

export default TopBar;
