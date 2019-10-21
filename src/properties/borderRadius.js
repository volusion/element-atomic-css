import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses({ br0: { borderRadius: 0 } }),
    ...createResponsiveClasses({ br1: { borderRadius: '.125rem' } }),
    ...createResponsiveClasses({ br2: { borderRadius: '.25rem' } }),
    ...createResponsiveClasses({ br3: { borderRadius: '.5rem' } }),
    ...createResponsiveClasses({ br4: { borderRadius: '1rem' } }),
    ...createResponsiveClasses({ 'br-100': { borderRadius: '100%' } }),
    ...createResponsiveClasses({ 'br-pill': { borderRadius: '9999px' } }),
    ...createResponsiveClasses({
        'br--bottom': {
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0
        }
    }),
    ...createResponsiveClasses({
        'br--top': {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0
        }
    }),
    ...createResponsiveClasses({
        'br--right': {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0
        }
    }),
    ...createResponsiveClasses({
        'br--left': {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0
        }
    })
};

export default classes;
