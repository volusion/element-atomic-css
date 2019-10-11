import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses({ strike: { textDecoration: 'line-through' } }),
    ...createResponsiveClasses({ underline: { textDecoration: 'underline' } }),
    ...createResponsiveClasses({ 'no-underline': { textDecoration: 'none' } })
};

export default classes;
