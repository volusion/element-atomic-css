import { cssForClass } from './utils';

describe('The aphroditeTachyons object', () => {
    it('should contain the correct mw-100 classes', () => {
        const cssRules = { maxWidth: '100%' };
        expect(cssForClass('mw-100')).toEqual(cssRules);
        expect(cssForClass('mw-100-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('mw-100-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('mw-100-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct mw1 classes', () => {
        const cssRules = { maxWidth: '1rem' };
        expect(cssForClass('mw1')).toEqual(cssRules);
        expect(cssForClass('mw1-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('mw1-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('mw1-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct mw2 classes', () => {
        const cssRules = { maxWidth: '2rem' };
        expect(cssForClass('mw2')).toEqual(cssRules);
        expect(cssForClass('mw2-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('mw2-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('mw2-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct mw3 classes', () => {
        const cssRules = { maxWidth: '4rem' };
        expect(cssForClass('mw3')).toEqual(cssRules);
        expect(cssForClass('mw3-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('mw3-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('mw3-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct mw4 classes', () => {
        const cssRules = { maxWidth: '8rem' };
        expect(cssForClass('mw4')).toEqual(cssRules);
        expect(cssForClass('mw4-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('mw4-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('mw4-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct mw5 classes', () => {
        const cssRules = { maxWidth: '16rem' };
        expect(cssForClass('mw5')).toEqual(cssRules);
        expect(cssForClass('mw5-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('mw5-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('mw5-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct mw6 classes', () => {
        const cssRules = { maxWidth: '32rem' };
        expect(cssForClass('mw6')).toEqual(cssRules);
        expect(cssForClass('mw6-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('mw6-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('mw6-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct mw7 classes', () => {
        const cssRules = { maxWidth: '48rem' };
        expect(cssForClass('mw7')).toEqual(cssRules);
        expect(cssForClass('mw7-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('mw7-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('mw7-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct mw8 classes', () => {
        const cssRules = { maxWidth: '64rem' };
        expect(cssForClass('mw8')).toEqual(cssRules);
        expect(cssForClass('mw8-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('mw8-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('mw8-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct mw9 classes', () => {
        const cssRules = { maxWidth: '96rem' };
        expect(cssForClass('mw9')).toEqual(cssRules);
        expect(cssForClass('mw9-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('mw9-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('mw9-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct mw-none classes', () => {
        const cssRules = { maxWidth: 'none' };
        expect(cssForClass('mw-none')).toEqual(cssRules);
        expect(cssForClass('mw-none-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('mw-none-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('mw-none-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
});
