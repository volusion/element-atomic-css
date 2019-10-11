import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses({
        'bg-center': {
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
        }
    }),
    ...createResponsiveClasses({
        'bg-top': {
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top center'
        }
    }),
    ...createResponsiveClasses({
        'bg-right': {
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center right'
        }
    }),
    ...createResponsiveClasses({
        'bg-bottom': {
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom center'
        }
    }),
    ...createResponsiveClasses({
        'bg-left': {
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center left'
        }
    })
};

export default classes;
