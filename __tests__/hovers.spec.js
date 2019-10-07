import { cssForClass } from './utils';

describe('The aphroditeTachyons object', () => {
    it('should contain the correct dim classes', () => {
        const cssRules = {
            opacity: 1,
            transition: 'opacity .15s ease-in',
            ':hover': { opacity: 0.5, transition: 'opacity .15s ease-in' },
            ':focus': { opacity: 0.5, transition: 'opacity .15s ease-in' },
            ':active': {
                opacity: 0.8,
                transition: 'opacity .15s ease-out'
            }
        };
        expect(cssForClass('dim')).toEqual(cssRules);
    });
    it('should contain the correct hide-child classes', () => {
        const cssRules = {
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
        };
        expect(cssForClass('hide-child')).toEqual(cssRules);
    });
    it('should contain the correct underline-hover class', () => {
        const cssRules = {
            ':hover': { 'text-decoration': 'underline' },
            ':focus': { 'text-decoration': 'underline' }
        };
        expect(cssForClass('underline-hover')).toEqual(cssRules);
    });
    it('should contain the correct grow class', () => {
        const cssRules = {
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
        };
        expect(cssForClass('grow')).toEqual(cssRules);
    });
    it('should contain the correct grow-large class', () => {
        const cssRules = {
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
        };
        expect(cssForClass('grow-large')).toEqual(cssRules);
    });
    it('should contain the correct pointer class', () => {
        const cssRules = {
            ':hover': { cursor: 'pointer' }
        };
        expect(cssForClass('pointer')).toEqual(cssRules);
    });
    it('should contain the correct shadow-hover class', () => {
        const cssRules = {
            '::after': {
                'box-shadow': '0 0 8px 2px rgba( 0, 0, 0, .2 )',
                opacity: 0,
                transition: 'opacity .25s ease-in-out'
            },
            ':hover::after': { opacity: 1 },
            ':focus::after': { opacity: 1 }
        };
        expect(cssForClass('shadow-hover')).toEqual(cssRules);
    });
    it('should contain the correct bg-animate class', () => {
        const cssRules = {
            transition: 'background-color .15s ease-in-out',
            ':hover': { transition: 'background-color .15s ease-in-out' },
            ':focus': { transition: 'background-color .15s ease-in-out' }
        };
        expect(cssForClass('bg-animate')).toEqual(cssRules);
    });
});
