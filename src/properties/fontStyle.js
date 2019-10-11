import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses({ i: { fontStyle: 'italic' } }),
    ...createResponsiveClasses({ 'fs-normal': { fontStyle: 'normal' } })
};

export default classes;
