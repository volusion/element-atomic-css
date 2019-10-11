import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses({ fl: { float: 'left', _display: 'inline' } }),
    ...createResponsiveClasses({ fr: { float: 'right', _display: 'inline' } }),
    ...createResponsiveClasses({ fn: { float: 'none' } })
};

export default classes;
