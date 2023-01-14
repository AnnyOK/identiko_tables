import { MainDiv,CardDiv,ChartWrapper,PlotWrapper } from '../components/styles';
import { Header } from '../components/header';
import { ScoreCard } from '../components/styles';
import React from 'react';
import { Scoredisplay } from '../components/scoredisplay';
// import { MainDiv } from '../components/styles';
export function Main(props) {
	let data = [
		{
			email: 'tryitout@gmail.com',
			good: 50,
			good_original: 80,
			for_download: 70,
			rejected: 50,
			downloaded: 900,
			uploaded: 100,
			report_date: 11 - 1 - 2023,
			date_created: 11 - 1 - 2023,
			name: 'Just Ask Me',
			username: 'okay123',
			total_done: 54430,
			_id: 'a34boiad2a32mn',
		},
		{
			email: 'Dontry@gmail.com',
			good: 60,
			good_original: 80,
			for_download: 70,
			rejected: 50,
			downloaded: 900,
			uploaded: 100,
			report_date: 2 - 2 - 2023,
			date_created: 11 - 1 - 2023,
			name: 'Just Ask Me',
			username: 'okay123',
			total_done: 54430,
			_id: 'a34b65ad2a32mn',
		},
	];
	return (
		<>
		<MainDiv>
			<Header/>
            <CardDiv>
            <ScoreCard> <Scoredisplay title="TOTAL REG" icon ="barchart"/></ScoreCard>
			<ScoreCard ><Scoredisplay title="CHILD REG" icon ="group"/></ScoreCard>
			<ScoreCard ><Scoredisplay title="ONLINE REG" icon ="note"/></ScoreCard>
			<ScoreCard ><Scoredisplay title="ADULT REG" icon ="pie"/></ScoreCard>
            </CardDiv>
		</MainDiv>
		<ChartWrapper>
			<PlotWrapper/>
			<PlotWrapper/>
            </ChartWrapper>
		</>

	);
}

