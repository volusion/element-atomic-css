import { aphroditeTachyons } from '../src';

describe('The aphroditeTachyons object', () => {
    it('should contain the correct 100% max-width classes', () => {
        const cssRules = { maxWidth: '100%' };
        const expectedCSS = {
            'mw-100': cssRules,
            'mw-100-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'mw-100-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'mw-100-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 1rem max-width classes', () => {
        const cssRules = { maxWidth: '1rem' };
        const expectedCSS = {
            mw1: cssRules,
            'mw1-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'mw1-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'mw1-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 2rem max-width classes', () => {
        const cssRules = { maxWidth: '2rem' };
        const expectedCSS = {
            mw2: cssRules,
            'mw2-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'mw2-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'mw2-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 4rem max-width classes', () => {
        const cssRules = { maxWidth: '4rem' };
        const expectedCSS = {
            mw3: cssRules,
            'mw3-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'mw3-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'mw3-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 8rem max-width classes', () => {
        const cssRules = { maxWidth: '8rem' };
        const expectedCSS = {
            mw4: cssRules,
            'mw4-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'mw4-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'mw4-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 16rem max-width classes', () => {
        const cssRules = { maxWidth: '16rem' };
        const expectedCSS = {
            mw5: cssRules,
            'mw5-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'mw5-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'mw5-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 32rem max-width classes', () => {
        const cssRules = { maxWidth: '32rem' };
        const expectedCSS = {
            mw6: cssRules,
            'mw6-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'mw6-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'mw6-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 48rem max-width classes', () => {
        const cssRules = { maxWidth: '48rem' };
        const expectedCSS = {
            mw7: cssRules,
            'mw7-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'mw7-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'mw7-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 64rem max-width classes', () => {
        const cssRules = { maxWidth: '64rem' };
        const expectedCSS = {
            mw8: cssRules,
            'mw8-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'mw8-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'mw8-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 96rem max-width classes', () => {
        const cssRules = { maxWidth: '96rem' };
        const expectedCSS = {
            mw9: cssRules,
            'mw9-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'mw9-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'mw9-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct none max-width classes', () => {
        const cssRules = { maxWidth: 'none' };
        const expectedCSS = {
            'mw-none': cssRules,
            'mw-none-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'mw-none-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'mw-none-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
});
