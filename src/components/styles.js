import styled from 'styled-components'

// import styled from "styled-components";

// export const ActionButton = styled.button`
//   ${({ theme, borderColor }) => `
//     background: ${theme};
//     border: 1px solid ${borderColor};
//     padding: 5px 15px;
//     height: 40px;
//     margin-left: 10px;
//     border-radius: 5px;
//     cursor: pointer;
//     &:hover {
//       background: ${borderColor};
//     }`}
// `

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  margin-top: 20px;
  padding: 10px 20px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    background: #5DADEC	;
    border-radius: 8px;
  &:hover {
    background: #eaeaea;
  }
  h1 {
    text-transform: capitalize;
  }
`

export const DetailsWrapper = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  img {
    scale: 2;
    height: 300px;
    width: 300px;
  }
`

export const ActionBlock = styled.div`
  display: flex;
  align-items: right;
  justify-content: flex-end;
`

export const FieldSet = styled.div`
display: flex;
  text-align: left;
  p {
    margin-left: 20px;
    text-transform: capitalize;
    font-size: 18px;
  }
`
export const Icon =styled.div`
background-image: url("/Users/okpalaanayo/Desktop/IDENTIKOSOLUTIONS/lassralogo.e63fc20aaa64998ad233.png");
width:300px;
height:150px;


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

//tables style


export const StyledTable = styled.table`
background-color: #7FFFD4;
padding:10px;
margin:2px 10px;
border:1px solid #000;

  // custom css goes here
`

export const THead = styled.thead`
color: #000000;

  // custom css goes here
`

export const TFoot = styled.tfoot`
  // custom css goes here
`

export const TBody = styled.tbody`
  // custom css goes here
`

export const TR = styled.tr`
border-radius:15px;
border:1px solid #22e;

  // custom css goes here
`

export const TH = styled.th`
max-width:200px;
background-color:#00ff00;
margin:50px;
padding:1rem;
  // custom css goes here
`

export const TD = styled.td`
border-radius:8px;
color:#222;
padding:1rem;
margin:1rem;
background-color:
  // custom css goes here
`
export const H1 = styled.h1`
font-size: 20px;
text-align: center;
padding:0.5rem;
margin:1rem;
`