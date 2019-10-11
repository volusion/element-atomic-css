import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses({ measure: { maxWidth: '30em' } }),
    ...createResponsiveClasses({ 'measure-wide': { maxWidth: '34em' } }),
    ...createResponsiveClasses({ 'measure-narrow': { maxWidth: '20em' } }),
    ...createResponsiveClasses({
        indent: { textIndent: '1em', marginTop: 0, marginBottom: 0 }
    }),
    ...createResponsiveClasses({ 'small-caps': { fontVariant: 'small-caps' } }),
    ...createResponsiveClasses({
        truncate: {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        }
    })
};

export default classes;
