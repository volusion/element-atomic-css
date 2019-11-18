import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses(
        {
            tracked: { letterSpacing: '.1em' }
        },
        {
            'tracked-tight': { letterSpacing: '-.05em' }
        },
        {
            'tracked-mega': { letterSpacing: '.25em' }
        }
    )
};

export default classes;
