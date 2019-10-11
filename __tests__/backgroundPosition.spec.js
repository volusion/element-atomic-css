import { cssForClass } from './utils';

describe('The aphroditeTachyons object', () => {
    it('should contain the correct bg-center classes', () => {
        const cssRules = {
            'background-repeat': 'no-repeat',
            'background-position': 'center center'
        };
        expect(cssForClass('bg-center')).toEqual(cssRules);
        expect(cssForClass('bg-center-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('bg-center-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('bg-center-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct bg-top classes', () => {
        const cssRules = {
            'background-repeat': 'no-repeat',
            'background-position': 'top center'
        };
        expect(cssForClass('bg-top')).toEqual(cssRules);
        expect(cssForClass('bg-top-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('bg-top-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('bg-top-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct bg-right classes', () => {
        const cssRules = {
            'background-repeat': 'no-repeat',
            'background-position': 'center right'
        };
        expect(cssForClass('bg-right')).toEqual(cssRules);
        expect(cssForClass('bg-right-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('bg-right-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('bg-right-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct bg-bottom classes', () => {
        const cssRules = {
            'background-repeat': 'no-repeat',
            'background-position': 'bottom center'
        };
        expect(cssForClass('bg-bottom')).toEqual(cssRules);
        expect(cssForClass('bg-bottom-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('bg-bottom-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('bg-bottom-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct bg-left classes', () => {
        const cssRules = {
            'background-repeat': 'no-repeat',
            'background-position': 'center left'
        };
        expect(cssForClass('bg-left')).toEqual(cssRules);
        expect(cssForClass('bg-left-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('bg-left-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('bg-left-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
});
