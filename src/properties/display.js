import { createResponsiveClasses } from '../utils';

export const display = {
    ...createResponsiveClasses({ dn: { display: 'none' } }),
    ...createResponsiveClasses({ di: { display: 'inline' } }),
    ...createResponsiveClasses({ db: { display: 'block' } }),
    ...createResponsiveClasses({ dib: { display: 'inline-block' } }),
    ...createResponsiveClasses({ dit: { display: 'inline-table' } }),
    ...createResponsiveClasses({ dt: { display: 'table' } }),
    ...createResponsiveClasses({ dtc: { display: 'table-cell' } }),
    ...createResponsiveClasses({ 'dt-row': { display: 'table-row' } }),
    ...createResponsiveClasses({
        'dt-row-group': { display: 'table-row-group' }
    }),
    ...createResponsiveClasses({ 'dt-column': { display: 'table-column' } }),
    ...createResponsiveClasses({
        'dt-column-group': { display: 'table-column-group' }
    })
};
