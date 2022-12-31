import React from 'react'
import { useState } from 'react';

import { useEffect } from 'react';
import { LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";

export default function Charts() {
  const [data, setData] = useState();

  useEffect(()=>{
  fetch("https://capstone-backend-mslh.onrender.com/goldPrice",{mode:'cors'})
  .then(res=>res.json())
  .then(data=>setData(data));
},[])

  return (<div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "100vh"}}>
    <h2>Past ten days report</h2>
      <LineChart
        width={1000}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="18_k" stroke="#8884d8" />
        <Line type="monotone" dataKey="20_k" stroke="#82ca9d" />
        <Line type="monotone" dataKey="21_k" stroke="pink" />
        <Line type="monotone" dataKey="22_k" stroke="brown" />
        <Line type="monotone" dataKey="24_k" stroke="orange" />
      </LineChart>
    </div>
  );
}
