import React, { createContext } from 'react';
import { Header } from '../typings/header';
import { CustomCSSInJS, CustomStyledComponents } from '../typings/styling';
import { Table } from './finalComponents';
import '../styles/styles.css';
import flatten from '../helpers/flattenArray';
import Row from './TableConstructors/Row';

export const StyleContext = createContext<{
    css: CustomCSSInJS;
    styled: CustomStyledComponents;
}>(undefined!)

export function TableUI<T extends object>({
    customStyles,
    customStyledComponents,
    data,
    headers
}: {
    customStyles?: CustomCSSInJS;
    customStyledComponents?: CustomStyledComponents;
    data: T[];
    headers: Header<T>[];

}) {

    const flattenedData = flatten(data, headers);
    const headerList = headers.map(header => header.label) as unknown as (keyof (typeof flattenedData)[number])[];

    return (
        <StyleContext.Provider value={{
            css: customStyles || {},
            styled: customStyledComponents || {}
        }}>
            <Table>
                <thead>
                    {headerList.map(header => (
                        <th>
                            {header}
                        </th>
                    ))}
                </thead>
                <tbody>
                    {flattenedData.map(row => (
                        <Row 
                        row={row}
                        headerList={headerList}/>
                    ))}
                </tbody>
            </Table>
        </StyleContext.Provider>
    )
    
}

