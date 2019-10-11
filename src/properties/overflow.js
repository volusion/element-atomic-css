import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses({ 'overflow-visible': { overflow: 'visible' } }),
    ...createResponsiveClasses({ 'overflow-hidden': { overflow: 'hidden' } }),
    ...createResponsiveClasses({ 'overflow-scroll': { overflow: 'scroll' } }),
    ...createResponsiveClasses({ 'overflow-auto': { overflow: 'auto' } }),
    ...createResponsiveClasses({
        'overflow-x-visible': { overflowX: 'visible' }
    }),
    ...createResponsiveClasses({
        'overflow-x-hidden': { overflowX: 'hidden' }
    }),
    ...createResponsiveClasses({
        'overflow-x-scroll': { overflowX: 'scroll' }
    }),
    ...createResponsiveClasses({ 'overflow-x-auto': { overflowX: 'auto' } }),
    ...createResponsiveClasses({
        'overflow-y-visible': { overflowY: 'visible' }
    }),
    ...createResponsiveClasses({
        'overflow-y-hidden': { overflowY: 'hidden' }
    }),
    ...createResponsiveClasses({
        'overflow-y-scroll': { overflowY: 'scroll' }
    }),
    ...createResponsiveClasses({ 'overflow-y-auto': { overflowY: 'auto' } })
};

export default classes;
