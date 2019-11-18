import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses(
        {
            'lh-solid': { lineHeight: 1 }
        },
        {
            'lh-title': { lineHeight: 1.25 }
        },
        {
            'lh-copy': { lineHeight: 1.5 }
        }
    )
};

export default classes;
