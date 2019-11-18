import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses(
        { i: { fontStyle: 'italic' } },
        { 'fs-normal': { fontStyle: 'normal' } }
    )
};

export default classes;
