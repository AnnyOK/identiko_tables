import React from 'react';
import {  Logo,Icon,Banner, ActionButton, Transparent ,IconText} from './styles';
import { SlOptionsVertical } from 'react-icons/sl';
import {TiContacts} from "react-icons/ti"
import { colorStyles } from '../utils/colorstyles';
import {Harmburger} from "./harmburger"
export function Header(props) {
	return (
		<Banner>
			<Transparent>
			<Logo />
			<IconText>Lagos state resident registration agency</IconText>
			</Transparent>
			<Banner>
				<Harmburger/>
			<ActionButton theme={colorStyles.button} color={colorStyles.green} ><Icon color={colorStyles.green}><SlOptionsVertical/>Menu</Icon></ActionButton>
			<ActionButton theme={colorStyles.button} color={colorStyles.green}> <Icon color={colorStyles.green}><TiContacts/> More</Icon></ActionButton>
			</Banner>
		</Banner>
	);
}
