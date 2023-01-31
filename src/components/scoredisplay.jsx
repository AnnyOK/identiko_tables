import React from 'react';
import { Report, Score,ArrowUp,ArrowDown,BarChart, ReportFooter,Group,Note,Pie } from './styles';
import{GiBackwardTime} from "react-icons/gi"

export function Scoredisplay(props) {
    return (
        <Report>
            <div className="header-div">
                <h1> {props.data[0]} </h1>
                {props.icon==="barchart" ? <BarChart/> :props.icon === "group"? <Group/>: props.icon==="note"?<Note/>:<Pie/>}
            </div>
<Score> {props.data[1]}</Score>
            <div>
                <p><span>{true?<ArrowUp/>: <ArrowDown/>} {}%</span>  from yesterday by {}</p>
            </div>
            <ReportFooter >
                <p><GiBackwardTime/>  last updated @  {new Date().toLocaleTimeString()}</p>
            </ReportFooter>
        </Report>
    );
}
