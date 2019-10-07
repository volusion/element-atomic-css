import { cssForClass } from './utils';

describe('The aphroditeTachyons object', () => {
    it('should contain the correct dn classes', () => {
        const cssRules = { display: 'none' };
        expect(cssForClass('dn')).toEqual(cssRules);
        expect(cssForClass('dn-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('dn-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('dn-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct di classes', () => {
        const cssRules = { display: 'inline' };
        expect(cssForClass('di')).toEqual(cssRules);
        expect(cssForClass('di-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('di-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('di-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct db classes', () => {
        const cssRules = { display: 'block' };
        expect(cssForClass('db')).toEqual(cssRules);
        expect(cssForClass('db-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('db-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('db-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct dib classes', () => {
        const cssRules = { display: 'inline-block' };
        expect(cssForClass('dib')).toEqual(cssRules);
        expect(cssForClass('dib-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('dib-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('dib-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct dit classes', () => {
        const cssRules = { display: 'inline-table' };
        expect(cssForClass('dit')).toEqual(cssRules);
        expect(cssForClass('dit-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('dit-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('dit-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct dt classes', () => {
        const cssRules = { display: 'table' };
        expect(cssForClass('dt')).toEqual(cssRules);
        expect(cssForClass('dt-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('dt-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('dt-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct dtc classes', () => {
        const cssRules = { display: 'table-cell' };
        expect(cssForClass('dtc')).toEqual(cssRules);
        expect(cssForClass('dtc-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('dtc-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('dtc-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct dt-row classes', () => {
        const cssRules = { display: 'table-row' };
        expect(cssForClass('dt-row')).toEqual(cssRules);
        expect(cssForClass('dt-row-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('dt-row-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('dt-row-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct dt-row-group classes', () => {
        const cssRules = { display: 'table-row-group' };
        expect(cssForClass('dt-row-group')).toEqual(cssRules);
        expect(cssForClass('dt-row-group-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('dt-row-group-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('dt-row-group-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct dt-column classes', () => {
        const cssRules = { display: 'table-column' };
        expect(cssForClass('dt-column')).toEqual(cssRules);
        expect(cssForClass('dt-column-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('dt-column-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('dt-column-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct dt-column-group classes', () => {
        const cssRules = { display: 'table-column-group' };
        expect(cssForClass('dt-column-group')).toEqual(cssRules);
        expect(cssForClass('dt-column-group-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('dt-column-group-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('dt-column-group-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct dt--fixed classes', () => {
        const cssRules = { display: 'fixed', width: '100%' };
        expect(cssForClass('dt--fixed')).toEqual(cssRules);
        expect(cssForClass('dt--fixed-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('dt--fixed-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('dt--fixed-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
});
