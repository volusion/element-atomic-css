import { cssForClass } from './utils';

describe('The aphroditeTachyons object', () => {
    it('should contain the correct black-90 class', () => {
        const expectedCSS = { color: 'rgba( 0, 0, 0, .9 )' };
        expect(cssForClass('black-90')).toEqual(expectedCSS);
    });
    it('should contain the correct black-80 class', () => {
        const expectedCSS = { color: 'rgba( 0, 0, 0, .8 )' };
        expect(cssForClass('black-80')).toEqual(expectedCSS);
    });
    it('should contain the correct black-70 class', () => {
        const expectedCSS = { color: 'rgba( 0, 0, 0, .7 )' };
        expect(cssForClass('black-70')).toEqual(expectedCSS);
    });
    it('should contain the correct black-60 class', () => {
        const expectedCSS = { color: 'rgba( 0, 0, 0, .6 )' };
        expect(cssForClass('black-60')).toEqual(expectedCSS);
    });
    it('should contain the correct black-50 class', () => {
        const expectedCSS = { color: 'rgba( 0, 0, 0, .5 )' };
        expect(cssForClass('black-50')).toEqual(expectedCSS);
    });
    it('should contain the correct black-40 class', () => {
        const expectedCSS = { color: 'rgba( 0, 0, 0, .4 )' };
        expect(cssForClass('black-40')).toEqual(expectedCSS);
    });
    it('should contain the correct black-30 class', () => {
        const expectedCSS = { color: 'rgba( 0, 0, 0, .3 )' };
        expect(cssForClass('black-30')).toEqual(expectedCSS);
    });
    it('should contain the correct black-20 class', () => {
        const expectedCSS = { color: 'rgba( 0, 0, 0, .2 )' };
        expect(cssForClass('black-20')).toEqual(expectedCSS);
    });
    it('should contain the correct black-10 class', () => {
        const expectedCSS = { color: 'rgba( 0, 0, 0, .1 )' };
        expect(cssForClass('black-10')).toEqual(expectedCSS);
    });
    it('should contain the correct black-05 class', () => {
        const expectedCSS = { color: 'rgba( 0, 0, 0, .05 )' };
        expect(cssForClass('black-05')).toEqual(expectedCSS);
    });
    it('should contain the correct white-90 class', () => {
        const expectedCSS = { color: 'rgba( 255, 255, 255, .9 )' };
        expect(cssForClass('white-90')).toEqual(expectedCSS);
    });
    it('should contain the correct white-80 class', () => {
        const expectedCSS = { color: 'rgba( 255, 255, 255, .8 )' };
        expect(cssForClass('white-80')).toEqual(expectedCSS);
    });
    it('should contain the correct white-70 class', () => {
        const expectedCSS = { color: 'rgba( 255, 255, 255, .7 )' };
        expect(cssForClass('white-70')).toEqual(expectedCSS);
    });
    it('should contain the correct white-60 class', () => {
        const expectedCSS = { color: 'rgba( 255, 255, 255, .6 )' };
        expect(cssForClass('white-60')).toEqual(expectedCSS);
    });
    it('should contain the correct white-50 class', () => {
        const expectedCSS = { color: 'rgba( 255, 255, 255, .5 )' };
        expect(cssForClass('white-50')).toEqual(expectedCSS);
    });
    it('should contain the correct white-40 class', () => {
        const expectedCSS = { color: 'rgba( 255, 255, 255, .4 )' };
        expect(cssForClass('white-40')).toEqual(expectedCSS);
    });
    it('should contain the correct white-30 class', () => {
        const expectedCSS = { color: 'rgba( 255, 255, 255, .3 )' };
        expect(cssForClass('white-30')).toEqual(expectedCSS);
    });
    it('should contain the correct white-20 class', () => {
        const expectedCSS = { color: 'rgba( 255, 255, 255, .2 )' };
        expect(cssForClass('white-20')).toEqual(expectedCSS);
    });
    it('should contain the correct white-10 class', () => {
        const expectedCSS = { color: 'rgba( 255, 255, 255, .1 )' };
        expect(cssForClass('white-10')).toEqual(expectedCSS);
    });
    it('should contain the correct black class', () => {
        const expectedCSS = { color: '#000' };
        expect(cssForClass('black')).toEqual(expectedCSS);
    });
    it('should contain the correct near-black class', () => {
        const expectedCSS = { color: '#111' };
        expect(cssForClass('near-black')).toEqual(expectedCSS);
    });
    it('should contain the correct dark-gray class', () => {
        const expectedCSS = { color: '#333' };
        expect(cssForClass('dark-gray')).toEqual(expectedCSS);
    });
    it('should contain the correct mid-gray class', () => {
        const expectedCSS = { color: '#555' };
        expect(cssForClass('mid-gray')).toEqual(expectedCSS);
    });
    it('should contain the correct gray class', () => {
        const expectedCSS = { color: '#777' };
        expect(cssForClass('gray')).toEqual(expectedCSS);
    });
    it('should contain the correct silver class', () => {
        const expectedCSS = { color: '#999' };
        expect(cssForClass('silver')).toEqual(expectedCSS);
    });
    it('should contain the correct light-silver class', () => {
        const expectedCSS = { color: '#aaa' };
        expect(cssForClass('light-silver')).toEqual(expectedCSS);
    });
    it('should contain the correct moon-gray class', () => {
        const expectedCSS = { color: '#ccc' };
        expect(cssForClass('moon-gray')).toEqual(expectedCSS);
    });
    it('should contain the correct light-gray class', () => {
        const expectedCSS = { color: '#eee' };
        expect(cssForClass('light-gray')).toEqual(expectedCSS);
    });
    it('should contain the correct near-white class', () => {
        const expectedCSS = { color: '#f4f4f4' };
        expect(cssForClass('near-white')).toEqual(expectedCSS);
    });
    it('should contain the correct white class', () => {
        const expectedCSS = { color: '#fff' };
        expect(cssForClass('white')).toEqual(expectedCSS);
    });
    it('should contain the correct dark-red class', () => {
        const expectedCSS = { color: '#e7040f' };
        expect(cssForClass('dark-red')).toEqual(expectedCSS);
    });
    it('should contain the correct red class', () => {
        const expectedCSS = { color: '#ff4136' };
        expect(cssForClass('red')).toEqual(expectedCSS);
    });
    it('should contain the correct light-red class', () => {
        const expectedCSS = { color: '#ff725c' };
        expect(cssForClass('light-red')).toEqual(expectedCSS);
    });
    it('should contain the correct orange class', () => {
        const expectedCSS = { color: '#ff6300' };
        expect(cssForClass('orange')).toEqual(expectedCSS);
    });
    it('should contain the correct gold class', () => {
        const expectedCSS = { color: '#ffb700' };
        expect(cssForClass('gold')).toEqual(expectedCSS);
    });
    it('should contain the correct yellow class', () => {
        const expectedCSS = { color: '#ffd700' };
        expect(cssForClass('yellow')).toEqual(expectedCSS);
    });
    it('should contain the correct light-yellow class', () => {
        const expectedCSS = { color: '#fbf1a9' };
        expect(cssForClass('light-yellow')).toEqual(expectedCSS);
    });
    it('should contain the correct purple class', () => {
        const expectedCSS = { color: '#5e2ca5' };
        expect(cssForClass('purple')).toEqual(expectedCSS);
    });
    it('should contain the correct light-purple class', () => {
        const expectedCSS = { color: '#a463f2' };
        expect(cssForClass('light-purple')).toEqual(expectedCSS);
    });
    it('should contain the correct dark-pink class', () => {
        const expectedCSS = { color: '#d5008f' };
        expect(cssForClass('dark-pink')).toEqual(expectedCSS);
    });
    it('should contain the correct hot-pink class', () => {
        const expectedCSS = { color: '#ff41b4' };
        expect(cssForClass('hot-pink')).toEqual(expectedCSS);
    });
    it('should contain the correct pink class', () => {
        const expectedCSS = { color: '#ff80cc' };
        expect(cssForClass('pink')).toEqual(expectedCSS);
    });
    it('should contain the correct light-pink class', () => {
        const expectedCSS = { color: '#ffa3d7' };
        expect(cssForClass('light-pink')).toEqual(expectedCSS);
    });
    it('should contain the correct dark-green class', () => {
        const expectedCSS = { color: '#137752' };
        expect(cssForClass('dark-green')).toEqual(expectedCSS);
    });
    it('should contain the correct green class', () => {
        const expectedCSS = { color: '#19a974' };
        expect(cssForClass('green')).toEqual(expectedCSS);
    });
    it('should contain the correct light-green class', () => {
        const expectedCSS = { color: '#9eebcf' };
        expect(cssForClass('light-green')).toEqual(expectedCSS);
    });
    it('should contain the correct navy class', () => {
        const expectedCSS = { color: '#001b44' };
        expect(cssForClass('navy')).toEqual(expectedCSS);
    });
    it('should contain the correct dark-blue class', () => {
        const expectedCSS = { color: '#00449e' };
        expect(cssForClass('dark-blue')).toEqual(expectedCSS);
    });
    it('should contain the correct blue class', () => {
        const expectedCSS = { color: '#357edd' };
        expect(cssForClass('blue')).toEqual(expectedCSS);
    });
    it('should contain the correct light-blue class', () => {
        const expectedCSS = { color: '#96ccff' };
        expect(cssForClass('light-blue')).toEqual(expectedCSS);
    });
    it('should contain the correct lightest-blue class', () => {
        const expectedCSS = { color: '#cdecff' };
        expect(cssForClass('lightest-blue')).toEqual(expectedCSS);
    });
    it('should contain the correct washed-blue class', () => {
        const expectedCSS = { color: '#f6fffe' };
        expect(cssForClass('washed-blue')).toEqual(expectedCSS);
    });
    it('should contain the correct washed-green class', () => {
        const expectedCSS = { color: '#e8fdf5' };
        expect(cssForClass('washed-green')).toEqual(expectedCSS);
    });
    it('should contain the correct washed-yellow class', () => {
        const expectedCSS = { color: '#fffceb' };
        expect(cssForClass('washed-yellow')).toEqual(expectedCSS);
    });
    it('should contain the correct washed-red class', () => {
        const expectedCSS = { color: '#ffdfdf' };
        expect(cssForClass('washed-red')).toEqual(expectedCSS);
    });
    it('should contain the correct color-inherit class', () => {
        const expectedCSS = { color: 'inherit' };
        expect(cssForClass('color-inherit')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-black-90 class', () => {
        const expectedCSS = { 'background-color': 'rgba( 0, 0, 0, .9 )' };
        expect(cssForClass('bg-black-90')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-black-80 class', () => {
        const expectedCSS = { 'background-color': 'rgba( 0, 0, 0, .8 )' };
        expect(cssForClass('bg-black-80')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-black-70 class', () => {
        const expectedCSS = { 'background-color': 'rgba( 0, 0, 0, .7 )' };
        expect(cssForClass('bg-black-70')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-black-60 class', () => {
        const expectedCSS = { 'background-color': 'rgba( 0, 0, 0, .6 )' };
        expect(cssForClass('bg-black-60')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-black-50 class', () => {
        const expectedCSS = { 'background-color': 'rgba( 0, 0, 0, .5 )' };
        expect(cssForClass('bg-black-50')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-black-40 class', () => {
        const expectedCSS = { 'background-color': 'rgba( 0, 0, 0, .4 )' };
        expect(cssForClass('bg-black-40')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-black-30 class', () => {
        const expectedCSS = { 'background-color': 'rgba( 0, 0, 0, .3 )' };
        expect(cssForClass('bg-black-30')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-black-20 class', () => {
        const expectedCSS = { 'background-color': 'rgba( 0, 0, 0, .2 )' };
        expect(cssForClass('bg-black-20')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-black-10 class', () => {
        const expectedCSS = { 'background-color': 'rgba( 0, 0, 0, .1 )' };
        expect(cssForClass('bg-black-10')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-black-05 class', () => {
        const expectedCSS = { 'background-color': 'rgba( 0, 0, 0, .05 )' };
        expect(cssForClass('bg-black-05')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-white-90 class', () => {
        const expectedCSS = { 'background-color': 'rgba( 255, 255, 255, .9 )' };
        expect(cssForClass('bg-white-90')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-white-80 class', () => {
        const expectedCSS = { 'background-color': 'rgba( 255, 255, 255, .8 )' };
        expect(cssForClass('bg-white-80')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-white-70 class', () => {
        const expectedCSS = { 'background-color': 'rgba( 255, 255, 255, .7 )' };
        expect(cssForClass('bg-white-70')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-white-60 class', () => {
        const expectedCSS = { 'background-color': 'rgba( 255, 255, 255, .6 )' };
        expect(cssForClass('bg-white-60')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-white-50 class', () => {
        const expectedCSS = { 'background-color': 'rgba( 255, 255, 255, .5 )' };
        expect(cssForClass('bg-white-50')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-white-40 class', () => {
        const expectedCSS = { 'background-color': 'rgba( 255, 255, 255, .4 )' };
        expect(cssForClass('bg-white-40')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-white-30 class', () => {
        const expectedCSS = { 'background-color': 'rgba( 255, 255, 255, .3 )' };
        expect(cssForClass('bg-white-30')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-white-20 class', () => {
        const expectedCSS = { 'background-color': 'rgba( 255, 255, 255, .2 )' };
        expect(cssForClass('bg-white-20')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-white-10 class', () => {
        const expectedCSS = { 'background-color': 'rgba( 255, 255, 255, .1 )' };
        expect(cssForClass('bg-white-10')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-black class', () => {
        const expectedCSS = { 'background-color': '#000' };
        expect(cssForClass('bg-black')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-near-black class', () => {
        const expectedCSS = { 'background-color': '#111' };
        expect(cssForClass('bg-near-black')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-dark-gray class', () => {
        const expectedCSS = { 'background-color': '#333' };
        expect(cssForClass('bg-dark-gray')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-mid-gray class', () => {
        const expectedCSS = { 'background-color': '#555' };
        expect(cssForClass('bg-mid-gray')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-gray class', () => {
        const expectedCSS = { 'background-color': '#777' };
        expect(cssForClass('bg-gray')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-silver class', () => {
        const expectedCSS = { 'background-color': '#999' };
        expect(cssForClass('bg-silver')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-light-silver class', () => {
        const expectedCSS = { 'background-color': '#aaa' };
        expect(cssForClass('bg-light-silver')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-moon-gray class', () => {
        const expectedCSS = { 'background-color': '#ccc' };
        expect(cssForClass('bg-moon-gray')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-light-gray class', () => {
        const expectedCSS = { 'background-color': '#eee' };
        expect(cssForClass('bg-light-gray')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-near-white class', () => {
        const expectedCSS = { 'background-color': '#f4f4f4' };
        expect(cssForClass('bg-near-white')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-white class', () => {
        const expectedCSS = { 'background-color': '#fff' };
        expect(cssForClass('bg-white')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-transparent class', () => {
        const expectedCSS = { 'background-color': 'transparent' };
        expect(cssForClass('bg-transparent')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-dark-red class', () => {
        const expectedCSS = { 'background-color': '#e7040f' };
        expect(cssForClass('bg-dark-red')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-red class', () => {
        const expectedCSS = { 'background-color': '#ff4136' };
        expect(cssForClass('bg-red')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-light-red class', () => {
        const expectedCSS = { 'background-color': '#ff725c' };
        expect(cssForClass('bg-light-red')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-orange class', () => {
        const expectedCSS = { 'background-color': '#ff6300' };
        expect(cssForClass('bg-orange')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-gold class', () => {
        const expectedCSS = { 'background-color': '#ffb700' };
        expect(cssForClass('bg-gold')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-yellow class', () => {
        const expectedCSS = { 'background-color': '#ffd700' };
        expect(cssForClass('bg-yellow')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-light-yellow class', () => {
        const expectedCSS = { 'background-color': '#fbf1a9' };
        expect(cssForClass('bg-light-yellow')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-purple class', () => {
        const expectedCSS = { 'background-color': '#5e2ca5' };
        expect(cssForClass('bg-purple')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-light-purple class', () => {
        const expectedCSS = { 'background-color': '#a463f2' };
        expect(cssForClass('bg-light-purple')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-dark-pink class', () => {
        const expectedCSS = { 'background-color': '#d5008f' };
        expect(cssForClass('bg-dark-pink')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-hot-pink class', () => {
        const expectedCSS = { 'background-color': '#ff41b4' };
        expect(cssForClass('bg-hot-pink')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-pink class', () => {
        const expectedCSS = { 'background-color': '#ff80cc' };
        expect(cssForClass('bg-pink')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-light-pink class', () => {
        const expectedCSS = { 'background-color': '#ffa3d7' };
        expect(cssForClass('bg-light-pink')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-dark-green class', () => {
        const expectedCSS = { 'background-color': '#137752' };
        expect(cssForClass('bg-dark-green')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-green class', () => {
        const expectedCSS = { 'background-color': '#19a974' };
        expect(cssForClass('bg-green')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-light-green class', () => {
        const expectedCSS = { 'background-color': '#9eebcf' };
        expect(cssForClass('bg-light-green')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-navy class', () => {
        const expectedCSS = { 'background-color': '#001b44' };
        expect(cssForClass('bg-navy')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-dark-blue class', () => {
        const expectedCSS = { 'background-color': '#00449e' };
        expect(cssForClass('bg-dark-blue')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-blue class', () => {
        const expectedCSS = { 'background-color': '#357edd' };
        expect(cssForClass('bg-blue')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-light-blue class', () => {
        const expectedCSS = { 'background-color': '#96ccff' };
        expect(cssForClass('bg-light-blue')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-lightest-blue class', () => {
        const expectedCSS = { 'background-color': '#cdecff' };
        expect(cssForClass('bg-lightest-blue')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-washed-blue class', () => {
        const expectedCSS = { 'background-color': '#f6fffe' };
        expect(cssForClass('bg-washed-blue')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-washed-green class', () => {
        const expectedCSS = { 'background-color': '#e8fdf5' };
        expect(cssForClass('bg-washed-green')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-washed-yellow class', () => {
        const expectedCSS = { 'background-color': '#fffceb' };
        expect(cssForClass('bg-washed-yellow')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-washed-red class', () => {
        const expectedCSS = { 'background-color': '#ffdfdf' };
        expect(cssForClass('bg-washed-red')).toEqual(expectedCSS);
    });
    it('should contain the correct bg-inherit class', () => {
        const expectedCSS = { 'background-color': 'inherit' };
        expect(cssForClass('bg-inherit')).toEqual(expectedCSS);
    });
});
