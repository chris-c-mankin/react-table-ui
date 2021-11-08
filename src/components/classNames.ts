const DEFAULT_CLASSNAME_PREFIX = 'React-Table-UI' 

function prefixClassName(className: string) {
    return `${DEFAULT_CLASSNAME_PREFIX}-${className}`
}

const ClassNames = [
    'Table',
    'Tr',
    'Td'
] as const;

function prefixClassNames(classNames: typeof ClassNames) {
    return classNames.reduce((acc,className) => {
        acc[className] = prefixClassName(className);
        return acc;
    },{} as {[key in typeof ClassNames[number]]: string})
}

export const classNames = prefixClassNames(ClassNames);