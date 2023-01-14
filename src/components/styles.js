import styled from 'styled-components'
import icon from './icon.png'
import {AiOutlineBarChart,AiOutlineArrowUp,AiOutlineArrowDown} from 'react-icons/ai'
import {TiContacts} from 'react-icons/ti'
import {IoIosPeople} from 'react-icons/io'
import {BiPieChartAlt2} from 'react-icons/bi'


// import styled from "styled-components";

export const colorStyles = {
  grey:"#535553",
  green:"#05aa29",
  blue:"#1c183f",
  white:"#e6eae5",
  red:"#e2412f",
  shadow:"#c8d0c7",
    button:"#e6f3f9f5"
}
//MY ICONS ARE HERE


export const ArrowUp = styled(AiOutlineArrowUp)`
color:${colorStyles.green};
`
export const ArrowDown = styled(AiOutlineArrowDown)`
color:${colorStyles.green};
`
export const BarChart = styled(AiOutlineBarChart)`
color:${colorStyles.white};
background-color: ${ colorStyles.blue };
border-radius:50px;
margin:5px;
padding:3px;
`
export const Group = styled(IoIosPeople)`
color:${colorStyles.white};
background-color: ${ colorStyles.red };
border-radius:50px;
margin:5px;
padding:3px;
`
export const Note = styled(TiContacts)`
color:${colorStyles.white};
background-color: ${ colorStyles.red };
border-radius:50px;
margin:5px;
padding:3px;
`
export const Pie = styled(BiPieChartAlt2)`
color:${colorStyles.white};
background-color: ${ colorStyles.green };
border-radius:50px;
margin:5px;
padding:3px;
`

// export const 
export const ActionButton = styled.button`
  ${({ theme, color }) => `
    background: ${theme};
    color:${color}
    border-style: none;
    border:0;
    padding: 5px 15px;
    height: 40px;
    margin-left: 10px;
    marging-top: 10px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background: #71eb5c;
    }`}
`
// icon component 
export const Icon = styled.div`
  ${({ color, radius, bgColor, padding }) => `
    color: ${color};
    border: none;
    ${padding && `padding:${padding};`}
    // border-radius: ${radius};
    border-radius:15px;
background-color:${bgColor};
    
    `}
    p{
      width:30px;
      heigth:30px;
      border-radius:50%;
    }
`

// #69f0ae green #18ffff bluegreen
export const MainDiv = styled.div`
  // position:absolute;
  // display: flex;
  padding: 20px;
  height: 50vh;
  width: 100vw;
  padding-right: 20px;
  align-items: center;
  background-image: linear-gradient(to right, #69f0ae, #18ffff);
  justify-content: space-between;
  margin-top: 0px;
  // &:hover {
  //   background: #eaeaea;
  // }
  h1 {
    text-transform: capitalize;
  }
`
export const CardDiv = styled.div`
  // height:0vh;
  // position:absolute;
  // margin-top:-50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0px;
`
export const ChartWrapper = styled.div`
  display: flex;
  background-color:${colorStyles.white};
  margin-top: -50px;
  padding-top: 0px;
  padding-left: 20px;
  width: 100%;
  height: 50vh;
  // background-color:grey;
  border: none;
`
export const ScoreCard = styled.div`
  width: calc(25% - 30px);
  margin-bottom: 50px;
  margin-top: 20px;
  // margin:auto;
  height: 20vh;
  border-radius: 8px;
  background-color: ${colorStyles.white};
  border: 2px ${colorStyles.grey};
  box-shadow: 3px 5px ${colorStyles.shadow};
`
export const Score = styled.h1`
font-size:1.5rem;
color:black;
font-weight:900;
margin:0;
padding:0;
text-align:left;
justify-self:left;
`
export const PlotWrapper = styled.div`
  padding: 20px;
  border: 1px solid ${colorStyles.grey};
  border-radius: 6px;
  background-color: ${colorStyles.blue};
  height: 30vh;
  width: 40vw;
  box-shadow: 3px 5px ${colorStyles.shadow};
  margin: 0 10px 5px 10px;
  // img {
  //   scale: 2;
  //   height: 300px;
  //   width: 300px;
  // }
`

export const Report = styled.div`
  ${({ title }) => `
  display: flex;
  heigth :100%;
  padding:5px;
  flex-direction:column;
  align-items: center;
  p{
    color: ${colorStyles.grey};
    font-size:12px;
    margin:0:
  }
  span{
    color:${colorStyles.green};
    font-size:12px;
  }
  .header-div{
    display:flex;
    width:100%;
    font-size:2rem;
    justify-content: space-between;
    h1{
      color: ${colorStyles.grey};
      font-size:1rem;
    }
  }`}
`
export const ReportFooter = styled.div`
border-top:2px solid${colorStyles.grey};
    margin:0;
    width:100%;
    heigth:auto;
    padding:0;
    border-bottom-radius:15px;
    p{
      margin:0;
      border:0;
      padding:0;
    }
`
export const Banner = styled.div`
  display: flex;
  margin: 10px;
  justify-content: flex-end;
`

export const FieldSet = styled.div`
  display: flex;
  justify-content: space-between;

  // text-align: left;
  p {
    margin-left: 20px;
    text-transform: capitalize;
    font-size: 18px;
  }
`
export const Logo = styled.div`
  background-image: url(${icon});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  font-size: 11px;
  margin: 25px;
  width: 100px;
  height: 70px;
`
export const InputWrapper = styled.div`
  display: flex;
  height: 40px;
  input {
    width: calc(100% - 90px);
    border: 1px solid #ccc;
    padding: 5px 15px;
    border-radius: 5px;
  }
`