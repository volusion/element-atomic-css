import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses({ w1: { width: '1rem' } }),
    ...createResponsiveClasses({ w2: { width: '2rem' } }),
    ...createResponsiveClasses({ w3: { width: '4rem' } }),
    ...createResponsiveClasses({ w4: { width: '8rem' } }),
    ...createResponsiveClasses({ w5: { width: '16rem' } }),
    ...createResponsiveClasses({ 'w-auto': { width: 'auto' } }),
    ...createResponsiveClasses({ 'w-10': { width: '10%' } }),
    ...createResponsiveClasses({ 'w-20': { width: '20%' } }),
    ...createResponsiveClasses({ 'w-25': { width: '25%' } }),
    ...createResponsiveClasses({ 'w-30': { width: '30%' } }),
    ...createResponsiveClasses({ 'w-third': { width: 'calc(100% / 3)' } }),
    ...createResponsiveClasses({ 'w-40': { width: '40%' } }),
    ...createResponsiveClasses({ 'w-50': { width: '50%' } }),
    ...createResponsiveClasses({ 'w-60': { width: '60%' } }),
    ...createResponsiveClasses({
        'w-two-thirds': { width: 'calc(100% / 1.5)' }
    }),
    ...createResponsiveClasses({ 'w-70': { width: '70%' } }),
    ...createResponsiveClasses({ 'w-75': { width: '75%' } }),
    ...createResponsiveClasses({ 'w-80': { width: '80%' } }),
    ...createResponsiveClasses({ 'w-90': { width: '90%' } }),
    ...createResponsiveClasses({ 'w-100': { width: '100%' } })
};

export default classes;
