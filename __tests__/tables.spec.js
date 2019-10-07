import { cssForClass } from './utils';

describe('The aphroditeTachyons object', () => {
    it('should contain the correct collapse class', () => {
        const cssRules = {
            borderCollapse: 'collapse',
            borderSpacing: 0
        };
        expect(cssForClass('collapse')).toEqual(cssRules);
    });
    it('should contain the correct striped--moon-gray class', () => {
        const cssRules = {
            ':nth-child(odd)': { backgroundColor: '#ccc' }
        };
        expect(cssForClass('striped--moon-gray')).toEqual(cssRules);
    });
    it('should contain the correct striped--light-gray class', () => {
        const cssRules = {
            ':nth-child(odd)': { backgroundColor: '#eee' }
        };
        expect(cssForClass('striped--light-gray')).toEqual(cssRules);
    });
    it('should contain the correct striped--near-white class', () => {
        const cssRules = {
            ':nth-child(odd)': { backgroundColor: '#f4f4f4' }
        };
        expect(cssForClass('striped--near-white')).toEqual(cssRules);
    });
});
