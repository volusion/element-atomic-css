import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses(
        {
            br0: { borderRadius: 0 }
        },
        {
            br1: { borderRadius: '.125rem' }
        },
        {
            br2: { borderRadius: '.25rem' }
        },
        {
            br3: { borderRadius: '.5rem' }
        },
        {
            br4: { borderRadius: '1rem' }
        },
        {
            'br-100': { borderRadius: '100%' }
        },
        {
            'br-pill': { borderRadius: '9999px' }
        },
        {
            'br--bottom': {
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0
            }
        },
        {
            'br--top': {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0
            }
        },
        {
            'br--right': {
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0
            }
        },
        {
            'br--left': {
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0
            }
        }
    )
};

export default classes;
