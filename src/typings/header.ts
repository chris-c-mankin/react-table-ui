import {Getter} from './getter';
import {RenderFunc} from '../typings/renderFunc';

export type Header<T extends object> = {
    label: string;
    render: Getter<T> | RenderFunc<T>;
}