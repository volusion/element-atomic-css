import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses(
        {
            strike: { textDecoration: 'line-through' }
        },
        {
            underline: { textDecoration: 'underline' }
        },
        {
            'no-underline': { textDecoration: 'none' }
        }
    )
};

export default classes;
