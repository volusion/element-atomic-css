import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses(
        {
            cover: {
                backgroundSize: 'cover'
            }
        },
        {
            contain: {
                backgroundSize: 'contain'
            }
        }
    )
};

export default classes;
