import { createResponsiveClasses } from '../utils';

const headlineCssRules = { fontSize: '6rem' };
const subHeadlineCssRules = { fontSize: '5rem' };

const classes = {
    ...createResponsiveClasses({ 'f-6': headlineCssRules }),
    ...createResponsiveClasses({ 'f-headline': headlineCssRules }),
    ...createResponsiveClasses({ 'f-5': subHeadlineCssRules }),
    ...createResponsiveClasses({ 'f-subheadline': subHeadlineCssRules }),
    ...createResponsiveClasses({ f1: { fontSize: '3rem' } }),
    ...createResponsiveClasses({ f2: { fontSize: '2.25rem' } }),
    ...createResponsiveClasses({ f3: { fontSize: '1.5rem' } }),
    ...createResponsiveClasses({ f4: { fontSize: '1.25rem' } }),
    ...createResponsiveClasses({ f5: { fontSize: '1rem' } }),
    ...createResponsiveClasses({ f6: { fontSize: '.875rem' } }),
    ...createResponsiveClasses({ f7: { fontSize: '.75rem' } })
};

export default classes;
