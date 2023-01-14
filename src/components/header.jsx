import React from 'react';
import { FieldSet, Logo,Icon,Banner, ActionButton } from './styles';
import { SlOptionsVertical } from 'react-icons/sl';
import {TiContacts} from "react-icons/ti"
import { colorStyles } from './styles';
export function Header(props) {
	return (
		<FieldSet>
			<Logo />
			<Banner>
			<ActionButton theme={colorStyles.button} color={colorStyles.green} ><Icon color={colorStyles.green}><SlOptionsVertical/>Menu</Icon></ActionButton>
			<ActionButton theme={colorStyles.button} color={colorStyles.green}> <Icon color={colorStyles.green}><TiContacts/> More</Icon></ActionButton>
			</Banner>
		</FieldSet>
	);
}
