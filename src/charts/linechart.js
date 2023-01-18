import React from 'react'
import { LineChart,Line,CartesianGrid,XAxis,YAxis,ResponsiveContainer } from 'recharts'
export function Linechart(props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={500} height={250} data={props.data}>
        <Line type="monotone" dataKey="total_done" stroke="#8884d8" />
        {/* <CartesianGrid stroke="#ccc" /> */}
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </ResponsiveContainer>
  )
}
