import { createResponsiveClasses } from '../utils';

export const coordinates = {
    ...createResponsiveClasses({ 'top-0': { top: 0 } }),
    ...createResponsiveClasses({ 'right-0': { right: 0 } }),
    ...createResponsiveClasses({ 'bottom-0': { bottom: 0 } }),
    ...createResponsiveClasses({ 'left-0': { left: 0 } }),
    ...createResponsiveClasses({ 'top-1': { top: '1rem' } }),
    ...createResponsiveClasses({ 'right-1': { right: '1rem' } }),
    ...createResponsiveClasses({ 'bottom-1': { bottom: '1rem' } }),
    ...createResponsiveClasses({ 'left-1': { left: '1rem' } }),
    ...createResponsiveClasses({ 'top-2': { top: '2rem' } }),
    ...createResponsiveClasses({ 'right-2': { right: '2rem' } }),
    ...createResponsiveClasses({ 'bottom-2': { bottom: '2rem' } }),
    ...createResponsiveClasses({ 'left-2': { left: '2rem' } }),
    ...createResponsiveClasses({ 'top--1': { top: '-1rem' } }),
    ...createResponsiveClasses({ 'right--1': { right: '-1rem' } }),
    ...createResponsiveClasses({ 'bottom--1': { bottom: '-1rem' } }),
    ...createResponsiveClasses({ 'left--1': { left: '-1rem' } }),
    ...createResponsiveClasses({ 'top--2': { top: '-2rem' } }),
    ...createResponsiveClasses({ 'right--2': { right: '-2rem' } }),
    ...createResponsiveClasses({ 'bottom--2': { bottom: '-2rem' } }),
    ...createResponsiveClasses({ 'left--2': { left: '-2rem' } }),
    ...createResponsiveClasses({
        'absolute--fill': { top: 0, right: 0, bottom: 0, left: 0 }
    })
};
