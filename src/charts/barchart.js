import React from 'react';
import {
	CartesianGrid,
	XAxis,
	YAxis,
	BarChart,
	Bar,
	ResponsiveContainer,
	Tooltip,
	Legend
} from 'recharts';
import { colorStyles } from '../utils/colorstyles';

export function Barchart(props) {
    return (
        
            
        <ResponsiveContainer width="100%" height="100%">
				<BarChart
						width={500}
						height={500}
						data={props.data}
						dataKey={props.data.name}
						margin={{
							top: -80,
							right: 30,
							left: 20,
							bottom: 5,
						  }}
					>
						<Bar
							dataKey={"total_done"}
							fill={colorStyles.orange}
						/>
						<Tooltip/>
						<Legend/>
						<CartesianGrid stroke='#ccc' />
						<XAxis dataKey='name' />
						<YAxis  />
					</BarChart>
				</ResponsiveContainer>
    );
}
