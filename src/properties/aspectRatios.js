import { createResponsiveClasses } from '../utils';

export const aspectRatios = {
    ...createResponsiveClasses({
        'aspect-ratio': { height: 0, position: 'relative' }
    }),
    ...createResponsiveClasses({
        'aspect-ratio--16x9': { paddingBottom: '56.25%' }
    }),
    ...createResponsiveClasses({
        'aspect-ratio--9x16': { paddingBottom: '177.77%' }
    }),
    ...createResponsiveClasses({
        'aspect-ratio--4x3': { paddingBottom: '75%' }
    }),
    ...createResponsiveClasses({
        'aspect-ratio--3x4': { paddingBottom: '133.33%' }
    }),
    ...createResponsiveClasses({
        'aspect-ratio--6x4': { paddingBottom: '66.6%' }
    }),
    ...createResponsiveClasses({
        'aspect-ratio--4x6': { paddingBottom: '150%' }
    }),
    ...createResponsiveClasses({
        'aspect-ratio--8x5': { paddingBottom: '62.5%' }
    }),
    ...createResponsiveClasses({
        'aspect-ratio--5x8': { paddingBottom: '160%' }
    }),
    ...createResponsiveClasses({
        'aspect-ratio--7x5': { paddingBottom: '71.42%' }
    }),
    ...createResponsiveClasses({
        'aspect-ratio--5x7': { paddingBottom: '140%' }
    }),
    ...createResponsiveClasses({
        'aspect-ratio--1x1': { paddingBottom: '100%' }
    }),
    ...createResponsiveClasses({
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
    })
};
