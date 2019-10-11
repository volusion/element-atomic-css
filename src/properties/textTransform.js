import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses({ ttc: { textTransform: 'capitalize' } }),
    ...createResponsiveClasses({ ttl: { textTransform: 'lowercase' } }),
    ...createResponsiveClasses({ ttu: { textTransform: 'uppercase' } }),
    ...createResponsiveClasses({ ttn: { textTransform: 'none' } })
};

export default classes;
