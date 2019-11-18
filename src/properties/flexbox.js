import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses(
        {
            flex: { display: 'flex' }
        },
        {
            'inline-flex': { display: 'inline-flex' }
        },
        {
            'flex-auto': { flex: '1 1 auto', minWidth: 0, minHeight: 0 }
        },
        {
            'flex-none': { flex: 'none' }
        },
        {
            'flex-column': { flexDirection: 'column' }
        },
        {
            'flex-row': { flexDirection: 'row' }
        },
        {
            'flex-wrap': { flexWrap: 'wrap' }
        },
        {
            'flex-nowrap': { flexWrap: 'nowrap' }
        },
        {
            'flex-wrap-reverse': { flexWrap: 'wrap-reverse' }
        },
        {
            'flex-column-reverse': { flexDirection: 'column-reverse' }
        },
        {
            'flex-row-reverse': { flexDirection: 'row-reverse' }
        },
        {
            'items-start': { alignItems: 'flex-start' }
        },
        {
            'items-end': { alignItems: 'flex-end' }
        },
        {
            'items-center': { alignItems: 'center' }
        },
        {
            'items-baseline': { alignItems: 'baseline' }
        },
        {
            'items-stretch': { alignItems: 'stretch' }
        },
        {
            'self-start': { alignSelf: 'flex-start' }
        },
        {
            'self-end': { alignSelf: 'flex-end' }
        },
        {
            'self-center': { alignSelf: 'center' }
        },
        {
            'self-baseline': { alignSelf: 'baseline' }
        },
        {
            'self-stretch': { alignSelf: 'stretch' }
        },
        {
            'justify-start': { justifyContent: 'flex-start' }
        },
        {
            'justify-end': { justifyContent: 'flex-end' }
        },
        {
            'justify-center': { justifyContent: 'center' }
        },
        {
            'justify-between': { justifyContent: 'space-between' }
        },
        {
            'justify-around': { justifyContent: 'space-around' }
        },
        {
            'content-start': { alignContent: 'flex-start' }
        },
        {
            'content-end': { alignContent: 'flex-end' }
        },
        {
            'content-center': { alignContent: 'center' }
        },
        {
            'content-between': { alignContent: 'space-between' }
        },
        {
            'content-around': { alignContent: 'space-around' }
        },
        {
            'content-stretch': { alignContent: 'stretch' }
        },
        {
            'order-0': { order: 0 }
        },
        {
            'order-1': { order: 1 }
        },
        {
            'order-2': { order: 2 }
        },
        {
            'order-3': { order: 3 }
        },
        {
            'order-4': { order: 4 }
        },
        {
            'order-5': { order: 5 }
        },
        {
            'order-6': { order: 6 }
        },
        {
            'order-7': { order: 7 }
        },
        {
            'order-8': { order: 8 }
        },
        {
            'order-last': { order: 99999 }
        },
        {
            'flex-grow-0': { flexGrow: 0 }
        },
        {
            'flex-grow-1': { flexGrow: 1 }
        },
        {
            'flex-shrink-0': { flexShrink: 0 }
        },
        {
            'flex-shrink-1': { flexShrink: 1 }
        }
    )
};

export default classes;
