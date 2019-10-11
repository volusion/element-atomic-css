import { createResponsiveClasses } from '../utils';

const clearRules = { content: '" "', display: 'table' };

const classes = {
    ...createResponsiveClasses({
        cf: {
            ':before': clearRules,
            ':after': {
                ...clearRules,
                clear: 'both'
            }
        }
    }),
    ...createResponsiveClasses({ cl: { clear: 'left' } }),
    ...createResponsiveClasses({ cr: { clear: 'right' } }),
    ...createResponsiveClasses({ cb: { clear: 'both' } }),
    ...createResponsiveClasses({ cn: { clear: 'none' } })
};

export default classes;
