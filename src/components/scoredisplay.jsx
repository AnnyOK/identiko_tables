import React from 'react';
import { Report, Score,ArrowUp,ArrowDown,BarChart, ReportFooter,Group,Note,Pie } from './styles';
import{GiBackwardTime} from "react-icons/gi"

export function Scoredisplay(props) {
    return (
        <Report>
            <div className="header-div">
                <h1> {props.title} </h1>
                {props.icon==="barchart" ? <BarChart/> :props.icon === "group"? <Group/>: props.icon==="note"?<Note/>:<Pie/>}
            </div>
<Score> 111689</Score>
            <div>
                <p><span>{true?<ArrowUp/>: <ArrowDown/>} {}%</span>  from yesterday by {}</p>
            </div>
            <ReportFooter >
                <p><GiBackwardTime/>  last updated @  {}</p>
            </ReportFooter>
        </Report>
    );
}
