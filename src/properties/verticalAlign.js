import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses({ 'v-base': { verticalAlign: 'baseline' } }),
    ...createResponsiveClasses({ 'v-mid': { verticalAlign: 'middle' } }),
    ...createResponsiveClasses({ 'v-top': { verticalAlign: 'top' } }),
    ...createResponsiveClasses({ 'v-btm': { verticalAlign: 'bottom' } })
};

export default classes;
