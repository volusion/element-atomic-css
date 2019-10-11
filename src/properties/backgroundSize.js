import { createResponsiveClasses } from '../utils';

const classes = {
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

export default classes;
