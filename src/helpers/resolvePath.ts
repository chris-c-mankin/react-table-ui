export default function resolvePath<T extends object>(obj: T, path: string[], depth = 0): unknown {

    const nextValue: unknown = obj[path[depth] as keyof T];

    if (depth === path.length - 1) return nextValue;

    if (!nextValue) return undefined;

    if (typeof nextValue !== 'object') return undefined;

    return resolvePath(nextValue as object, path, depth + 1);
}