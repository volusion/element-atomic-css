import { cssForClass } from './utils';

describe('The aphroditeTachyons object', () => {
    const mozFocusCssRules = {
        '::-moz-focus-inner': { border: 0, padding: 0 }
    };
    it('should contain the correct input-reset class', () => {
        const cssRules = {
            '-webkit-appearance': 'none',
            '-moz-appearance': 'none',
            ...mozFocusCssRules
        };
        expect(cssForClass('input-reset')).toEqual(cssRules);
    });
    it('should contain the correct button-reset class', () => {
        expect(cssForClass('button-reset')).toEqual(mozFocusCssRules);
    });
});
