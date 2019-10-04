import { aphroditeTachyons } from '../src';

describe('The aphroditeTachyons object', () => {
    it('should contain the correct 1rem width classes', () => {
        const expectedCSS = {
            w1: { width: '1rem' },
            'w1-ns': {
                '@media only screen and (min-width: 30em)': { width: '1rem' }
            },
            'w1-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': {
                    width: '1rem'
                }
            },
            'w1-l': {
                '@media only screen and (min-width: 60em)': { width: '1rem' }
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 2rem width classes', () => {
        const expectedCSS = {
            w2: { width: '2rem' },
            'w2-ns': {
                '@media only screen and (min-width: 30em)': { width: '2rem' }
            },
            'w2-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': {
                    width: '2rem'
                }
            },
            'w2-l': {
                '@media only screen and (min-width: 60em)': { width: '2rem' }
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 4rem width classes', () => {
        const expectedCSS = {
            w3: { width: '4rem' },
            'w3-ns': {
                '@media only screen and (min-width: 30em)': { width: '4rem' }
            },
            'w3-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': {
                    width: '4rem'
                }
            },
            'w3-l': {
                '@media only screen and (min-width: 60em)': { width: '4rem' }
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 8rem width classes', () => {
        const expectedCSS = {
            w4: { width: '8rem' },
            'w4-ns': {
                '@media only screen and (min-width: 30em)': { width: '8rem' }
            },
            'w4-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': {
                    width: '8rem'
                }
            },
            'w4-l': {
                '@media only screen and (min-width: 60em)': { width: '8rem' }
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 16rem width classes', () => {
        const expectedCSS = {
            w5: { width: '16rem' },
            'w5-ns': {
                '@media only screen and (min-width: 30em)': { width: '16rem' }
            },
            'w5-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': {
                    width: '16rem'
                }
            },
            'w5-l': {
                '@media only screen and (min-width: 60em)': { width: '16rem' }
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 10% width classes', () => {
        const expectedCSS = {
            'w-10': { width: '10%' },
            'w-10-ns': {
                '@media only screen and (min-width: 30em)': { width: '10%' }
            },
            'w-10-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': {
                    width: '10%'
                }
            },
            'w-10-l': {
                '@media only screen and (min-width: 60em)': { width: '10%' }
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct auto width classes', () => {
        const expectedCSS = {
            'w-auto': { width: 'auto' },
            'w-auto-ns': {
                '@media only screen and (min-width: 30em)': { width: 'auto' }
            },
            'w-auto-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': {
                    width: 'auto'
                }
            },
            'w-auto-l': {
                '@media only screen and (min-width: 60em)': { width: 'auto' }
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 20% width classes', () => {
        const expectedCSS = {
            'w-20': { width: '20%' },
            'w-20-ns': {
                '@media only screen and (min-width: 30em)': { width: '20%' }
            },
            'w-20-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': {
                    width: '20%'
                }
            },
            'w-20-l': {
                '@media only screen and (min-width: 60em)': { width: '20%' }
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 25% width classes', () => {
        const expectedCSS = {
            'w-25': { width: '25%' },
            'w-25-ns': {
                '@media only screen and (min-width: 30em)': { width: '25%' }
            },
            'w-25-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': {
                    width: '25%'
                }
            },
            'w-25-l': {
                '@media only screen and (min-width: 60em)': { width: '25%' }
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 30% width classes', () => {
        const expectedCSS = {
            'w-30': { width: '30%' },
            'w-30-ns': {
                '@media only screen and (min-width: 30em)': { width: '30%' }
            },
            'w-30-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': {
                    width: '30%'
                }
            },
            'w-30-l': {
                '@media only screen and (min-width: 60em)': { width: '30%' }
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct third width classes', () => {
        const expectedCSS = {
            'w-third': { width: 'calc(100% / 3)' },
            'w-third-ns': {
                '@media only screen and (min-width: 30em)': {
                    width: 'calc(100% / 3)'
                }
            },
            'w-third-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': {
                    width: 'calc(100% / 3)'
                }
            },
            'w-third-l': {
                '@media only screen and (min-width: 60em)': {
                    width: 'calc(100% / 3)'
                }
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 40% width classes', () => {
        const expectedCSS = {
            'w-40': { width: '40%' },
            'w-40-ns': {
                '@media only screen and (min-width: 30em)': { width: '40%' }
            },
            'w-40-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': {
                    width: '40%'
                }
            },
            'w-40-l': {
                '@media only screen and (min-width: 60em)': { width: '40%' }
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 50% width classes', () => {
        const expectedCSS = {
            'w-50': { width: '50%' },
            'w-50-ns': {
                '@media only screen and (min-width: 30em)': { width: '50%' }
            },
            'w-50-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': {
                    width: '50%'
                }
            },
            'w-50-l': {
                '@media only screen and (min-width: 60em)': { width: '50%' }
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 60% width classes', () => {
        const expectedCSS = {
            'w-60': { width: '60%' },
            'w-60-ns': {
                '@media only screen and (min-width: 30em)': { width: '60%' }
            },
            'w-60-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': {
                    width: '60%'
                }
            },
            'w-60-l': {
                '@media only screen and (min-width: 60em)': { width: '60%' }
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct two-thirds width classes', () => {
        const expectedCSS = {
            'w-two-thirds': { width: 'calc(100% / 1.5)' },
            'w-two-thirds-ns': {
                '@media only screen and (min-width: 30em)': {
                    width: 'calc(100% / 1.5)'
                }
            },
            'w-two-thirds-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': {
                    width: 'calc(100% / 1.5)'
                }
            },
            'w-two-thirds-l': {
                '@media only screen and (min-width: 60em)': {
                    width: 'calc(100% / 1.5)'
                }
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 70% width classes', () => {
        const expectedCSS = {
            'w-70': { width: '70%' },
            'w-70-ns': {
                '@media only screen and (min-width: 30em)': { width: '70%' }
            },
            'w-70-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': {
                    width: '70%'
                }
            },
            'w-70-l': {
                '@media only screen and (min-width: 60em)': { width: '70%' }
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 75% width classes', () => {
        const expectedCSS = {
            'w-75': { width: '75%' },
            'w-75-ns': {
                '@media only screen and (min-width: 30em)': { width: '75%' }
            },
            'w-75-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': {
                    width: '75%'
                }
            },
            'w-75-l': {
                '@media only screen and (min-width: 60em)': { width: '75%' }
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 80% width classes', () => {
        const expectedCSS = {
            'w-80': { width: '80%' },
            'w-80-ns': {
                '@media only screen and (min-width: 30em)': { width: '80%' }
            },
            'w-80-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': {
                    width: '80%'
                }
            },
            'w-80-l': {
                '@media only screen and (min-width: 60em)': { width: '80%' }
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 90% width classes', () => {
        const expectedCSS = {
            'w-90': { width: '90%' },
            'w-90-ns': {
                '@media only screen and (min-width: 30em)': { width: '90%' }
            },
            'w-90-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': {
                    width: '90%'
                }
            },
            'w-90-l': {
                '@media only screen and (min-width: 60em)': { width: '90%' }
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct 100% width classes', () => {
        const expectedCSS = {
            'w-100': { width: '100%' },
            'w-100-ns': {
                '@media only screen and (min-width: 30em)': { width: '100%' }
            },
            'w-100-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': {
                    width: '100%'
                }
            },
            'w-100-l': {
                '@media only screen and (min-width: 60em)': { width: '100%' }
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
});
