import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';


const Statictics = () => {
    const graph = useLoaderData()
    const graphData= graph.data
    return (
        <div>
         <LineChart
        width={500}
        height={300}
        data={graphData}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="total" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis dataKey="total" />
        <Tooltip />
      </LineChart>
        </div>
    );
};

export default Statictics;