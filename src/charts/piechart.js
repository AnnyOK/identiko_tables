import React from 'react'
import { PieChart,Pie, ResponsiveContainer,Legend } from 'recharts'
export function Piechart(props) {
      return (
        <ResponsiveContainer width="100%" height="100%">
<PieChart width={400} height={400}>
         {/* <Legend
         verticalAlign="top"
         align="left"
         iconType="circle"

         /> */}

         <Pie
           data={props.data}
           dataKey="total_done"
           nameKey="email"
           cx={200}
           cy={200}
           innerRadius={5}
           outerRadius={90}
           fill="#82ca9d"
           label//={props.data.email}
         />
       </PieChart>
    
        </ResponsiveContainer>
         );
}
