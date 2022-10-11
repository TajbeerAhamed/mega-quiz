import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';


const Topics = () => {
    const topics = useLoaderData()
  const  topicsData = topics.data.questions;
  console.log(topicsData)

    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-4 m-10'>
            {/* {
                topicsData.map(topic => <Quiz
                key={topic.id}
                topic={topic}
                ></Quiz>)
            } */}
        </div>
    );
};

export default Topics;