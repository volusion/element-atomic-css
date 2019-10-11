import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses({ 'ws-normal': { whiteSpace: 'normal' } }),
    ...createResponsiveClasses({ nowrap: { whiteSpace: 'nowrap' } }),
    ...createResponsiveClasses({ pre: { whiteSpace: 'pre' } })
};

export default classes;
