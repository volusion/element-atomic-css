import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses(
        {
            'aspect-ratio': { height: 0, position: 'relative' }
        },
        {
            'aspect-ratio--16x9': { paddingBottom: '56.25%' }
        },
        {
            'aspect-ratio--9x16': { paddingBottom: '177.77%' }
        },
        {
            'aspect-ratio--4x3': { paddingBottom: '75%' }
        },
        {
            'aspect-ratio--3x4': { paddingBottom: '133.33%' }
        },
        {
            'aspect-ratio--6x4': { paddingBottom: '66.6%' }
        },
        {
            'aspect-ratio--4x6': { paddingBottom: '150%' }
        },
        {
            'aspect-ratio--8x5': { paddingBottom: '62.5%' }
        },
        {
            'aspect-ratio--5x8': { paddingBottom: '160%' }
        },
        {
            'aspect-ratio--7x5': { paddingBottom: '71.42%' }
        },
        {
            'aspect-ratio--5x7': { paddingBottom: '140%' }
        },
        {
            'aspect-ratio--1x1': { paddingBottom: '100%' }
        },
        {
            'aspect-ratio--object': {
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 100
            }
        }
    )
};

export default classes;
