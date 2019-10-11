import { createResponsiveClasses } from '../utils';
import { create } from 'domain';

export const borderRadius = {
    ...createResponsiveClasses({ br0: { 'border-radius': 0 } }),
    ...createResponsiveClasses({ br1: { 'border-radius': '.125rem' } }),
    ...createResponsiveClasses({ br2: { 'border-radius': '.25rem' } }),
    ...createResponsiveClasses({ br3: { 'border-radius': '.5rem' } }),
    ...createResponsiveClasses({ br4: { 'border-radius': '1rem' } }),
    ...createResponsiveClasses({ 'br-100': { 'border-radius': '100%' } }),
    ...createResponsiveClasses({ 'br-pill': { 'border-radius': '9999px' } }),
    ...createResponsiveClasses({
        'br--bottom': {
            'border-top-left-radius': 0,
            'border-top-right-radius': 0
        }
    }),
    ...createResponsiveClasses({
        'br--top': {
            'border-bottom-left-radius': 0,
            'border-bottom-right-radius': 0
        }
    }),
    ...createResponsiveClasses({
        'br--right': {
            'border-top-left-radius': 0,
            'border-bottom-left-radius': 0
        }
    }),
    ...createResponsiveClasses({
        'br--left': {
            'border-top-right-radius': 0,
            'border-bottom-right-radius': 0
        }
    })
};
