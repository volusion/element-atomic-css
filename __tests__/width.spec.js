import { aphroditeTachyons } from '../src';

describe('The aphroditeTachyons object', () => {
    it('should contain the correct 1rem width classes', () => {
        const cssRules = { width: '1rem' };
        const expectedCSS = {
            w1: cssRules,
            'w1-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'w1-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'w1-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 2rem width classes', () => {
        const cssRules = { width: '2rem' };
        const expectedCSS = {
            w2: cssRules,
            'w2-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'w2-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'w2-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 4rem width classes', () => {
        const cssRules = { width: '4rem' };
        const expectedCSS = {
            w3: cssRules,
            'w3-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'w3-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'w3-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 8rem width classes', () => {
        const cssRules = { width: '8rem' };
        const expectedCSS = {
            w4: cssRules,
            'w4-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'w4-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'w4-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 16rem width classes', () => {
        const cssRules = { width: '16rem' };
        const expectedCSS = {
            w5: cssRules,
            'w5-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'w5-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'w5-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 10% width classes', () => {
        const cssRules = { width: '10%' };
        const expectedCSS = {
            'w-10': cssRules,
            'w-10-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'w-10-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'w-10-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct auto width classes', () => {
        const cssRules = { width: 'auto' };
        const expectedCSS = {
            'w-auto': cssRules,
            'w-auto-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'w-auto-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'w-auto-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 20% width classes', () => {
        const cssRules = { width: '20%' };
        const expectedCSS = {
            'w-20': cssRules,
            'w-20-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'w-20-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'w-20-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 25% width classes', () => {
        const cssRules = { width: '25%' };
        const expectedCSS = {
            'w-25': cssRules,
            'w-25-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'w-25-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'w-25-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 30% width classes', () => {
        const cssRules = { width: '30%' };
        const expectedCSS = {
            'w-30': cssRules,
            'w-30-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'w-30-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'w-30-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct third width classes', () => {
        const cssRules = { width: 'calc(100% / 3)' };
        const expectedCSS = {
            'w-third': cssRules,
            'w-third-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'w-third-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'w-third-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 40% width classes', () => {
        const cssRules = { width: '40%' };
        const expectedCSS = {
            'w-40': cssRules,
            'w-40-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'w-40-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'w-40-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 50% width classes', () => {
        const cssRules = { width: '50%' };
        const expectedCSS = {
            'w-50': cssRules,
            'w-50-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'w-50-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'w-50-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 60% width classes', () => {
        const cssRules = { width: '60%' };
        const expectedCSS = {
            'w-60': cssRules,
            'w-60-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'w-60-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'w-60-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct two-thirds width classes', () => {
        const cssRules = { width: 'calc(100% / 1.5)' };
        const expectedCSS = {
            'w-two-thirds': cssRules,
            'w-two-thirds-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'w-two-thirds-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'w-two-thirds-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 70% width classes', () => {
        const cssRules = { width: '70%' };
        const expectedCSS = {
            'w-70': cssRules,
            'w-70-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'w-70-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'w-70-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 75% width classes', () => {
        const cssRules = { width: '75%' };
        const expectedCSS = {
            'w-75': cssRules,
            'w-75-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'w-75-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'w-75-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 80% width classes', () => {
        const cssRules = { width: '80%' };
        const expectedCSS = {
            'w-80': cssRules,
            'w-80-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'w-80-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'w-80-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 90% width classes', () => {
        const cssRules = { width: '90%' };
        const expectedCSS = {
            'w-90': cssRules,
            'w-90-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'w-90-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'w-90-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 100% width classes', () => {
        const cssRules = { width: '100%' };
        const expectedCSS = {
            'w-100': cssRules,
            'w-100-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'w-100-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'w-100-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
});
