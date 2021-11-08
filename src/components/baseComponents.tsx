import React from 'react';
import * as CSS from 'csstype';

type BaseComponent = React.FC<{
    style?: CSS.Properties;
    className: string;
}>

const BaseTable: BaseComponent = ({children,...rest}) => (
    <table {...rest}>{children}</table>
);

const BaseTr: BaseComponent = ({children,...rest}) => (
    <tr {...rest}>{children}</tr>
)

const BaseTd: BaseComponent = ({children,...rest}) => (
    <td {...rest}>{children}</td>
)

const baseComponents = {
    Table: BaseTable,
    Tr: BaseTr,
    Td: BaseTd
}

export default baseComponents;