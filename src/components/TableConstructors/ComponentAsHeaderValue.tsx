import React from 'react';

// renders a component extracted from a flattened data row
// the component props are preset in the component factory's execution context

export default function RenderComponentFromHeader({Component}: {
    Component: () => JSX.Element
}) {

    return (
        <Component />
    )

}