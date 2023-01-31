import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export function UserReg(props) {
    const [regList,setRegList] = useState([])
    const {id} = useParams()
    async function getRegList(){
        const {data} =await  axios.get(`http://10.65.10.7/lasrraImageReportAPI/api/Reports/GetReportsByUserId/${id}`
        )
        console.log( "user reg data",data)
        setRegList(data)
    }
    useEffect(()=>{
        getRegList()
    },[])
    return (
        <div>
            this is user regs page
        </div>
    );
}
