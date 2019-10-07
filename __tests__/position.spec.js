import { cssForClass } from './utils';

describe('The aphroditeTachyons object', () => {
    it('should contain the correct static classes', () => {
        const cssRules = { position: 'static' };
        expect(cssForClass('static')).toEqual(cssRules);
        expect(cssForClass('static-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('static-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('static-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct relative classes', () => {
        const cssRules = { position: 'relative' };
        expect(cssForClass('relative')).toEqual(cssRules);
        expect(cssForClass('relative-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('relative-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('relative-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct absolute classes', () => {
        const cssRules = { position: 'absolute' };
        expect(cssForClass('absolute')).toEqual(cssRules);
        expect(cssForClass('absolute-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('absolute-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('absolute-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct fixed classes', () => {
        const cssRules = { position: 'fixed' };
        expect(cssForClass('fixed')).toEqual(cssRules);
        expect(cssForClass('fixed-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('fixed-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('fixed-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
});
