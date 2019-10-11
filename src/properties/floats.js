import { createResponsiveClasses } from '../utils';

export const floats = {
    ...createResponsiveClasses({ fl: { float: 'left', _display: 'inline' } }),
    ...createResponsiveClasses({ fr: { float: 'right', _display: 'inline' } }),
    ...createResponsiveClasses({ fn: { float: 'none' } })
};
