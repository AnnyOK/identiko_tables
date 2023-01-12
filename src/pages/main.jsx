import { MainDiv,H1, } from "../components/styles";
import { MainTable } from "../components/mainTable";
import { Header } from "../components/header";
import { TableHeader } from "../components/tableHeader";
import React from 'react';
// import { MainDiv } from '../components/styles';
export function Main(props) {
    let data = [{
        email:"tryitout@gmail.com",
        good:50,
        good_original: 80,
        for_download: 70,
        rejected: 50,
        downloaded: 900,
        uploaded: 100,
        report_date: 11-1-2023,
        date_created: 11-1-2023,
        name:"Just Ask Me",
        username:"okay123",
        total_done:54430,
        _id:"a34boiad2a32mn"

    },{
        email:"Dontry@gmail.com",
        good:60,
        good_original: 80,
        for_download: 70,
        rejected: 50,
        downloaded: 900,
        uploaded: 100,
        report_date: 2-2-2023,
        date_created: 11-1-2023,
        name:"Just Ask Me",
        username:"okay123",
        total_done:54430,
        _id:"a34b65ad2a32mn"
    },]
	return (<div>
			 <MainDiv>
                <Header/>
				<H1> This is the title of this page</H1>
                <TableHeader/>
                {data.map((user,idx)=><MainTable user={user} key={idx}/>)}
                {/* <MainTable/> */}
			 </MainDiv>
            </div>
	);
}
