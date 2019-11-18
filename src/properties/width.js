import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses(
        { w1: { width: '1rem' } },
        { w2: { width: '2rem' } },
        { w3: { width: '4rem' } },
        { w4: { width: '8rem' } },
        { w5: { width: '16rem' } },
        { 'w-auto': { width: 'auto' } },
        { 'w-10': { width: '10%' } },
        { 'w-20': { width: '20%' } },
        { 'w-25': { width: '25%' } },
        { 'w-30': { width: '30%' } },
        { 'w-third': { width: 'calc(100% / 3)' } },
        { 'w-40': { width: '40%' } },
        { 'w-50': { width: '50%' } },
        { 'w-60': { width: '60%' } },
        {
            'w-two-thirds': { width: 'calc(100% / 1.5)' }
        },
        { 'w-70': { width: '70%' } },
        { 'w-75': { width: '75%' } },
        { 'w-80': { width: '80%' } },
        { 'w-90': { width: '90%' } },
        { 'w-100': { width: '100%' } }
    )
};

export default classes;
