import { cssForClass } from './utils';

describe('The aphroditeTachyons object', () => {
    it('should contain the correct cover classes', () => {
        const cssRules = {
            'background-size': 'cover'
        };
        expect(cssForClass('cover')).toEqual(cssRules);
        expect(cssForClass('cover-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('cover-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('cover-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct contain classes', () => {
        const cssRules = {
            'background-size': 'contain'
        };
        expect(cssForClass('contain')).toEqual(cssRules);
        expect(cssForClass('contain-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('contain-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('contain-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
});
