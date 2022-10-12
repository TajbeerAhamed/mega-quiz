import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
	const { name, logo, total, id } = topic

	return (
		<div>
			<div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 gap-10">
				<img src={logo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
				<div className="flex flex-col justify-between p-6 space-y-8">
					<div className="space-y-2">
						<h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
						<p className="dark:text-gray-100">Total Quiz:{total}</p>
					</div>
					<Link to={`/quiz/${id}`} >
						<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-white-900">Practice Quiz</button>
					</Link>
				</div>
			</div>
		</div >
	);
};

export default Topic;