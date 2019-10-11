import { createResponsiveClasses } from '../utils';

export const backgroundSize = {
    ...createResponsiveClasses({
        cover: {
            backgroundSize: 'cover'
        }
    }),
    ...createResponsiveClasses({
        contain: {
            backgroundSize: 'contain'
        }
    })
};
