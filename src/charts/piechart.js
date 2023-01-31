import React from 'react'
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip,Legend } from 'recharts'
export function Piechart(props) {
  const COLORS = ['#8884d8', '#82ca9d', '#FFBB28', '#FF8042', '#AF19FF']
const {data} = props
  console.log('pie chatrt', data)

//   const CustomTooltip = ({ active, payload, label }) => {
//     console.log( 'from customtoltip',active,payload,label)
//     if (active) {
//        return (
//        <div
//           className="custom-tooltip"
//           style={{
//              backgroundColor: "#ffff",
//              padding: "5px",
//              border: "1px solid #cccc"
//           }}
//        >
//           {/* <label>{`${payload[0].name} : ${payload[0].value}%`}</label> */}
//        </div>
//     );
//  }
//  }
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={900} height={900}>
        <Pie
          data={props.data}
          dataKey="Total registered"
          // nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={5}
          outerRadius={90}
          fill="#82ca9d"
          label //={props.data.email}
        >
        {data.length && data.map((item, idx) => (
          <Cell key={`cell-${idx}`} fill={COLORS[idx]} />
        ))}
        </Pie>
      </PieChart>
      {/* <Tooltip content={<CustomTooltip/>}/> */}
      {/* <Legend/> */}
    </ResponsiveContainer>
  )
}
