import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses({ 'h1-ns': { height: '1rem' } }),
    ...createResponsiveClasses({ 'h2-ns': { height: '2rem' } }),
    ...createResponsiveClasses({ 'h3-ns': { height: '4rem' } }),
    ...createResponsiveClasses({ 'h4-ns': { height: '8rem' } }),
    ...createResponsiveClasses({ 'h5-ns': { height: '16rem' } }),
    ...createResponsiveClasses({ 'h-25-ns': { height: '25%' } }),
    ...createResponsiveClasses({ 'h-50-ns': { height: '50%' } }),
    ...createResponsiveClasses({ 'h-75-ns': { height: '75%' } }),
    ...createResponsiveClasses({ 'h-100-ns': { height: '100%' } }),
    ...createResponsiveClasses({ 'min-h-100-ns': { minHeight: '100%' } }),
    ...createResponsiveClasses({ 'vh-25-ns': { height: '25vh' } }),
    ...createResponsiveClasses({ 'vh-50-ns': { height: '50vh' } }),
    ...createResponsiveClasses({ 'vh-75-ns': { height: '75vh' } }),
    ...createResponsiveClasses({ 'vh-100-ns': { height: '100vh' } }),
    ...createResponsiveClasses({ 'min-vh-100-ns': { minHeight: '100vh' } }),
    ...createResponsiveClasses({ 'h-auto-ns': { height: 'auto' } }),
    ...createResponsiveClasses({ 'h-inherit-ns': { height: 'inherit' } })
};

export default classes;
