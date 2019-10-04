import { createResponsiveClasses } from '../utils';

export const position = {
    ...createResponsiveClasses({ static: { position: 'static' } }),
    ...createResponsiveClasses({ relative: { position: 'relative' } }),
    ...createResponsiveClasses({ absolute: { position: 'absolute' } }),
    ...createResponsiveClasses({ fixed: { position: 'fixed' } })
};
