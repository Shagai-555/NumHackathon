import React, { useState } from 'react';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import room from './data/room.json';
import dorm from './data/dorm.json';
import { DateTime } from 'luxon';
import { useFeedContext } from './../FeedContext';

function NewFeed({ handleClose }) {
    const [selectedOption, setSelectedOption] = useState(null);
    const options = ["Анги танхим", "Сургуулийн орчин", "Дотуур байр"];
    const [roomData] = useState(room);
    const [dormData] = useState(dorm);
    const [selectedSchool, setSelectedSchool] = useState("");
    const [selectedDorm, setSelectedDorm] = useState("");
    const [selectedRoom, setselectedRoom] = useState("");
    const [uploadedFile, setUploadedFile] = useState(null);
    const [inputText, setInputText] = useState('');
    const { feedData, setFeedData } = useFeedContext();

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleRoomSelect = (roomName) => {
        setselectedRoom(roomName);
    };
    
    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setUploadedFile(file);
        }
    };

    const handleDormSelect = (dormName) => {
        setSelectedDorm(dormName);
    };

    const handleSchoolSelect = (schoolName) => {
        setSelectedSchool(schoolName);
    };

    const handleOptionSelect = (e) => {
        setSelectedOption(e.target.value);
    };

    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };

    const handleAddJson = (id, name, date, desc, vote, where, fileUrl) => {
        const newFeedData = {
            id: id,
            name: name,
            vote: vote,
            where: where,
            dateTime: date,
            desc: desc,
            img: {
                url: fileUrl,
            }
        };

        setFeedData([...feedData, newFeedData]);
        console.log(feedData);
        handleClose();
    };
    
    
    return (
        <>
            <DialogContent>
                <div className="flex flex-col items-start w-full h-full p-2 font-mono">
                    <div className="p-2 flex flex-col">
                            <div className="flex flex-row justify-between">
                                <span className="flex items-center w-full bg-gray-800 text-white rounded-lg focus:outline-none">
                                    <span className="text-xl">ШИНЭЭР ҮҮСГЭХ</span>
                                </span>
                                <div className="absolute right-10 w-48 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                                    <select
                                        id="countries"
                                        onChange={handleOptionSelect}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="">Төрөл Сонгох</option>
                                        {options.map((option, index) => (
                                            <option key={index} value={option}>{option}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div>
                                {selectedOption === "Анги танхим" && (
                                    <div className="my-5">
                                        <div className="flex flex-col my-2">
                                            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Сургууль</label>
                                            <select onChange={(e) => handleSchoolSelect(e.target.value)} label="Select School"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                {Array.from(new Set(roomData.map(item => item["Харьяалах_сургуулийн_нэр"]))).map((schoolName, index) => (
                                                    <option key={index} value={schoolName}>{schoolName}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="flex flex-col my-2">
                                            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Анги</label>
                                            <select onChange={(e) => handleRoomSelect(`${selectedOption}/${selectedSchool}/${e.target.value}`)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                <option value="">Анги сонгох</option>
                                                {selectedSchool && roomData.filter(item => item["Харьяалах_сургуулийн_нэр"] === selectedSchool).map((item, index) => (
                                                    <option key={index} value={item["Өрөөний_дугаар"]}>{item["Өрөөний_дугаар"]}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                )}
                                {selectedOption === "Сургуулийн орчин" && (
                                    <div className="my-2">
                                        <div className="flex flex-col my-5">
                                            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Сургууль</label>
                                            <select onChange={(e) => handleRoomSelect(`${selectedOption}/${e.target.value}`)} label="Select School"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                {Array.from(new Set(roomData.map(item => item["Харьяалах_сургуулийн_нэр"]))).map((schoolName, index) => (
                                                    <option key={index} value={schoolName}>{schoolName}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                )}
                                {selectedOption === "Дотуур байр" && (
                                    <div className="flex flex-row justify-between my-5 w-full">
                                        <div className="flex flex-col my-2">
                                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Байрны дугаар</label>
                                            <select onChange={(e) => handleDormSelect(e.target.value)} label="Select Dormitory"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                <option value="">Дотуур байр</option>
                                                {Array.from(new Set(dormData.map(item => item["Байрны_дугаар"]))).map((dormName, index) => (
                                                    <option key={index} value={dormName}>{dormName}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="flex flex-col my-2 ml-[50px] mr-[200px]">
                                            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Өрөөний дугаар</label>
                                                <select onChange={(e) => handleRoomSelect(`${selectedOption}/${selectedSchool}/${e.target.value}`)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">>
                                                    <option value="">Өрөөний дугаар</option>
                                                    {selectedDorm && roomData.filter(item => item["Байрны_дугаар"] === selectedDorm).map((item, index) => (
                                                        <option key={index} value={item["Өрөөний_дугаар"]}>{item["Өрөөний_дугаар"]}</option>
                                                    ))}
                                                </select>
                                        </div>
                                    </div>
                                )}
                                {selectedOption && 
                                    <div className="flex flex-col">
                                        <div className="mb-6">
                                            <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                Дэлгэрэнгүй
                                            </label>
                                            <input
                                                type="text"
                                                id="default-input"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                value={inputText}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div class="flex items-center justify-center w-full">
                                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                                    </svg>
                                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                                </div>
                                                <input
                                                    id="dropzone-file"
                                                    type="file"
                                                    className="hidden"
                                                    onChange={handleFileInputChange}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
            </DialogContent>
            <DialogActions>
                <button onClick={handleClose} className="text-xl text-white font-mono mx-4 my-2 py-1">Буцах</button>
                <button onClick={() => handleAddJson(randomNumberInRange(0,100), `Оюутан${randomNumberInRange(1000, 9999)}`, DateTime.now(), inputText, 0, `${selectedRoom}`, uploadedFile ? URL.createObjectURL(uploadedFile) : "")} className="text-xl text-white font-mono mx-4 my-2 py-1">Илгээх</button>
            </DialogActions>
        </>
    );
}

export default NewFeed;
