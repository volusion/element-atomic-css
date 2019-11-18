import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses(
        {
            'overflow-visible': { overflow: 'visible' }
        },
        {
            'overflow-hidden': { overflow: 'hidden' }
        },
        {
            'overflow-scroll': { overflow: 'scroll' }
        },
        {
            'overflow-auto': { overflow: 'auto' }
        },
        {
            'overflow-x-visible': { overflowX: 'visible' }
        },
        {
            'overflow-x-hidden': { overflowX: 'hidden' }
        },
        {
            'overflow-x-scroll': { overflowX: 'scroll' }
        },
        {
            'overflow-x-auto': { overflowX: 'auto' }
        },
        {
            'overflow-y-visible': { overflowY: 'visible' }
        },
        {
            'overflow-y-hidden': { overflowY: 'hidden' }
        },
        {
            'overflow-y-scroll': { overflowY: 'scroll' }
        },
        {
            'overflow-y-auto': { overflowY: 'auto' }
        }
    )
};

export default classes;
