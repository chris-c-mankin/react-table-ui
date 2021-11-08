import React, { useContext } from 'react';
import { StyleContext } from '.';
import baseComponents from './baseComponents';
import { classNames } from './classNames';

function defaultComponent({
    base
}: {
    base: keyof typeof baseComponents
}) {

    const Render = baseComponents[base];

    const Component: React.FC = ({
        children
    }) => {
        const { css } = useContext(StyleContext);

        return (
            <Render style={css[base]} className={classNames[base]}>
                {children}
            </Render>
        )
    }

    return Component;
    
}

export const DefaultTable = defaultComponent({base: 'Table'});
export const DefaultTableRow = defaultComponent({base: 'Tr'});
export const DefaultTableCell = defaultComponent({base: 'Td'});

const defaultComponents = {
    Table: DefaultTable,
    Tr: DefaultTableRow,
    Td: DefaultTableCell
}

export default defaultComponents;

