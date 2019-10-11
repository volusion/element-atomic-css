import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses({ tracked: { letterSpacing: '.1em' } }),
    ...createResponsiveClasses({
        'tracked-tight': { letterSpacing: '-.05em' }
    }),
    ...createResponsiveClasses({ 'tracked-mega': { letterSpacing: '.25em' } })
};

export default classes;
