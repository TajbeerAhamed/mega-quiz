import React, { useContext } from 'react';
import { TopicDataContext } from '../../layout/Main';


const Home = () => {
    const topic = useContext(TopicDataContext)
    return (
        <div className='flex justify-around mt-40 mx-20'>
           <div>
           <h1 className='text-3xl font-bold'>Welcome to my <span className='text-4xl   font-bold font-poppins text-red-500'>Mega Quiz !!!</span></h1>
           <h2 className='text-2xl text-gray-500'>Here in this website you can see there are a lot of question and ans 
            section and <br></br> you can check them out and judge yourself by answering the questions <br></br> about React, Javascript , Css & Github... </h2>
           </div>
            <div  className='flex flex-col items-center justify-center ' >
                <img   src="https://img.freepik.com/free-vector/stylish-question-mark-web-help-support-template_1017-27390.jpg?size=338&ext=jpg&ga=GA1.2.1610608313.1658417673 " alt="" />
            </div>
            {
topic.map((topics) =>{
    
})
            }
        </div>
    );
};

export default Home;