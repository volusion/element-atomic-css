import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses(
        {
            measure: { maxWidth: '30em' }
        },
        {
            'measure-wide': { maxWidth: '34em' }
        },
        {
            'measure-narrow': { maxWidth: '20em' }
        },
        {
            indent: { textIndent: '1em', marginTop: 0, marginBottom: 0 }
        },
        {
            'small-caps': { fontVariant: 'small-caps' }
        },
        {
            truncate: {
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
            }
        }
    )
};

export default classes;
