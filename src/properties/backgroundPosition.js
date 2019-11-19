import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses(
        {
            'bg-center': {
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center'
            }
        },
        {
            'bg-top': {
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top center'
            }
        },
        {
            'bg-right': {
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center right'
            }
        },
        {
            'bg-bottom': {
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom center'
            }
        },
        {
            'bg-left': {
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center left'
            }
        }
    )
};

export default classes;
