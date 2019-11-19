import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses(
        {
            'v-base': { verticalAlign: 'baseline' }
        },
        {
            'v-mid': { verticalAlign: 'middle' }
        },
        {
            'v-top': { verticalAlign: 'top' }
        },
        {
            'v-btm': { verticalAlign: 'bottom' }
        }
    )
};

export default classes;
