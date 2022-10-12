import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';

const Questions = () => {

    const quiz = useLoaderData()

    return (
        <div className='dark:bg-gray-200 m-5'>
            {
                quiz?.data?.questions.map(q => <Quiz key={q.id} topic={q}></Quiz>)
            }
        </div>
    );
};

export default Questions;