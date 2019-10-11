import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses({ flex: { display: 'flex' } }),
    ...createResponsiveClasses({ 'inline-flex': { display: 'inline-flex' } }),
    ...createResponsiveClasses({
        'flex-auto': { flex: '1 1 auto', minWidth: 0, minHeight: 0 }
    }),
    ...createResponsiveClasses({ 'flex-none': { flex: 'none' } }),
    ...createResponsiveClasses({ 'flex-column': { flexDirection: 'column' } }),
    ...createResponsiveClasses({ 'flex-row': { flexDirection: 'row' } }),
    ...createResponsiveClasses({ 'flex-wrap': { flexWrap: 'wrap' } }),
    ...createResponsiveClasses({ 'flex-nowrap': { flexWrap: 'nowrap' } }),
    ...createResponsiveClasses({
        'flex-wrap-reverse': { flexWrap: 'wrap-reverse' }
    }),
    ...createResponsiveClasses({
        'flex-column-reverse': { flexDirection: 'column-reverse' }
    }),
    ...createResponsiveClasses({
        'flex-row-reverse': { flexDirection: 'row-reverse' }
    }),
    ...createResponsiveClasses({ 'items-start': { alignItems: 'flex-start' } }),
    ...createResponsiveClasses({ 'items-end': { alignItems: 'flex-end' } }),
    ...createResponsiveClasses({ 'items-center': { alignItems: 'center' } }),
    ...createResponsiveClasses({
        'items-baseline': { alignItems: 'baseline' }
    }),
    ...createResponsiveClasses({ 'items-stretch': { alignItems: 'stretch' } }),
    ...createResponsiveClasses({ 'self-start': { alignSelf: 'flex-start' } }),
    ...createResponsiveClasses({ 'self-end': { alignSelf: 'flex-end' } }),
    ...createResponsiveClasses({ 'self-center': { alignSelf: 'center' } }),
    ...createResponsiveClasses({ 'self-baseline': { alignSelf: 'baseline' } }),
    ...createResponsiveClasses({ 'self-stretch': { alignSelf: 'stretch' } }),
    ...createResponsiveClasses({
        'justify-start': { justifyContent: 'flex-start' }
    }),
    ...createResponsiveClasses({
        'justify-end': { justifyContent: 'flex-end' }
    }),
    ...createResponsiveClasses({
        'justify-center': { justifyContent: 'center' }
    }),
    ...createResponsiveClasses({
        'justify-between': { justifyContent: 'space-between' }
    }),
    ...createResponsiveClasses({
        'justify-around': { justifyContent: 'space-around' }
    }),
    ...createResponsiveClasses({
        'content-start': { alignContent: 'flex-start' }
    }),
    ...createResponsiveClasses({ 'content-end': { alignContent: 'flex-end' } }),
    ...createResponsiveClasses({
        'content-center': { alignContent: 'center' }
    }),
    ...createResponsiveClasses({
        'content-between': { alignContent: 'space-between' }
    }),
    ...createResponsiveClasses({
        'content-around': { alignContent: 'space-around' }
    }),
    ...createResponsiveClasses({
        'content-stretch': { alignContent: 'stretch' }
    }),
    ...createResponsiveClasses({ 'order-0': { order: 0 } }),
    ...createResponsiveClasses({ 'order-1': { order: 1 } }),
    ...createResponsiveClasses({ 'order-2': { order: 2 } }),
    ...createResponsiveClasses({ 'order-3': { order: 3 } }),
    ...createResponsiveClasses({ 'order-4': { order: 4 } }),
    ...createResponsiveClasses({ 'order-5': { order: 5 } }),
    ...createResponsiveClasses({ 'order-6': { order: 6 } }),
    ...createResponsiveClasses({ 'order-7': { order: 7 } }),
    ...createResponsiveClasses({ 'order-8': { order: 8 } }),
    ...createResponsiveClasses({ 'order-last': { order: 99999 } }),
    ...createResponsiveClasses({ 'flex-grow-0': { flexGrow: 0 } }),
    ...createResponsiveClasses({ 'flex-grow-1': { flexGrow: 1 } }),
    ...createResponsiveClasses({ 'flex-shrink-0': { flexShrink: 0 } }),
    ...createResponsiveClasses({ 'flex-shrink-1': { flexShrink: 1 } })
};

export default classes;
