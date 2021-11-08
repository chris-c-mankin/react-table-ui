import React from 'react';
import { FlattenedObject } from '../../typings/flattenedObject';
import { Tr } from '../finalComponents';
import HeaderValue from './HeaderValue';

export default function Row({
    row,
    headerList
}: {
    row: FlattenedObject;
    headerList: (string | number)[];
}) {

    return (
        <Tr>
            {headerList.map(header => (
                <HeaderValue 
                row={row}
                header={header}/>
            ))}
        </Tr>
    )

}