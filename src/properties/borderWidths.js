import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses({ bw0: { borderWidth: 0 } }),
    ...createResponsiveClasses({ bw1: { borderWidth: '.125rem' } }),
    ...createResponsiveClasses({ bw2: { borderWidth: '.25rem' } }),
    ...createResponsiveClasses({ bw3: { borderWidth: '.5rem' } }),
    ...createResponsiveClasses({ bw4: { borderWidth: '1rem' } }),
    ...createResponsiveClasses({ bw5: { borderWidth: '2rem' } }),
    ...createResponsiveClasses({ 'bt-0': { borderTopWidth: 0 } }),
    ...createResponsiveClasses({ 'br-0': { borderRightWidth: 0 } }),
    ...createResponsiveClasses({ 'bb-0': { borderBottomWidth: 0 } }),
    ...createResponsiveClasses({ 'bl-0': { borderLeftWidth: 0 } })
};

export default classes;
