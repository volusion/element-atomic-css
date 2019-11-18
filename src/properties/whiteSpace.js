import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses(
        { 'ws-normal': { whiteSpace: 'normal' } },
        { nowrap: { whiteSpace: 'nowrap' } },
        { pre: { whiteSpace: 'pre' } }
    )
};

export default classes;
