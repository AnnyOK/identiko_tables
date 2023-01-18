import {
	MainDiv,
	CardDiv,
	ChartWrapper,
	PlotWrapper
} from '../components/styles';
import {data} from "../data"
import { Header } from '../components/header';
import { ScoreCard } from '../components/styles';
import React from 'react';
import { Scoredisplay } from '../components/scoredisplay';
import { Footer } from '../components/footer';
import { Barchart } from '../charts/barchart';
import { Linechart } from '../charts/linechart';
import {Piechart} from "../charts/piechart"
import { colorStyles } from '../utils/colorstyles';
export function Main(props) {
	
	return (
		<>
			<MainDiv>
				<Header />
				<CardDiv>
					<ScoreCard>
						{' '}
						<Scoredisplay
							title='TOTAL REG'
							icon='barchart'
						/>
					</ScoreCard>
					<ScoreCard>
						<Scoredisplay
							title='CHILD REG'
							icon='group'
						/>
					</ScoreCard>
					<ScoreCard>
						<Scoredisplay
							title='ONLINE REG'
							icon='note'
						/>
					</ScoreCard>
					<ScoreCard>
						<Scoredisplay
							title='ADULT REG'
							icon='pie'
						/>
					</ScoreCard>
				</CardDiv>
			</MainDiv>
			<ChartWrapper>
				{/* line plot */}

				<PlotWrapper theme={colorStyles.blue} width="55%" height="40vh">
				<Linechart data={data}/>
				</PlotWrapper>
				<PlotWrapper  theme={colorStyles.white} width="35%" height="50vh">
				{/* Bar chart */}
				{true?<Piechart data={data}/>:<Barchart data={data}/>}
				</PlotWrapper>
				
			</ChartWrapper>
			<Footer />
		</>
	);
}
