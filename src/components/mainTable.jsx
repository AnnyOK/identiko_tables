import React from 'react';
import { StyledTable, THead, TFoot, TBody, TR, TH, TD } from './styles';

export function MainTable(props) {
	return (
		<div>
			<StyledTable
				day={props.user.date_created}
				key={props.key}
			>
				<TR>
					<TH> key</TH>
					<TD>
                        
						<TBody>
							<TR>
								<TD>{props.user.good }</TD>
								<TD>{props.user.good_original}</TD>
								<TD>{props.user.downloaded}</TD>
								<TD>{props.user.rejected} </TD>
								<TD>{props.user.downloaded} </TD>
								<TD>{props.user.upload} </TD>
								<TD>{props.user.report_date} </TD>
								<TD>{props.user.created} </TD>
								<TD>{props.user.name} </TD>
								<TD>{props.user.email} </TD>
								<TD>{props.user.username} </TD>
								<TD>{props.user.total_done} </TD>
								{/* <TD>{props.user.} </TD> */}
							</TR>
						</TBody>
					</TD>
				</TR>
			</StyledTable>
		</div>
	);
}
