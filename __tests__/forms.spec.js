import { cssForClass } from './utils';

describe('The aphroditeTachyons object', () => {
    it('should contain the correct forms classes', () => {
        const cssRules = {
            '-webkit-appearance': 'none',
            '-moz-appearance': 'none'
        };
        expect(cssForClass('input-reset')).toEqual(cssRules);
    });
    it('should contain the correct forms classes', () => {
        const cssRules = { border: 0, padding: 0 };
        expect(cssForClass('button-reset::-moz-focus-inner')).toEqual(cssRules);
        expect(cssForClass('input-reset::-moz-focus-inner')).toEqual(cssRules);
    });
});
