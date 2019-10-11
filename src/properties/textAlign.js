import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses({ tl: { textAlign: 'left' } }),
    ...createResponsiveClasses({ tr: { textAlign: 'right' } }),
    ...createResponsiveClasses({ tc: { textAlign: 'center' } }),
    ...createResponsiveClasses({ tj: { textAlign: 'justify' } })
};

export default classes;
