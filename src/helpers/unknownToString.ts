import { hasToString } from "../utility/isType";

export default function unknownToString(value: unknown) {

    if (typeof value === 'string') return value;

    if (hasToString(value)) return value.toString();

    else return JSON.stringify(value);

}