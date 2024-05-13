import React, {useRef }  from 'react'
import emailjs from "@emailjs/browser";
import DialogContent from '@mui/material/DialogContent';

const Contact = ({handleClose}) => {
    const form = useRef();
    
        const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
            .sendForm(
            "service_cvtn22k",
            "template_7pozjok",
            form.current,
            "hJltE6qDCvkkG5Jk_"
            )
            .then(
            (result) => {
                console.log(result.text);
                console.log("Pisda: ", randomNum)
                console.log("message sent");
            },
            (error) => {
                console.log(error.text);
            }
            );
        };
        const randomNum = Math.floor(Math.random() * 1000000);
        
        return (

            <>
                <DialogContent>
                    <form ref={form} onSubmit={sendEmail}>
                        <span className="flex justify-center w-full bg-gray-800 text-white rounded-lg focus:outline-none">
                            <span className="text-xl">Нэвтрэх</span>
                        </span>
                        <div className="my-3">
                        <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Хоч Нэр
                        </label>
                        <input
                            type="text"
                            id="default-input"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="4BERH"
                        />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Цахим шуудан
                        </label>
                        <input
                            type="email"
                            name="user_email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="bichadna@gmail.com"
                        />
                        </div>
                        <input type="hidden" name="message" value={randomNum} />
                        <div className="d-grid p-1 rounded-md bg-gray-500 flex flex-row justify-center my-5">
                            <button type="submit" className="text-xl text-white font-mono mx-4 my-2 py-1 w-full" onClick={handleClose}>
                                Баталгаажуулах код авах
                            </button>
                        </div>
                    </form>
                </DialogContent>
            </>
        );
    };

export default Contact;
