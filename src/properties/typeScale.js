import { createResponsiveClasses } from '../utils';

const headlineCssRules = { fontSize: '6rem' };
const subHeadlineCssRules = { fontSize: '5rem' };

const classes = {
    ...createResponsiveClasses(
        { 'f-6': headlineCssRules },
        { 'f-headline': headlineCssRules },
        { 'f-5': subHeadlineCssRules },
        { 'f-subheadline': subHeadlineCssRules },
        { f1: { fontSize: '3rem' } },
        { f2: { fontSize: '2.25rem' } },
        { f3: { fontSize: '1.5rem' } },
        { f4: { fontSize: '1.25rem' } },
        { f5: { fontSize: '1rem' } },
        { f6: { fontSize: '.875rem' } },
        { f7: { fontSize: '.75rem' } }
    )
};

export default classes;
