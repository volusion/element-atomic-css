import { aphroditeTachyons } from '../src';

describe('The aphroditeTachyons object', () => {
    it('should contain the correct dim hovers classes', () => {
        const expectedCSS = {
            dim: {
                opacity: 1,
                transition: 'opacity .15s ease-in',
                ':hover': { opacity: 0.5, transition: 'opacity .15s ease-in' },
                ':focus': { opacity: 0.5, transition: 'opacity .15s ease-in' },
                ':active': {
                    opacity: 0.8,
                    transition: 'opacity .15s ease-out'
                }
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct hide-child hovers classes', () => {
        const expectedCSS = {
            'hide-child': {
                child: { opacity: 0, transition: 'opacity .15s ease-in' },
                ':hover': {
                    child: { opacity: 1, transition: 'opacity .15s ease-in' }
                },
                ':focus': {
                    child: { opacity: 1, transition: 'opacity .15s ease-in' }
                },
                ':active': {
                    child: { opacity: 1, transition: 'opacity .15s ease-in' }
                }
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct underline hovers classes', () => {
        const expectedCSS = {
            'underline-hover': {
                ':hover': { 'text-decoration': 'underline' },
                ':focus': { 'text-decoration': 'underline' }
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct grow hovers classes', () => {
        const expectedCSS = {
            grow: {
                '-moz-osx-font-smoothing': 'grayscale',
                transform: 'translateZ(0)',
                transition: 'transform .25s ease-out',
                ':hover': {
                    transform: `scale(1.05)`
                },
                ':focus': {
                    transform: `scale(1.05)`
                },
                ':active': {
                    transform: `scale(0.9)`
                }
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct grow-large hovers classes', () => {
        const expectedCSS = {
            'grow-large': {
                '-moz-osx-font-smoothing': 'grayscale',
                transform: 'translateZ(0)',
                transition: 'transform .25s ease-out',
                ':hover': {
                    transform: `scale(1.2)`
                },
                ':focus': {
                    transform: `scale(1.2)`
                },
                ':active': {
                    transform: `scale(0.95)`
                }
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct pointer hovers classes', () => {
        const expectedCSS = {
            'pointer:hover': { cursor: 'pointer' }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct shadow hovers classes', () => {
        const expectedCSS = {
            'shadow-hover': {
                '::after': {
                    'box-shadow': '0 0 8px 2px rgba( 0, 0, 0, .2 )',
                    opacity: 0,
                    transition: 'opacity .25s ease-in-out'
                },
                ':hover::after': { opacity: 1 },
                ':focus::after': { opacity: 1 }
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct bg-animate hovers classes', () => {
        const expectedCSS = {
            'bg-animate': {
                transition: 'background-color .15s ease-in-out',
                ':hover': { transition: 'background-color .15s ease-in-out' },
                ':focus': { transition: 'background-color .15s ease-in-out' }
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
});
