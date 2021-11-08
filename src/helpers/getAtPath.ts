import pathToPathArr from "./pathToPathArr";
import resolvePath from "./resolvePath";


export function getAtPath(obj: object, path: string) {

    const pathArr = pathToPathArr(path);

    const value = resolvePath(obj, pathArr);

    return value;

};

