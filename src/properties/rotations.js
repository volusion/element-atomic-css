import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses({ 'rotate-45': { transform: 'rotate(45deg)' } }),
    ...createResponsiveClasses({ 'rotate-90': { transform: 'rotate(90deg)' } }),
    ...createResponsiveClasses({
        'rotate-135': { transform: 'rotate(135deg)' }
    }),
    ...createResponsiveClasses({
        'rotate-180': { transform: 'rotate(180deg)' }
    }),
    ...createResponsiveClasses({
        'rotate-225': { transform: 'rotate(225deg)' }
    }),
    ...createResponsiveClasses({
        'rotate-270': { transform: 'rotate(270deg)' }
    }),
    ...createResponsiveClasses({
        'rotate-315': { transform: 'rotate(315deg)' }
    })
};

export default classes;
