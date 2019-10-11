import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses({ outline: { outline: '1px solid' } }),
    ...createResponsiveClasses({
        'outline-transparent': { outline: '1px solid transparent' }
    }),
    ...createResponsiveClasses({ 'outline-0': { outline: 0 } })
};

export default classes;
