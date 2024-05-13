import React, { createContext, useContext, useState } from 'react';
import feed from './components/data/feeds.json';

const FeedContext = createContext();

// Create a provider component
export const FeedProvider = ({ children }) => {
    const [feedData, setFeedData] = useState(feed);
    const [isLogged, setisLogged] = useState(false);

    return (
        <FeedContext.Provider value={{ feedData, setFeedData, isLogged, setisLogged }}>
            {children}
        </FeedContext.Provider>
    );
};

// Custom hook to consume the context
export const useFeedContext = () => useContext(FeedContext);
