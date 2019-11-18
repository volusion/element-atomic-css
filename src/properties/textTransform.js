import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses(
        { ttc: { textTransform: 'capitalize' } },
        { ttl: { textTransform: 'lowercase' } },
        { ttu: { textTransform: 'uppercase' } },
        { ttn: { textTransform: 'none' } }
    )
};

export default classes;
