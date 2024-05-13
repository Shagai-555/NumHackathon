import React, { createContext, useState, useContext } from 'react';

const ScreenContext = createContext();

export const ScreenProvider = ({ children }) => {
    const [screen, setScreen] = useState(null);

    return (
        <ScreenContext.Provider value={{ screen, setScreen }}>
        {children}
        </ScreenContext.Provider>
    );
};

export const useScreen = () => useContext(ScreenContext);
