import React ,{useContext}from 'react';
import { HarmburgerStyle, Size11 } from './styles';
import { Menucontext } from './harmburger';
import { colorStyles } from '../utils/colorstyles';
export function Menu(props) {
    // const { openMenu, setOpenMenu } = useContext(Menucontext)
    // {console.log("from menu:",openMenu)}

const OnClickHandler= ()=>{

}
    return (
        <HarmburgerStyle>
<Size11 onClick={props.onClick} border={`1px solid ${colorStyles.green}`} background={colorStyles.white}>Menu</Size11>
<Size11 onClick={props.onClick} border={`1px  solid ${colorStyles.green}`} background={colorStyles.white}>More...</Size11>
            
        </HarmburgerStyle>
    );
}
