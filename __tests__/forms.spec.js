import { aphroditeTachyons } from '../src';

describe('The aphroditeTachyons object', () => {
    it('should contain the correct 1rem width classes', () => {
        const resetCss = { border: 0, padding: 0 };
        const expectedCSS = {
            'input-reset': {
                '-webkit-appearance': 'none',
                '-moz-appearance': 'none'
            },
            'button-reset::-moz-focus-inner': resetCss,
            'input-reset::-moz-focus-inner': resetCss
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
});
