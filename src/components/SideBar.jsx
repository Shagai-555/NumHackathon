import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { Link } from 'react-router-dom';
import NewFeed from './NewFeed'; 
import Contact from './Email';
const Transition = React.forwardRef(function Transition(
    props,
    ref,
    ) {
        return <Slide direction="up" ref={ref} {...props} />;
});

function SideBar() {
    const [activeItem, setActiveItem] = useState(0);
    const [linkVisible, setLinkVisible] = useState(false);
    const [showNewFeedDialog, setShowNewFeedDialog] = useState(false);
    const [showNewFeedDialog2, setShowNewFeedDialog2] = useState(false);

    const toggleLinkVisibility = () => {
        setLinkVisible(!linkVisible);
    };

    const handleClose = () => {
        setShowNewFeedDialog(false);
    };

    const handleItemClick = (index) => {
        setActiveItem(index === activeItem ? null : index);
    };

    function showNewFeed() {
        setActiveItem(3);
        setShowNewFeedDialog(true);
    }

    function showLoginFeed() {
        setActiveItem(4);
        setShowNewFeedDialog2(true);
    }

    const handleClose2 = () => {
        setShowNewFeedDialog2(false);
    };

    return (
        <aside className="fixed w-[280px] top-[70px] h-screen transition-transform -translate-x-full sm:translate-x-0 border-r-[1px] border-gray-500 px-5 bg-[#0e1113]" aria-label="Sidebar">
            <div className="h-full px-4 py-4 bg-[#0e1113] text-sm">
                <ul className="space-y-2 font-mono">
                    <li>
                        <Link to="/home" className={`flex items-center p-3 text-gray-900 rounded-lg group hover:bg-gray-800 ${activeItem === 0 ? 'bg-gray-800' : ''} cursor-pointer`} 
                        onClick={() => handleItemClick(0)}
                        style={{ textDecoration: 'none' }}>
                            <svg className={`flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-white ${activeItem === 0 ? 'text-white' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m19.724 6.765-9.08-6.11A1.115 1.115 0 0 0 9.368.647L.276 6.765a.623.623 0 0 0 .35 1.141h.444v10.001c.001.278.113.544.31.74.196.195.462.304.739.303h5.16a.704.704 0 0 0 .706-.707v-4.507c0-.76 1.138-1.475 2.02-1.475.882 0 2.02.715 2.02 1.475v4.507a.71.71 0 0 0 .707.707h5.16c.274-.001.538-.112.732-.307.195-.195.305-.46.306-.736v-10h.445a.618.618 0 0 0 .598-.44.625.625 0 0 0-.25-.702Z"></path>
                            </svg>
                            <span className={`ms-3 text-gray-200`}>НҮҮР ХУУДАС</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/popular" className={`flex items-center p-3 text-gray-900 rounded-lg group hover:bg-gray-800 ${activeItem === 1 ? 'bg-gray-800' : ''}  cursor-pointer`}
                        onClick={() => handleItemClick(1)}
                        style={{ textDecoration: 'none' }}>
                            <svg className={`flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-white ${activeItem === 1 ? 'text-white' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.01 10.01 0 0 0 10 0Zm0 18.75a8.7 8.7 0 0 1-5.721-2.145l8.471-8.471v4.148H14V6.638A.647.647 0 0 0 13.362 6H7.718v1.25h4.148L3.4 15.721A8.739 8.739 0 1 1 10 18.75Z"></path>
                            </svg>
                            <span className="flex-1 ms-3 whitespace-nowrap text-gray-200">НИЙТЛЭГ</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/resolved" className={`flex items-center p-3 text-gray-900 rounded-lg group hover:bg-gray-800 ${activeItem === 2 ? 'bg-gray-800' : ''}  cursor-pointer`} 
                        onClick={() => handleItemClick(2)}
                        style={{ textDecoration: 'none' }}>
                            <svg className={`flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-white ${activeItem === 2 ? 'text-white' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.01 10.01 0 0 0 10 0Zm5 17.171V6h-1.25v11.894a8.66 8.66 0 0 1-2.75.794V10H9.75v8.737A8.684 8.684 0 0 1 6.47 18H7v-4H5.75v3.642a8.753 8.753 0 1 1 9.25-.471Z"></path>
                            </svg>
                            <span className="flex-1 ms-3 whitespace-nowrap text-gray-200">ШИЙДЭГДСЭН</span>
                        </Link>
                    </li>
                    <li className="py-2 border-t-[1px] border-b-[1px] border-gray-500">
                        <div className="flex flex-row justify-between items-center py-3 px-2 my-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer"
                            onClick={toggleLinkVisibility}>
                            <span className="flex-1 ms-3 whitespace-nowrap">САНАЛ ХҮСЭЛТ</span>
                            <svg rpl="" fill="currentColor" height="20" icon-name="caret-down-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"
                            style={{ transition: 'transform 0.3s ease', transform: linkVisible   ? 'rotate(180deg)' : 'rotate(0deg)' }}
                            >
                                <path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5 .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0 0 1-.442.183Z"></path>
                            </svg>
                        </div>
                        {linkVisible && (
                            <button className={`flex items-center p-3 text-gray-900 rounded-lg group w-full hover:bg-gray-800 ${activeItem === 3 ? 'bg-gray-800' : ''}  cursor-pointer`}
                            onClick={() => showNewFeed()}
                            style={{ textDecoration: 'none' }}>
                                <svg className={`flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-white ${activeItem === 3 ? 'text-white' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M19 9.375h-8.375V1h-1.25v8.375H1v1.25h8.375V19h1.25v-8.375H19v-1.25Z"></path>
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap text-gray-200">ШИНЭЭР ҮҮСГЭХ</span>
                            </button>
                        )}
                    </li>
                    <li>
                        <button className={`flex items-center p-3 text-gray-900 rounded-lg group hover:bg-gray-800 w-full ${activeItem === 4 ? 'bg-gray-800' : ''}  cursor-pointer`} 
                        onClick={() => showLoginFeed(4)}
                        style={{ textDecoration: 'none' }}>
                            <svg className={`flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-white ${activeItem === 4 ? 'text-white' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M8 16C8 18.8284 8 20.2426 8.87868 21.1213C9.75736 22 11.1716 22 14 22H15C17.8284 22 19.2426 22 20.1213 21.1213C21 20.2426 21 18.8284 21 16V8C21 5.17157 21 3.75736 20.1213 2.87868C19.2426 2 17.8284 2 15 2H14C11.1716 2 9.75736 2 8.87868 2.87868C8 3.75736 8 5.17157 8 8" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path opacity="0.5" d="M8 19.5C5.64298 19.5 4.46447 19.5 3.73223 18.7678C3 18.0355 3 16.857 3 14.5V9.5C3 7.14298 3 5.96447 3.73223 5.23223C4.46447 4.5 5.64298 4.5 8 4.5" stroke="#1C274C" stroke-width="1.5"/>
<path d="M6 12L15 12M15 12L12.5 14.5M15 12L12.5 9.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span className="flex-1 ms-3 whitespace-nowrap text-gray-200">НЭВТРЭХ</span>
                        </button>
                    </li>
                </ul>
            </div>
            <Dialog
            
            open={showNewFeedDialog}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            PaperProps={{
                style: {
                    backgroundColor: 'rgb(31, 41, 55, 1)',
                    height: '65%',
                    width: '50%',
                    borderRadius: 25
                },
            }}>
                <NewFeed handleClose={handleClose}/>
            </Dialog>
            <Dialog
            
            open={showNewFeedDialog2}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose2}
            aria-describedby="alert-dialog-slide-description"
            PaperProps={{
                style: {
                    backgroundColor: 'rgb(31, 41, 55, 1)',
                    height: '50%',
                    width: '50%',
                    borderRadius: 25
                },
            }}>
                <Contact handleClose={handleClose2}/>
            </Dialog>
        </aside>
    );
}

export default SideBar;
