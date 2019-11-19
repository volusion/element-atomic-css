import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses(
        {
            bw0: { borderWidth: 0 }
        },
        {
            bw1: { borderWidth: '.125rem' }
        },
        {
            bw2: { borderWidth: '.25rem' }
        },
        {
            bw3: { borderWidth: '.5rem' }
        },
        {
            bw4: { borderWidth: '1rem' }
        },
        {
            bw5: { borderWidth: '2rem' }
        },
        {
            'bt-0': { borderTopWidth: 0 }
        },
        {
            'br-0': { borderRightWidth: 0 }
        },
        {
            'bb-0': { borderBottomWidth: 0 }
        },
        {
            'bl-0': { borderLeftWidth: 0 }
        }
    )
};

export default classes;
