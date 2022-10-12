import React, { useState } from 'react'
import Option from './Option';
import parse from 'html-react-parser';
import { EyeIcon } from '@heroicons/react/24/solid'

const Quiz = ({ topic }) => {

  const [revealAns, setRevealAns] = useState(false)

  return (
    <div className="m-4 border-2 rounded-lg">
      <div className='flex justify-between mx-36'>
        <h1 className='font-poppins text-xl mb-4 font-semibold'>{parse(topic.question)}</h1>
        <p className='cursor-pointer' onClick={() => setRevealAns(true)}>
        <EyeIcon className="h-6 w-6 mt-5 text-green-500"/>
        
        </p>
      </div>
      <form className='grid grid-cols-2 gap-y-2 mb-4'>
        {
          topic?.options.map((t, index) => <Option revealAns={revealAns} c={topic.correctAnswer} index={index} key={index} t={t}></Option>)
        }
      </form>
    </div>
  );
};

export default Quiz;