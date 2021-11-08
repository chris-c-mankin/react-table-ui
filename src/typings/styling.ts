import * as CSS from 'csstype';

const CustomizableClassNames = [
    'Table',
    'Tr',
    'Td'
] as const;

type CustomizableClassName = (typeof CustomizableClassNames)[number];
type CustomClassNameObj<T> = {[key in CustomizableClassName]?: T};

export type CustomCSSInJS = CustomClassNameObj<CSS.Properties>;
export type CustomStyledComponents = CustomClassNameObj<React.FC>;
