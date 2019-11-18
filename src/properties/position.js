import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses(
        {
            static: { position: 'static' }
        },
        {
            relative: { position: 'relative' }
        },
        {
            absolute: { position: 'absolute' }
        },
        {
            fixed: { position: 'fixed' }
        }
    )
};

export default classes;
