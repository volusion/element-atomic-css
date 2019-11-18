import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses(
        {
            tl: { textAlign: 'left' }
        },
        {
            tr: { textAlign: 'right' }
        },
        {
            tc: { textAlign: 'center' }
        },
        {
            tj: { textAlign: 'justify' }
        }
    )
};

export default classes;
