import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses({ 'lh-solid': { lineHeight: 1 } }),
    ...createResponsiveClasses({ 'lh-title': { lineHeight: 1.25 } }),
    ...createResponsiveClasses({ 'lh-copy': { lineHeight: 1.5 } })
};

export default classes;
