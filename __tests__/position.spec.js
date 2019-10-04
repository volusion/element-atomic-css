import { aphroditeTachyons } from '../src';

describe('The aphroditeTachyons object', () => {
    it('should contain the correct static position classes', () => {
        const expectedCSS = {
            static: { position: 'static' },
            'static-ns': {
                '@media only screen and (min-width: 30em)': {
                    position: 'static'
                }
            },
            'static-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': {
                    position: 'static'
                }
            },
            'static-l': {
                '@media only screen and (min-width: 60em)': {
                    position: 'static'
                }
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct relative position classes', () => {
        const expectedCSS = {
            relative: { position: 'relative' },
            'relative-ns': {
                '@media only screen and (min-width: 30em)': {
                    position: 'relative'
                }
            },
            'relative-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': {
                    position: 'relative'
                }
            },
            'relative-l': {
                '@media only screen and (min-width: 60em)': {
                    position: 'relative'
                }
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct absolute position classes', () => {
        const expectedCSS = {
            absolute: { position: 'absolute' },
            'absolute-ns': {
                '@media only screen and (min-width: 30em)': {
                    position: 'absolute'
                }
            },
            'absolute-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': {
                    position: 'absolute'
                }
            },
            'absolute-l': {
                '@media only screen and (min-width: 60em)': {
                    position: 'absolute'
                }
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct fixed position classes', () => {
        const expectedCSS = {
            fixed: { position: 'fixed' },
            'fixed-ns': {
                '@media only screen and (min-width: 30em)': {
                    position: 'fixed'
                }
            },
            'fixed-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': {
                    position: 'fixed'
                }
            },
            'fixed-l': {
                '@media only screen and (min-width: 60em)': {
                    position: 'fixed'
                }
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
});
