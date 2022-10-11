import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useLoaderData([])
  const  topicsData = topics.data

    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-4 m-10'>
            {
                topicsData.map(topic => <Topic
                key={topic.id}
                topic={topic}
                ></Topic>)
            }
        </div>
    );
};

export default Topics;