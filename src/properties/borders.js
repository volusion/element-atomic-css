import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses({
        ba: { borderStyle: 'solid', borderWidth: '1px' }
    }),
    ...createResponsiveClasses({
        bt: { borderTopStyle: 'solid', borderTopWidth: '1px' }
    }),
    ...createResponsiveClasses({
        br: { borderRightStyle: 'solid', borderRightWidth: '1px' }
    }),
    ...createResponsiveClasses({
        bb: { borderBottomStyle: 'solid', borderBottomWidth: '1px' }
    }),
    ...createResponsiveClasses({
        bl: { borderLeftStyle: 'solid', borderLeftWidth: '1px' }
    }),
    ...createResponsiveClasses({ bn: { borderStyle: 'none', borderWidth: 0 } })
};

export default classes;
