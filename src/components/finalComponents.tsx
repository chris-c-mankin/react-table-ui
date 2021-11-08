import React, { useContext } from 'react';
import { StyleContext } from '.';
import defaultComponents from './defaultComponents';

function finalComponent({
    name
}: {
    name: keyof typeof defaultComponents
}) {

    const Component: React.FC = ({
        children
    }) => {

        const { styled } = useContext(StyleContext);

        const StyledRender = styled[name];
        const DefaultRender = defaultComponents[name];

        const Render = StyledRender ? StyledRender : DefaultRender;

        return (
            <Render>
                {children}
            </Render>
        )
    }

    return Component;
}

export const Table = finalComponent({name: 'Table'});
export const Tr = finalComponent({name: 'Tr'});
export const Td = finalComponent({name: 'Td'});