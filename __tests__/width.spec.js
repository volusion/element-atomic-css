import { cssForClass } from './utils';

describe('The aphroditeTachyons object', () => {
    it('should contain the correct w1 classes', () => {
        const cssRules = { width: '1rem' };
        expect(cssForClass('w1')).toEqual(cssRules);
        expect(cssForClass('w1-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('w1-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('w1-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct w2 classes', () => {
        const cssRules = { width: '2rem' };
        expect(cssForClass('w2')).toEqual(cssRules);
        expect(cssForClass('w2-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('w2-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('w2-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct w3 classes', () => {
        const cssRules = { width: '4rem' };
        expect(cssForClass('w3')).toEqual(cssRules);
        expect(cssForClass('w3-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('w3-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('w3-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct w4 classes', () => {
        const cssRules = { width: '8rem' };
        expect(cssForClass('w4')).toEqual(cssRules);
        expect(cssForClass('w4-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('w4-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('w4-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct w5 classes', () => {
        const cssRules = { width: '16rem' };
        expect(cssForClass('w5')).toEqual(cssRules);
        expect(cssForClass('w5-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('w5-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('w5-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct w-auto classes', () => {
        const cssRules = { width: 'auto' };
        expect(cssForClass('w-auto')).toEqual(cssRules);
        expect(cssForClass('w-auto-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('w-auto-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('w-auto-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct w-10 classes', () => {
        const cssRules = { width: '10%' };
        expect(cssForClass('w-10')).toEqual(cssRules);
        expect(cssForClass('w-10-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('w-10-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('w-10-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct w-20 classes', () => {
        const cssRules = { width: '20%' };
        expect(cssForClass('w-20')).toEqual(cssRules);
        expect(cssForClass('w-20-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('w-20-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('w-20-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct w-25 classes', () => {
        const cssRules = { width: '25%' };
        expect(cssForClass('w-25')).toEqual(cssRules);
        expect(cssForClass('w-25-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('w-25-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('w-25-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct w-30 classes', () => {
        const cssRules = { width: '30%' };
        expect(cssForClass('w-30')).toEqual(cssRules);
        expect(cssForClass('w-30-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('w-30-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('w-30-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct w-third classes', () => {
        const cssRules = { width: 'calc(100% / 3)' };
        expect(cssForClass('w-third')).toEqual(cssRules);
        expect(cssForClass('w-third-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('w-third-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('w-third-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct w-40 classes', () => {
        const cssRules = { width: '40%' };
        expect(cssForClass('w-40')).toEqual(cssRules);
        expect(cssForClass('w-40-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('w-40-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('w-40-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct w-50 classes', () => {
        const cssRules = { width: '50%' };
        expect(cssForClass('w-50')).toEqual(cssRules);
        expect(cssForClass('w-50-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('w-50-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('w-50-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct w-60 classes', () => {
        const cssRules = { width: '60%' };
        expect(cssForClass('w-60')).toEqual(cssRules);
        expect(cssForClass('w-60-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('w-60-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('w-60-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct w-two-thirds classes', () => {
        const cssRules = { width: 'calc(100% / 1.5)' };
        expect(cssForClass('w-two-thirds')).toEqual(cssRules);
        expect(cssForClass('w-two-thirds-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('w-two-thirds-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('w-two-thirds-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct w-70 classes', () => {
        const cssRules = { width: '70%' };
        expect(cssForClass('w-70')).toEqual(cssRules);
        expect(cssForClass('w-70-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('w-70-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('w-70-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct w-75 classes', () => {
        const cssRules = { width: '75%' };
        expect(cssForClass('w-75')).toEqual(cssRules);
        expect(cssForClass('w-75-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('w-75-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('w-75-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct w-80 classes', () => {
        const cssRules = { width: '80%' };
        expect(cssForClass('w-80')).toEqual(cssRules);
        expect(cssForClass('w-80-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('w-80-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('w-80-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct w-90 classes', () => {
        const cssRules = { width: '90%' };
        expect(cssForClass('w-90')).toEqual(cssRules);
        expect(cssForClass('w-90-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('w-90-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('w-90-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct w-100 classes', () => {
        const cssRules = { width: '100%' };
        expect(cssForClass('w-100')).toEqual(cssRules);
        expect(cssForClass('w-100-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('w-100-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('w-100-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
});
