import { Getter } from "../typings/getter";
import { getAtPath } from "./getAtPath";

export default function get<T extends object>(obj: T, getValue: Getter<T>) {
    
    if (typeof getValue === 'string') {
        return getAtPath(obj, getValue);
    }

    if (Array.isArray(getValue) && typeof getValue[0] === 'function') {
        const [locater, ...args] = getValue;
        return locater(obj, ...args);
    }
};