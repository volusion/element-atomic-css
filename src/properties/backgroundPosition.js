import { createResponsiveClasses } from '../utils';

export const backgroundPosition = {
    ...createResponsiveClasses({
        'bg-center': {
            'background-repeat': 'no-repeat',
            'background-position': 'center center'
        }
    }),
    ...createResponsiveClasses({
        'bg-top': {
            'background-repeat': 'no-repeat',
            'background-position': 'top center'
        }
    }),
    ...createResponsiveClasses({
        'bg-right': {
            'background-repeat': 'no-repeat',
            'background-position': 'center right'
        }
    }),
    ...createResponsiveClasses({
        'bg-bottom': {
            'background-repeat': 'no-repeat',
            'background-position': 'bottom center'
        }
    }),
    ...createResponsiveClasses({
        'bg-left': {
            'background-repeat': 'no-repeat',
            'background-position': 'center left'
        }
    })
};
