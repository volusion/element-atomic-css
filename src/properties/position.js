import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses({ static: { position: 'static' } }),
    ...createResponsiveClasses({ relative: { position: 'relative' } }),
    ...createResponsiveClasses({ absolute: { position: 'absolute' } }),
    ...createResponsiveClasses({ fixed: { position: 'fixed' } })
};

export default classes;
