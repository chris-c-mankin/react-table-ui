import { Path } from "./path";
import { Locater } from "./locater";

export type Getter<T extends object> = Path<T> | Locater<T>;