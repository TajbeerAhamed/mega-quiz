import React from 'react';

const Quiz = ({topic}) => {
    console.log(topic);
    return (
        <div>
           <div className="m-4 border-2">
      <h1 className='font-poppins'>{topic.question}</h1>
      <label htmlFor="1">
        <p className='font-poppins'>
          <input  type="radio" name="answer" id="1" /> {topic.options[0]}
        </p>
      </label>
      <label htmlFor="2">
        <p className='font-poppins'>
          <input type="radio" name="answer" id="2" /> {topic.options[1]}
        </p>
      </label>
      <label htmlFor="3">
        <p className='font-poppins'>
          <input type="radio" name="answer" id="3" /> {topic.options[2]}
        </p>
      </label>
      <label htmlFor="4">
        <p className='font-poppins'>
          <input type="radio" name="answer" id="4" /> {topic.options[3]}
        </p>
      </label>
    </div> 
        </div>
    );
};

export default Quiz;