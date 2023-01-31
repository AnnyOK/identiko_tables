import {
  MainDiv,
  CardDiv,
  ChartWrapper,
  PlotWrapper,
} from '../components/styles'
import axios from 'axios'
// import { data } from '../data'
import { Header } from '../components/header'
import { ScoreCard } from '../components/styles'
import React, { useState, useEffect } from 'react'
import { Scoredisplay } from '../components/scoredisplay'
import { Footer } from '../components/footer'
import { Barchart } from '../charts/barchart'
import { Linechart } from '../charts/linechart'
import { Piechart } from '../charts/piechart'
import { colorStyles } from '../utils/colorstyles'
export function Main(props) {
  const [data, setData] = useState([])
  const [toggle,setToggle]= useState(true)
  const toggleChart= (e)=>{
    setToggle(toggle=>!toggle)
  }
  const api = 'http://10.65.10.7/lasrraImageReportAPI/api/Reports/GetCurrentWeekReport'
  // "proxy":"http://10.65.10.7/lasrraImageReportAPI",

  async function request (){
  const response=  await axios.get(api).then((response) =>response.data)
  setData(response)
  }
  
  const icons = ['barchart', 'group', 'note', 'pie']
  useEffect(() => {
    request()
  }, [])

    const BarChartdata = data.length && Object.entries(data[0]).map(item=>({name:item[0], "Total registered":item[1]}))

  return (
    <>
      <MainDiv>
        {/* <Header /> */}
        <CardDiv>
          {
          data.length &&
            Object.entries(data[0]).map((item, idx) => {
            return  <ScoreCard key ={item}>
                <Scoredisplay data={item}  icon={icons[idx]} />
              </ScoreCard>
            } 
			)
		}
        </CardDiv>
      </MainDiv>
      <ChartWrapper>
        {/* line plot */}

        <PlotWrapper theme={colorStyles.blue} width="80%" height="40vh">
          <Linechart data={data} />
        </PlotWrapper>
        <PlotWrapper theme={colorStyles.white} width="80%" height="50vh">
          {/* Bar chart */}
         <button onClick={toggleChart}> View as {!toggle?"PieChart":"Barchart"}</button>
          {toggle ? <Piechart data={BarChartdata} /> : <Barchart data={BarChartdata} />}
        </PlotWrapper>
      </ChartWrapper>
      <Footer />
    </>
  )
}
