import { aphroditeTachyons } from '../src';

describe('The aphroditeTachyons object', () => {
    it('should contain the correct display none classes', () => {
        const cssRules = { display: 'none' };
        const expectedCSS = {
            dn: cssRules,
            'dn-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'dn-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'dn-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct display inline classes', () => {
        const cssRules = { display: 'inline' };
        const expectedCSS = {
            di: cssRules,
            'di-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'di-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'di-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct display block classes', () => {
        const cssRules = { display: 'block' };
        const expectedCSS = {
            db: cssRules,
            'db-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'db-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'db-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct display inline block classes', () => {
        const cssRules = { display: 'inline-block' };
        const expectedCSS = {
            dib: cssRules,
            'dib-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'dib-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'dib-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct display inline table classes', () => {
        const cssRules = { display: 'inline-table' };
        const expectedCSS = {
            dit: cssRules,
            'dit-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'dit-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'dit-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct display table classes', () => {
        const cssRules = { display: 'table' };
        const expectedCSS = {
            dt: cssRules,
            'dt-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'dt-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'dt-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct display table cell classes', () => {
        const cssRules = { display: 'table-cell' };
        const expectedCSS = {
            dtc: cssRules,
            'dtc-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'dtc-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'dtc-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct display table row classes', () => {
        const cssRules = { display: 'table-row' };
        const expectedCSS = {
            'dt-row': cssRules,
            'dt-row-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'dt-row-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'dt-row-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct display table row group classes', () => {
        const cssRules = { display: 'table-row-group' };
        const expectedCSS = {
            'dt-row-group': cssRules,
            'dt-row-group-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'dt-row-group-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'dt-row-group-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct display table column classes', () => {
        const cssRules = { display: 'table-column' };
        const expectedCSS = {
            'dt-column': cssRules,
            'dt-column-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'dt-column-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'dt-column-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct display table column group classes', () => {
        const cssRules = { display: 'table-column-group' };
        const expectedCSS = {
            'dt-column-group': cssRules,
            'dt-column-group-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'dt-column-group-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'dt-column-group-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct display fixed table classes', () => {
        const cssRules = { display: 'fixed', width: '100%' };
        const expectedCSS = {
            'dt--fixed': cssRules,
            'dt--fixed-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'dt--fixed-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'dt--fixed-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
});
