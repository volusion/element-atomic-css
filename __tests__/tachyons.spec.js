import { aphroditeTachyons } from '../src';

describe('The aphroditeTachyons object', () => {
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
