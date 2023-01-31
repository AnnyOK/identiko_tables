import React from 'react'
import {
  CartesianGrid,
  XAxis,
  YAxis,
  BarChart,
  Bar,
  ResponsiveContainer,
  LabelList,
  Tooltip,
  Legend,
} from 'recharts'
import { colorStyles } from '../utils/colorstyles'

export function Barchart(props) {
  console.log('barchart', props.data)
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={500}
        data={props.data}
        dataKey={props.data}
        margin={{
          top: 1,
          right: 2,
          left: 2,
          bottom: 1,
        }}
      >
        <Bar
          dataKey={'Total registered'}
          fill={colorStyles.orange}
          radius={3}
          label={{ position: 'insideBottom', fill: 'black' }}
          name="name"
        />
        <LabelList
          dataKey="value"
          position="insideBottom"
          angle={270}
          offset={25}
		  fill="black"
        />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </BarChart>
    </ResponsiveContainer>
  )
}
