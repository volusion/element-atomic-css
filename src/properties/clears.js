import { createResponsiveClasses } from '../utils';

const clearRules = { content: '" "', display: 'table' };

const classes = {
    ...createResponsiveClasses(
        {
            cf: {
                ':before': clearRules,
                ':after': {
                    ...clearRules,
                    clear: 'both'
                }
            }
        },
        { cl: { clear: 'left' } },
        { cr: { clear: 'right' } },
        { cb: { clear: 'both' } },
        { cn: { clear: 'none' } }
    )
};

export default classes;
