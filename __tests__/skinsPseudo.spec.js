import { cssForClass } from './utils';

describe('The aphroditeTachyons object', () => {
    it('should have the correct hover-black class', () => {
        const cssRule = { color: '#000' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-black')).toEqual(expectedCSS);
    });
    it('should have the correct hover-near-black class', () => {
        const cssRule = { color: '#111' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-near-black')).toEqual(expectedCSS);
    });
    it('should have the correct hover-dark-gray class', () => {
        const cssRule = { color: '#333' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-dark-gray')).toEqual(expectedCSS);
    });
    it('should have the correct hover-mid-gray class', () => {
        const cssRule = { color: '#555' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-mid-gray')).toEqual(expectedCSS);
    });
    it('should have the correct hover-gray class', () => {
        const cssRule = { color: '#777' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-gray')).toEqual(expectedCSS);
    });
    it('should have the correct hover-silver class', () => {
        const cssRule = { color: '#999' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-silver')).toEqual(expectedCSS);
    });
    it('should have the correct hover-light-silver class', () => {
        const cssRule = { color: '#aaa' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-light-silver')).toEqual(expectedCSS);
    });
    it('should have the correct hover-moon-gray class', () => {
        const cssRule = { color: '#ccc' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-moon-gray')).toEqual(expectedCSS);
    });
    it('should have the correct hover-light-gray class', () => {
        const cssRule = { color: '#eee' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-light-gray')).toEqual(expectedCSS);
    });
    it('should have the correct hover-near-white class', () => {
        const cssRule = { color: '#f4f4f4' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-near-white')).toEqual(expectedCSS);
    });
    it('should have the correct hover-white class', () => {
        const cssRule = { color: '#fff' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-white')).toEqual(expectedCSS);
    });
    it('should have the correct hover-bg-black class', () => {
        const cssRule = { backgroundColor: '#000' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-bg-black')).toEqual(expectedCSS);
    });
    it('should have the correct hover-bg-near-black class', () => {
        const cssRule = { backgroundColor: '#111' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-bg-near-black')).toEqual(expectedCSS);
    });
    it('should have the correct hover-bg-dark-gray class', () => {
        const cssRule = { backgroundColor: '#333' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-bg-dark-gray')).toEqual(expectedCSS);
    });
    it('should have the correct hover-bg-mid-gray class', () => {
        const cssRule = { backgroundColor: '#555' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-bg-mid-gray')).toEqual(expectedCSS);
    });
    it('should have the correct hover-bg-gray class', () => {
        const cssRule = { backgroundColor: '#777' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-bg-gray')).toEqual(expectedCSS);
    });
    it('should have the correct hover-bg-silver class', () => {
        const cssRule = { backgroundColor: '#999' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-bg-silver')).toEqual(expectedCSS);
    });
    it('should have the correct hover-bg-light-silver class', () => {
        const cssRule = { backgroundColor: '#aaa' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-bg-light-silver')).toEqual(expectedCSS);
    });
    it('should have the correct hover-bg-moon-gray class', () => {
        const cssRule = { backgroundColor: '#ccc' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-bg-moon-gray')).toEqual(expectedCSS);
    });
    it('should have the correct hover-bg-light-gray class', () => {
        const cssRule = { backgroundColor: '#eee' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-bg-light-gray')).toEqual(expectedCSS);
    });
    it('should have the correct hover-bg-near-white class', () => {
        const cssRule = { backgroundColor: '#f4f4f4' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-bg-near-white')).toEqual(expectedCSS);
    });
    it('should have the correct hover-bg-white class', () => {
        const cssRule = { backgroundColor: '#fff' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-bg-white')).toEqual(expectedCSS);
    });
    it('should have the correct hover-bg-transparent class', () => {
        const cssRule = { backgroundColor: 'transparent' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-bg-transparent')).toEqual(expectedCSS);
    });
    it('should have the correct hover-dark-red class', () => {
        const cssRule = { color: '#e7040f' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-dark-red')).toEqual(expectedCSS);
    });
    it('should have the correct hover-red class', () => {
        const cssRule = { color: '#ff4136' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-red')).toEqual(expectedCSS);
    });
    it('should have the correct hover-light-red class', () => {
        const cssRule = { color: '#ff725c' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-light-red')).toEqual(expectedCSS);
    });
    it('should have the correct hover-orange class', () => {
        const cssRule = { color: '#ff6300' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-orange')).toEqual(expectedCSS);
    });
    it('should have the correct hover-gold class', () => {
        const cssRule = { color: '#ffb700' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-gold')).toEqual(expectedCSS);
    });
    it('should have the correct hover-yellow class', () => {
        const cssRule = { color: '#ffd700' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-yellow')).toEqual(expectedCSS);
    });
    it('should have the correct hover-light-yellow class', () => {
        const cssRule = { color: '#fbf1a9' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-light-yellow')).toEqual(expectedCSS);
    });
    it('should have the correct hover-purple class', () => {
        const cssRule = { color: '#5e2ca5' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-purple')).toEqual(expectedCSS);
    });
    it('should have the correct hover-light-purple class', () => {
        const cssRule = { color: '#a463f2' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-light-purple')).toEqual(expectedCSS);
    });
    it('should have the correct hover-dark-pink class', () => {
        const cssRule = { color: '#d5008f' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-dark-pink')).toEqual(expectedCSS);
    });
    it('should have the correct hover-hot-pink class', () => {
        const cssRule = { color: '#ff41b4' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-hot-pink')).toEqual(expectedCSS);
    });
    it('should have the correct hover-pink class', () => {
        const cssRule = { color: '#ff80cc' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-pink')).toEqual(expectedCSS);
    });
    it('should have the correct hover-light-pink class', () => {
        const cssRule = { color: '#ffa3d7' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-light-pink')).toEqual(expectedCSS);
    });
    it('should have the correct hover-dark-green class', () => {
        const cssRule = { color: '#137752' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-dark-green')).toEqual(expectedCSS);
    });
    it('should have the correct hover-green class', () => {
        const cssRule = { color: '#19a974' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-green')).toEqual(expectedCSS);
    });
    it('should have the correct hover-light-green class', () => {
        const cssRule = { color: '#9eebcf' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-light-green')).toEqual(expectedCSS);
    });
    it('should have the correct hover-navy class', () => {
        const cssRule = { color: '#001b44' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-navy')).toEqual(expectedCSS);
    });
    it('should have the correct hover-dark-blue class', () => {
        const cssRule = { color: '#00449e' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-dark-blue')).toEqual(expectedCSS);
    });
    it('should have the correct hover-blue class', () => {
        const cssRule = { color: '#357edd' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-blue')).toEqual(expectedCSS);
    });
    it('should have the correct hover-light-blue class', () => {
        const cssRule = { color: '#96ccff' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-light-blue')).toEqual(expectedCSS);
    });
    it('should have the correct hover-lightest-blue class', () => {
        const cssRule = { color: '#cdecff' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-lightest-blue')).toEqual(expectedCSS);
    });
    it('should have the correct hover-washed-blue class', () => {
        const cssRule = { color: '#f6fffe' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-washed-blue')).toEqual(expectedCSS);
    });
    it('should have the correct hover-washed-green class', () => {
        const cssRule = { color: '#e8fdf5' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-washed-green')).toEqual(expectedCSS);
    });
    it('should have the correct hover-washed-yellow class', () => {
        const cssRule = { color: '#fffceb' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-washed-yellow')).toEqual(expectedCSS);
    });
    it('should have the correct hover-washed-red class', () => {
        const cssRule = { color: '#ffdfdf' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-washed-red')).toEqual(expectedCSS);
    });
    it('should have the correct hover-bg-dark-red class', () => {
        const cssRule = { backgroundColor: '#e7040f' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-bg-dark-red')).toEqual(expectedCSS);
    });
    it('should have the correct hover-bg-red class', () => {
        const cssRule = { backgroundColor: '#ff4136' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-bg-red')).toEqual(expectedCSS);
    });
    it('should have the correct hover-bg-light-red class', () => {
        const cssRule = { backgroundColor: '#ff725c' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-bg-light-red')).toEqual(expectedCSS);
    });
    it('should have the correct hover-bg-orange class', () => {
        const cssRule = { backgroundColor: '#ff6300' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-bg-orange')).toEqual(expectedCSS);
    });
    it('should have the correct hover-bg-gold class', () => {
        const cssRule = { backgroundColor: '#ffb700' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-bg-gold')).toEqual(expectedCSS);
    });
    it('should have the correct hover-bg-yellow class', () => {
        const cssRule = { backgroundColor: '#ffd700' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-bg-yellow')).toEqual(expectedCSS);
    });
    it('should have the correct hover-bg-light-yellow class', () => {
        const cssRule = { backgroundColor: '#fbf1a9' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-bg-light-yellow')).toEqual(expectedCSS);
    });
    it('should have the correct hover-bg-purple class', () => {
        const cssRule = { backgroundColor: '#5e2ca5' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-bg-purple')).toEqual(expectedCSS);
    });
    it('should have the correct hover-bg-light-purple class', () => {
        const cssRule = { backgroundColor: '#a463f2' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-bg-light-purple')).toEqual(expectedCSS);
    });
    it('should have the correct hover-bg-dark-pink class', () => {
        const cssRule = { backgroundColor: '#d5008f' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-bg-dark-pink')).toEqual(expectedCSS);
    });
    it('should have the correct hover-bg-hot-pink class', () => {
        const cssRule = { backgroundColor: '#ff41b4' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-bg-hot-pink')).toEqual(expectedCSS);
    });
    it('should have the correct hover-bg-pink class', () => {
        const cssRule = { backgroundColor: '#ff80cc' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-bg-pink')).toEqual(expectedCSS);
    });
    it('should have the correct hover-bg-light-pink class', () => {
        const cssRule = { backgroundColor: '#ffa3d7' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-bg-light-pink')).toEqual(expectedCSS);
    });
    it('should have the correct hover-bg-dark-green class', () => {
        const cssRule = { backgroundColor: '#137752' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-bg-dark-green')).toEqual(expectedCSS);
    });
    it('should have the correct hover-bg-green class', () => {
        const cssRule = { backgroundColor: '#19a974' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-bg-green')).toEqual(expectedCSS);
    });
    it('should have the correct hover-bg-light-green class', () => {
        const cssRule = { backgroundColor: '#9eebcf' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-bg-light-green')).toEqual(expectedCSS);
    });
    it('should have the correct hover-bg-navy class', () => {
        const cssRule = { backgroundColor: '#001b44' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-bg-navy')).toEqual(expectedCSS);
    });
    it('should have the correct hover-bg-dark-blue class', () => {
        const cssRule = { backgroundColor: '#00449e' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-bg-dark-blue')).toEqual(expectedCSS);
    });
    it('should have the correct hover-bg-blue class', () => {
        const cssRule = { backgroundColor: '#357edd' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-bg-blue')).toEqual(expectedCSS);
    });
    it('should have the correct hover-bg-light-blue class', () => {
        const cssRule = { backgroundColor: '#96ccff' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-bg-light-blue')).toEqual(expectedCSS);
    });
    it('should have the correct hover-bg-lightest-blue class', () => {
        const cssRule = { backgroundColor: '#cdecff' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-bg-lightest-blue')).toEqual(expectedCSS);
    });
    it('should have the correct hover-bg-washed-blue class', () => {
        const cssRule = { backgroundColor: '#f6fffe' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-bg-washed-blue')).toEqual(expectedCSS);
    });
    it('should have the correct hover-bg-washed-green class', () => {
        const cssRule = { backgroundColor: '#e8fdf5' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-bg-washed-green')).toEqual(expectedCSS);
    });
    it('should have the correct hover-bg-washed-yellow class', () => {
        const cssRule = { backgroundColor: '#fffceb' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-bg-washed-yellow')).toEqual(expectedCSS);
    });
    it('should have the correct hover-bg-washed-red class', () => {
        const cssRule = { backgroundColor: '#ffdfdf' };
        const expectedCSS = { ':hover': cssRule, ':focus': cssRule };
        expect(cssForClass('hover-bg-washed-red')).toEqual(expectedCSS);
    });
});
