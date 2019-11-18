import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses(
        {
            'shadow-1': { boxShadow: '0 0 4px 2px rgba( 0, 0, 0, .2 )' }
        },
        {
            'shadow-2': { boxShadow: '0 0 8px 2px rgba( 0, 0, 0, .2 )' }
        },
        {
            'shadow-3': { boxShadow: '2px 2px 4px 2px rgba( 0, 0, 0, .2 )' }
        },
        {
            'shadow-4': { boxShadow: '2px 2px 8px 0 rgba( 0, 0, 0, .2 )' }
        },
        {
            'shadow-5': { boxShadow: '4px 4px 8px 0 rgba( 0, 0, 0, .2 )' }
        }
    )
};

export default classes;
