import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../components/Header/Header';
export const TopicDataContext = createContext([]);

const Main = () => {
    const topicsData = useLoaderData()
    const topicsCategories = topicsData.data
    return (
        <div>
           <TopicDataContext.Provider value={topicsCategories}>
       <Header></Header>
       <Outlet></Outlet>
       </TopicDataContext.Provider>
        </div>
    );
};

export default Main;