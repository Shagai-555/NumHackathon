import { useState, useEffect} from 'react';
import { Grid } from '@mui/material';
import React from 'react';
import { useFeedContext } from './../FeedContext';

function Popular() {
    const { feedData} = useFeedContext();
    const [list, setList] = useState(feedData);

    useEffect(() => {
        setList(feedData);
    }, [feedData]);

    const handleIncrement = (id) => {
        setList(feed => feed.map(item => {
            if (item.id === id) {
                return { ...item, vote: item.vote + 1 };
            }
            return item;
        }));
    };

    const handleDecrement = (id) => {
        setList(prevList => prevList.map(item => {
            if (item.id === id) {
                return { ...item, vote: item.vote - 1 };
            }
            return item;
        }));
    };

    // Sort the list by vote count
    const sortedList = [...list].sort((a, b) => b.vote - a.vote);

    return (
        <Grid container className='bg-[#0e1113] overflow-y-auto'>
            <Grid sm={2}></Grid>
            <Grid item sm={8}>  
                <div className="mt-[90px]"></div>
                {sortedList.map((item, index) => {
                    // Calculate time difference for each item
                    const currentTime = new Date();
                    const itemDateTime = new Date(item.dateTime);
                    const timeDifference = currentTime.getTime() - itemDateTime.getTime();
                    const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
                    const minutesDifference = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                    const dayDiff = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

                    return (
                        <>
                            <div className="bg-gray-500 w-[650px] my-3 h-[1px]"> </div>
                            <div className="flex flex-col w-[650px] my-1 p-2 hover:rounded-2xl hover:bg-gray-800">
                                <div className='flex flex-row justify-between'>
                                    <div className='flex flex-row items-center text-sm'>
                                        <span className="text-white text-xl font-bold mr-2">{index + 1}.</span> {/* Rank Span */}
                                        <img className="h-7 w-7 mr-2" src="./anonymity.png" alt="user" />
                                        <span className='text-gray-300 mr-2'>
                                            {item.name}
                                        </span>
                                        <span className='text-gray-300 mr-2'>
                                            •
                                        </span>
                                        {dayDiff > 0 && (
                                            <span className='text-gray-300 mr-2'>
                                                {`${dayDiff} өдрийн өмнө`}
                                            </span>
                                        )}
                                        {dayDiff === 0 && minutesDifference > 0 && (
                                            <span className='text-gray-300 mr-2'>
                                                {`${hoursDifference} цаг ${minutesDifference} минутын өмнө`}
                                            </span>
                                        )}
                                        {minutesDifference === 0 && (
                                            <span className='text-gray-300 mr-2'>
                                                {`Яг одоо`}
                                            </span>
                                        )}
                                    </div>
                                    <button>
                                        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="5" cy="12" r="2" stroke="gray" strokeWidth="1.5" />
                                            <circle opacity="0.5" cx="12" cy="12" r="2" stroke="white" strokeWidth="1.5" />
                                            <circle cx="19" cy="12" r="2" stroke="gray" strokeWidth="1.5" />
                                        </svg>
                                    </button>
                                </div>
                                <span className='text-md font-bold text-white py-2'>{item.desc}</span>
                                <div className='flex flex-row mt-3'>
                                    <div className='flex flex-row bg-gray-700 rounded-2xl items-center mr-3'>
                                        <button onClick={() => handleDecrement(item.id)}>
                                            <svg className="p-1 hover:rounded-full hover:text-red-900 hover:bg-gray-600" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 8L9 8C11.2091 8 13 9.79086 13 12L13 17" stroke="red" />
                                                <path d="M16 14L13 17L10 14" stroke="red"/>
                                            </svg>
                                        </button>
                                        <span className='my-1 text-sm text-white font-bold'>{item.vote}</span>
                                        <button onClick={() => handleIncrement(item.id)}>
                                            <svg className="p-1 hover:rounded-full hover:text-red-900 hover:bg-gray-600" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 16L9 16C11.2091 16 13 14.2091 13 12L13 7" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M16 10L13 7L10 10" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="bg-gray-700 p-1 rounded-2xl flex hover:bg-gray-600 items-center">
                                        <svg width="30px" height="30px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M5.5 12C5.49988 14.613 6.95512 17.0085 9.2741 18.2127C11.5931 19.4169 14.3897 19.2292 16.527 17.726L19.5 18V12C19.5 8.13401 16.366 5 12.5 5C8.63401 5 5.5 8.13401 5.5 12Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M9.5 13.25C9.08579 13.25 8.75 13.5858 8.75 14C8.75 14.4142 9.08579 14.75 9.5 14.75V13.25ZM13.5 14.75C13.9142 14.75 14.25 14.4142 14.25 14C14.25 13.5858 13.9142 13.25 13.5 13.25V14.75ZM9.5 10.25C9.08579 10.25 8.75 10.5858 8.75 11C8.75 11.4142 9.08579 11.75 9.5 11.75V10.25ZM15.5 11.75C15.9142 11.75 16.25 11.4142 16.25 11C16.25 10.5858 15.9142 10.25 15.5 10.25V11.75ZM9.5 14.75H13.5V13.25H9.5V14.75ZM9.5 11.75H15.5V10.25H9.5V11.75Z" fill="white"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </Grid>
        </Grid>
    );
}

export default Popular;
