export function hasToString(value: unknown): value is number | object | [] | boolean | symbol {

    if (typeof value === 'number') return true;

    if (Array.isArray(value)) return true;

    if (typeof value === 'bigint') return true;

    if (typeof value === 'boolean') return true;

    if (typeof value === 'symbol') return true;

    return false;
}