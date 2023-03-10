import styled from 'styled-components'
import icon from './icon.png'
import {AiOutlineBarChart,AiOutlineArrowUp,AiOutlineArrowDown} from 'react-icons/ai'
import {TiContacts} from 'react-icons/ti'
import {IoIosPeople} from 'react-icons/io'
import {BiPieChartAlt2} from 'react-icons/bi'
import { HiMenu } from 'react-icons/hi'

import { colorStyles } from '../utils/colorstyles'
import { devices } from '../utils/devices.'
// import styled from "styled-components";

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
export const  HarmMenu = styled(HiMenu)`
color:${colorStyles.green};
background-color: ${ colorStyles.white };
border-radius:5px;
margin:10px;
position:absolute;
right:0;
top:0;
box-shadow:2px 3px ${colorStyles.grey};
padding:0px;
width:25px;
height:20px;
@media ${devices.tablets}{
  border-radius:5px;
margin:10px;
position:absolute;
right:0;
top:0;
box-shadow:2px 3px ${colorStyles.grey};
padding:5px;
width:50px;
height:50px;

}
@media ${devices.desktop}{
  // display:grid;
}
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
    }
    // visibility: hidden;
    display:none;
    `}
`
//Harmburger Menu
export const HarmburgerStyle= styled.div`
width:50px;
height:50px;
position:absolute;
top:0;
right:0;
margin:10px;
// visibility: hidden
@media ${devices.tablets}{
  visibility: hidden
  // display:contents;
}
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
display:flex;
flex-direction:column;
  height: fit-content;
  width: 100%;
  align-items: center;
  background-image: linear-gradient(to right, #69f0ae, #18ffff);
  justify-content: space-between;
  margin: 0;
  @media ${devices.tablets}{
    height: fit-content;
    background-color:red;
    justify-content: space-evenly;

  }
  
`
export const CardDiv = styled.div`
  height:fit-content;
  // position:absolute;
  padding-top:30px;
  width: 100%;
  display: flex;
  flex-wrap:wrap;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding:10px;
  @media${devices.tablets}{
    height:fit-content;
    display:grid;
    grid-template-columns:auto auto;
  justify-content: space-evenly;
    grid-gap:10px;
    padding:10px;
  }
  @media ${devices.laptop}{
    display:grid;
    grid-template-columns:25%  25% auto;
    // flex-direction:column;
    // height: fit-content;
  }
`
export const ChartWrapper = styled.div`
  display: flex;
  flex-direction:column;
  background-color:${colorStyles.white};
  margin: 0;
  padding: 20px;
  width: 100%;
  height: fit-content;
  border: none;
  @media ${devices.tablets}{
    height:fit-content;
    flex-direction: column;
    margin-top:5px;
  justify-content: center;


  }
  @media ${devices.tablets}{
    height:fit-content;
    flex-direction: row;
    margin-top:5px;
  justify-content: center;
  }
`
export const ScoreCard = styled.div`
  min-width: 80%;
  margin:20px auto;;
  min-height: 150px;
  border-radius: 8px;
  background-color: ${colorStyles.white};
  border: 2px ${colorStyles.grey};
  box-shadow: 1px 1px ${colorStyles.shadow};
  &:hover{
    width:300px;
    height: 30vh;
    // background-color: ${colorStyles.blue}
  }
  @media${devices.tablets}{
width:100%;
height:150px;
&:hover{
  height:150px;
  box-shadow:2px 3px ${colorStyles.shadow};
}
  }
`
export const Score = styled.h1`
font-size:1.1rem;
color:black;
font-weight:800;
margin:0;
padding-left:1rem;
text-align:left;
justify-self:left;
`
export const PlotWrapper = styled.div`
${({theme,width,height})=>`
padding: 10px;
  border: 1px solid ${colorStyles.grey};
  border-radius: 6px;
  margin:20px;
  // position: relative;
  background-color: ${theme};
  height: 45vh;
  width: ${width||"40vw"};
  box-shadow: 3px 5px ${colorStyles.shadow};
  margin: 20px auto;`
}
  @media ${devices.tablets}{
align-self:center;
margin-top:10px;
width:90%;
height:width;
  }
  button{
    background-color:${colorStyles.green};
    color:${colorStyles.blue}
    top:5px;
    left:10px;
    border-radius:5px;
  }
`

export const Report = styled.div`
  ${({ title }) => `
  display: flex;
  heigth :auto;
  padding:5px;
  flex-direction:column;
  align-items: left;
  padding-left:1rem;
  p{
    color: ${colorStyles.grey};
    font-size:12px;
    margin:0.5rem 0;
    text-align:left;
    padding-left:1rem
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
  align-items: left;
    padding:0;
    border-bottom-radius:15px;
    p{
    }
`
export const Banner = styled.div`
  display: flex;
  z-index:1000;
  padding: 10px;
  justify-content: space-between;
  
`
export const NavBar =styled.div`

width:100%;
height:fit-content;
display:flex;
justify-content:flex-end;
// position:relative;
top:40px;
margin:50px 0 10px 0;;
background-image:linear-gradient(to right,${colorStyles.grey},${colorStyles.white},${colorStyles.grey});
a{
  align-self: right;
  margin:2px;
  padding:3px 5px;
  // width:100%; 
};

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
export  const IconText = styled.p`
margin:0;
padding:0;
font-size:8px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
color:black
`
export const Logo = styled.div`
  background-image: url(${icon});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  font-size: 11px;
   margin: auto;
  width: 100px;
  height: 70px;
`
export const Transparent = styled.div`
padding:0;
margin:0;
display:flex;
flex-direction:column;
justify-content:center;
background-color:transparent;
@media${devices.tablets}{
  justify-content:left;
  position:absolute;
  // top:30px;
  left:30px;
  display:flex;

  // top:20px;
  // left:20px;
  
};
@media${devices.laptop}{
  display:flex;
  justify-content:left;
  position:relative;
  // top:40px;
  // left:40px;
  
}
`

export const Size11 = styled.p`
${({border,background})=>`
font-size: 11px;
border: ${border};
margin:1px;
text-align:center;
border-radius:5px;
background-color:${background};
color:${colorStyles.black};
span {
  color: ${colorStyles.bluetext};
  font-weight: bold;
}
`}
`