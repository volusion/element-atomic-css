import { createResponsiveClasses } from '../utils';

export const backgroundSize = {
    ...createResponsiveClasses({
        cover: {
            'background-size': 'cover'
        }
    }),
    ...createResponsiveClasses({
        contain: {
            'background-size': 'contain'
        }
    })
};
