import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses(
        { dn: { display: 'none' } },
        { di: { display: 'inline' } },
        { db: { display: 'block' } },
        { dib: { display: 'inline-block' } },
        { dit: { display: 'inline-table' } },
        { dt: { display: 'table' } },
        { dtc: { display: 'table-cell' } },
        { 'dt-row': { display: 'table-row' } },
        {
            'dt-row-group': { display: 'table-row-group' }
        },
        { 'dt-column': { display: 'table-column' } },
        {
            'dt-column-group': { display: 'table-column-group' }
        },
        {
            'dt--fixed': { display: 'fixed', width: '100%' }
        }
    )
};

export default classes;
