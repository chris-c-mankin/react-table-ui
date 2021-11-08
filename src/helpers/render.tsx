import React from 'react';
import { Getter } from '../typings/getter';
import { RenderFunc } from '../typings/renderFunc';
import get from './get';

export default function render<T extends object, P extends object>(Component: React.FC<{rowValue: unknown} & P>, props: P, getter?: Getter<T>): RenderFunc<T> {

    return (row: T) => {

        let rowValue: unknown = undefined;

        if (getter) {
            rowValue = get(row, getter);
        }
        
        return () => (
            <Component 
            rowValue={rowValue}
            {...props}/>
        )
    }
}