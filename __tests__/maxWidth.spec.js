import { aphroditeTachyons } from '../src';

describe('The aphroditeTachyons object', () => {
    it('should contain the correct 100% max-width classes', () => {
        const expectedCSS = {
            'mw-100': { maxWidth: '100%' },
            'mw-100-ns': {
                '@media only screen and (min-width: 30em)': {
                    maxWidth: '100%'
                }
            },
            'mw-100-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': {
                    maxWidth: '100%'
                }
            },
            'mw-100-l': {
                '@media only screen and (min-width: 60em)': {
                    maxWidth: '100%'
                }
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 1rem max-width classes', () => {
        const expectedCSS = {
            mw1: { maxWidth: '1rem' },
            'mw1-ns': {
                '@media only screen and (min-width: 30em)': {
                    maxWidth: '1rem'
                }
            },
            'mw1-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': {
                    maxWidth: '1rem'
                }
            },
            'mw1-l': {
                '@media only screen and (min-width: 60em)': {
                    maxWidth: '1rem'
                }
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 2rem max-width classes', () => {
        const expectedCSS = {
            mw2: { maxWidth: '2rem' },
            'mw2-ns': {
                '@media only screen and (min-width: 30em)': {
                    maxWidth: '2rem'
                }
            },
            'mw2-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': {
                    maxWidth: '2rem'
                }
            },
            'mw2-l': {
                '@media only screen and (min-width: 60em)': {
                    maxWidth: '2rem'
                }
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 4rem max-width classes', () => {
        const expectedCSS = {
            mw3: { maxWidth: '4rem' },
            'mw3-ns': {
                '@media only screen and (min-width: 30em)': {
                    maxWidth: '4rem'
                }
            },
            'mw3-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': {
                    maxWidth: '4rem'
                }
            },
            'mw3-l': {
                '@media only screen and (min-width: 60em)': {
                    maxWidth: '4rem'
                }
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 8rem max-width classes', () => {
        const expectedCSS = {
            mw4: { maxWidth: '8rem' },
            'mw4-ns': {
                '@media only screen and (min-width: 30em)': {
                    maxWidth: '8rem'
                }
            },
            'mw4-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': {
                    maxWidth: '8rem'
                }
            },
            'mw4-l': {
                '@media only screen and (min-width: 60em)': {
                    maxWidth: '8rem'
                }
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 16rem max-width classes', () => {
        const expectedCSS = {
            mw5: { maxWidth: '16rem' },
            'mw5-ns': {
                '@media only screen and (min-width: 30em)': {
                    maxWidth: '16rem'
                }
            },
            'mw5-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': {
                    maxWidth: '16rem'
                }
            },
            'mw5-l': {
                '@media only screen and (min-width: 60em)': {
                    maxWidth: '16rem'
                }
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 32rem max-width classes', () => {
        const expectedCSS = {
            mw6: { maxWidth: '32rem' },
            'mw6-ns': {
                '@media only screen and (min-width: 30em)': {
                    maxWidth: '32rem'
                }
            },
            'mw6-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': {
                    maxWidth: '32rem'
                }
            },
            'mw6-l': {
                '@media only screen and (min-width: 60em)': {
                    maxWidth: '32rem'
                }
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 48rem max-width classes', () => {
        const expectedCSS = {
            mw7: { maxWidth: '48rem' },
            'mw7-ns': {
                '@media only screen and (min-width: 30em)': {
                    maxWidth: '48rem'
                }
            },
            'mw7-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': {
                    maxWidth: '48rem'
                }
            },
            'mw7-l': {
                '@media only screen and (min-width: 60em)': {
                    maxWidth: '48rem'
                }
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 64rem max-width classes', () => {
        const expectedCSS = {
            mw8: { maxWidth: '64rem' },
            'mw8-ns': {
                '@media only screen and (min-width: 30em)': {
                    maxWidth: '64rem'
                }
            },
            'mw8-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': {
                    maxWidth: '64rem'
                }
            },
            'mw8-l': {
                '@media only screen and (min-width: 60em)': {
                    maxWidth: '64rem'
                }
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 96rem max-width classes', () => {
        const expectedCSS = {
            mw9: { maxWidth: '96rem' },
            'mw9-ns': {
                '@media only screen and (min-width: 30em)': {
                    maxWidth: '96rem'
                }
            },
            'mw9-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': {
                    maxWidth: '96rem'
                }
            },
            'mw9-l': {
                '@media only screen and (min-width: 60em)': {
                    maxWidth: '96rem'
                }
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct none max-width classes', () => {
        const expectedCSS = {
            'mw-none': { maxWidth: 'none' },
            'mw-none-ns': {
                '@media only screen and (min-width: 30em)': {
                    maxWidth: 'none'
                }
            },
            'mw-none-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': {
                    maxWidth: 'none'
                }
            },
            'mw-none-l': {
                '@media only screen and (min-width: 60em)': {
                    maxWidth: 'none'
                }
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
});
