import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses(
        {
            fl: { float: 'left', _display: 'inline' }
        },
        {
            fr: { float: 'right', _display: 'inline' }
        },
        {
            fn: { float: 'none' }
        }
    )
};

export default classes;
