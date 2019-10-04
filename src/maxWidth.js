import { createResponsiveClasses } from './utils';

export const maxWidth = {
    ...createResponsiveClasses({ 'mw-100': { maxWidth: '100%' } }),
    ...createResponsiveClasses({ mw1: { maxWidth: '1rem' } }),
    ...createResponsiveClasses({ mw2: { maxWidth: '2rem' } }),
    ...createResponsiveClasses({ mw3: { maxWidth: '4rem' } }),
    ...createResponsiveClasses({ mw4: { maxWidth: '8rem' } }),
    ...createResponsiveClasses({ mw5: { maxWidth: '16rem' } }),
    ...createResponsiveClasses({ mw6: { maxWidth: '32rem' } }),
    ...createResponsiveClasses({ mw7: { maxWidth: '48rem' } }),
    ...createResponsiveClasses({ mw8: { maxWidth: '64rem' } }),
    ...createResponsiveClasses({ mw9: { maxWidth: '96rem' } }),
    ...createResponsiveClasses({ 'mw-none': { maxWidth: 'none' } })
};
