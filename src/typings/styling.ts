import * as CSS from 'csstype';

export const CustomizableClassNames = [
    'Table',
    'Tr',
    'Td',
    'Th',
    'THead',
    'TBody'
] as const;

type CustomizableClassName = (typeof CustomizableClassNames)[number];
type CustomClassNameObj<T> = {[key in CustomizableClassName]?: T};

export type CustomCSSInJS = CustomClassNameObj<CSS.Properties>;
export type CustomStyledComponents = CustomClassNameObj<React.FC>;
