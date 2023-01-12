import React from 'react';
import {THead,TR,TH} from "./styles"
export function TableHeader(props) {
    return (
       
						<THead>
                        <TR>
                            <TH colSpan='2'>
                                head 1
                            </TH>
                            <TH>head2</TH>
                        </TR>
                        <TR>
                            <TH>Good</TH>
                            <TH>Good Original</TH>
                            <TH>For download</TH>
                            <TH>Rejected</TH>
                            <TH>Downloaded</TH>
                            <TH>Uploaded</TH>
                            <TH>Report date</TH>
                            <TH>Date created</TH>
                            <TH>Name</TH>
                            <TH>Email</TH>
                            <TH>Username</TH>
                            <TH>Total done</TH>

                        </TR>
                    </THead>
    );
}
