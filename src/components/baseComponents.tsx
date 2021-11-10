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

const BaseTh: BaseComponent = ({children, ...rest}) => (
    <th {...rest}>{children}</th>
);

const BaseTHead: BaseComponent = ({children, ...rest}) => (
    <thead {...rest}>{children}</thead>
);

const BaseTBody: BaseComponent = ({children, ...rest}) => (
    <tbody {...rest}>{children}</tbody>
);

const baseComponents = {
    Table: BaseTable,
    Tr: BaseTr,
    Td: BaseTd,
    Th: BaseTh,
    THead: BaseTHead,
    TBody: BaseTBody
}

export default baseComponents;