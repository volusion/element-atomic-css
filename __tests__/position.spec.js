import { aphroditeTachyons } from '../src';

describe('The aphroditeTachyons object', () => {
    it('should contain the correct static position classes', () => {
        const cssRules = { position: 'static' };
        const expectedCSS = {
            static: cssRules,
            'static-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'static-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'static-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct relative position classes', () => {
        const cssRules = { position: 'relative' };
        const expectedCSS = {
            relative: cssRules,
            'relative-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'relative-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'relative-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct absolute position classes', () => {
        const cssRules = { position: 'absolute' };
        const expectedCSS = {
            absolute: cssRules,
            'absolute-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'absolute-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'absolute-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct fixed position classes', () => {
        const cssRules = { position: 'fixed' };
        const expectedCSS = {
            fixed: cssRules,
            'fixed-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'fixed-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'fixed-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
});
