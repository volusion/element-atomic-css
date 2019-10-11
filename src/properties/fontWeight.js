import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses({ normal: { fontWeight: 'normal' } }),
    ...createResponsiveClasses({ b: { fontWeight: 'bold' } }),
    ...createResponsiveClasses({ fw1: { fontWeight: 100 } }),
    ...createResponsiveClasses({ fw2: { fontWeight: 200 } }),
    ...createResponsiveClasses({ fw3: { fontWeight: 300 } }),
    ...createResponsiveClasses({ fw4: { fontWeight: 400 } }),
    ...createResponsiveClasses({ fw5: { fontWeight: 500 } }),
    ...createResponsiveClasses({ fw6: { fontWeight: 600 } }),
    ...createResponsiveClasses({ fw7: { fontWeight: 700 } }),
    ...createResponsiveClasses({ fw8: { fontWeight: 800 } }),
    ...createResponsiveClasses({ fw9: { fontWeight: 900 } })
};

export default classes;
