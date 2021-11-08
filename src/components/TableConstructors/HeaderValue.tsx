import React from 'react';
import { FlattenedObject } from '../../typings/flattenedObject';
import { Td } from '../finalComponents';
import ComponentAsHeaderValue from './ComponentAsHeaderValue';

// renders the value of a given header from a row

export default function HeaderValue<T extends FlattenedObject>({
    header,
    row
}: {
    row: T;
    header: string | number;
}) {

    const valueToRender = row[header];

    return (
        <Td>
            {
                typeof valueToRender === 'function' ? (

                    <ComponentAsHeaderValue 
                    Component={valueToRender}/>

                ) : valueToRender
            }
        </Td>
    )

}