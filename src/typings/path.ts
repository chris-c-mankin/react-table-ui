type Join<K, P = ""> = K extends string | number ?
    P extends string | number ?
    `${K}${"" extends P ? "" : "."}${P}`
    : never : never;

type Prev = [never, 0, 1, 2, 3, 4, 5, ...0[]]

export type Path<T, D extends number = 5> = [D] extends [never] ? never : T extends object ?
{ [K in keyof T]-?: K extends string | number ?
    `${K}` | (Path<T[K], Prev[D]> extends infer R ? Join<K, R> : never)
    : never
}[keyof T] : "";