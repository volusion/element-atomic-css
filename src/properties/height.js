import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses({ h1: { height: '1rem' } }),
    ...createResponsiveClasses({ h2: { height: '2rem' } }),
    ...createResponsiveClasses({ h3: { height: '4rem' } }),
    ...createResponsiveClasses({ h4: { height: '8rem' } }),
    ...createResponsiveClasses({ h5: { height: '16rem' } }),
    ...createResponsiveClasses({ 'h-25': { height: '25%' } }),
    ...createResponsiveClasses({ 'h-50': { height: '50%' } }),
    ...createResponsiveClasses({ 'h-75': { height: '75%' } }),
    ...createResponsiveClasses({ 'h-100': { height: '100%' } }),
    ...createResponsiveClasses({ 'min-h-100': { minHeight: '100%' } }),
    ...createResponsiveClasses({ 'vh-25': { height: '25vh' } }),
    ...createResponsiveClasses({ 'vh-50': { height: '50vh' } }),
    ...createResponsiveClasses({ 'vh-75': { height: '75vh' } }),
    ...createResponsiveClasses({ 'vh-100': { height: '100vh' } }),
    ...createResponsiveClasses({ 'min-vh-100': { minHeight: '100vh' } }),
    ...createResponsiveClasses({ 'h-auto': { height: 'auto' } }),
    ...createResponsiveClasses({ 'h-inherit': { height: 'inherit' } })
};

export default classes;
