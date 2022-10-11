import React from 'react';


const Home = () => {
    return (
        <div className='flex justify-around mt-40 mx-20'>
           <div>
           <h1 className='text-3xl font-bold'>Welcome to <span className='text-4xl   font-bold font-poppins text-red-500'>Mega Quiz !!!</span></h1>
           </div>
            <div  className='flex flex-col items-center justify-center ' >
                <img   src="https://img.freepik.com/free-vector/stylish-question-mark-web-help-support-template_1017-27390.jpg?size=338&ext=jpg&ga=GA1.2.1610608313.1658417673 " alt="" />
            </div>
        </div>
    );
};

export default Home;