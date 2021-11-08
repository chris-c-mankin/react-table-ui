import { FlattenedObject } from "../typings/flattenedObject";
import { Header } from "../typings/header";
import get from "./get";
import unknownToString from "./unknownToString";

export default function flattenObject<T extends object>(obj: T, headers: Header<T>[]): FlattenedObject {

    const flatRow = headers.reduce((acc, header) => {

        if (typeof header.render === 'function') {

            acc[header.label] = header.render(obj);

            return acc;

        } else {

            const value = get(obj, header.render);

            acc[header.label] = unknownToString(value);

            return acc;

        }

        

    },{} as {[key: string]: any});

    return flatRow;
}