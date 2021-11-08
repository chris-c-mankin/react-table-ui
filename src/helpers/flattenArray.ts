import { Header } from '../typings/header';
import flattenObject from './flattenObject';

export default function flatten<T extends object>(data: T[], headers: Header<T>[]) {

    const flattened = data.map(row => flattenObject(row, headers))

    return flattened;

}