import { cssForClass } from './utils';

describe('The aphroditeTachyons object', () => {
    it('should contain the correct flex classes', () => {
        const cssRules = { display: 'flex' };
        expect(cssForClass('flex')).toEqual(cssRules);
        expect(cssForClass('flex-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('flex-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('flex-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct inline-flex classes', () => {
        const cssRules = { display: 'inline-flex' };
        expect(cssForClass('inline-flex')).toEqual(cssRules);
        expect(cssForClass('inline-flex-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('inline-flex-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('inline-flex-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct flex-auto classes', () => {
        const cssRules = { flex: '1 1 auto', minWidth: 0, minHeight: 0 };
        expect(cssForClass('flex-auto')).toEqual(cssRules);
        expect(cssForClass('flex-auto-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('flex-auto-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('flex-auto-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct flex-none classes', () => {
        const cssRules = { flex: 'none' };
        expect(cssForClass('flex-none')).toEqual(cssRules);
        expect(cssForClass('flex-none-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('flex-none-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('flex-none-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct flex-column classes', () => {
        const cssRules = { flexDirection: 'column' };
        expect(cssForClass('flex-column')).toEqual(cssRules);
        expect(cssForClass('flex-column-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('flex-column-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('flex-column-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct flex-row classes', () => {
        const cssRules = { flexDirection: 'row' };
        expect(cssForClass('flex-row')).toEqual(cssRules);
        expect(cssForClass('flex-row-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('flex-row-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('flex-row-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct flex-wrap classes', () => {
        const cssRules = { flexWrap: 'wrap' };
        expect(cssForClass('flex-wrap')).toEqual(cssRules);
        expect(cssForClass('flex-wrap-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('flex-wrap-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('flex-wrap-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct flex-nowrap classes', () => {
        const cssRules = { flexWrap: 'nowrap' };
        expect(cssForClass('flex-nowrap')).toEqual(cssRules);
        expect(cssForClass('flex-nowrap-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('flex-nowrap-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('flex-nowrap-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct flex-wrap-reverse classes', () => {
        const cssRules = { flexWrap: 'wrap-reverse' };
        expect(cssForClass('flex-wrap-reverse')).toEqual(cssRules);
        expect(cssForClass('flex-wrap-reverse-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('flex-wrap-reverse-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('flex-wrap-reverse-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct flex-column-reverse classes', () => {
        const cssRules = { flexDirection: 'column-reverse' };
        expect(cssForClass('flex-column-reverse')).toEqual(cssRules);
        expect(cssForClass('flex-column-reverse-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('flex-column-reverse-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('flex-column-reverse-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct flex-row-reverse classes', () => {
        const cssRules = { flexDirection: 'row-reverse' };
        expect(cssForClass('flex-row-reverse')).toEqual(cssRules);
        expect(cssForClass('flex-row-reverse-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('flex-row-reverse-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('flex-row-reverse-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct items-start classes', () => {
        const cssRules = { alignItems: 'flex-start' };
        expect(cssForClass('items-start')).toEqual(cssRules);
        expect(cssForClass('items-start-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('items-start-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('items-start-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct items-end classes', () => {
        const cssRules = { alignItems: 'flex-end' };
        expect(cssForClass('items-end')).toEqual(cssRules);
        expect(cssForClass('items-end-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('items-end-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('items-end-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct items-center classes', () => {
        const cssRules = { alignItems: 'center' };
        expect(cssForClass('items-center')).toEqual(cssRules);
        expect(cssForClass('items-center-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('items-center-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('items-center-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct items-baseline classes', () => {
        const cssRules = { alignItems: 'baseline' };
        expect(cssForClass('items-baseline')).toEqual(cssRules);
        expect(cssForClass('items-baseline-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('items-baseline-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('items-baseline-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct items-stretch classes', () => {
        const cssRules = { alignItems: 'stretch' };
        expect(cssForClass('items-stretch')).toEqual(cssRules);
        expect(cssForClass('items-stretch-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('items-stretch-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('items-stretch-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct self-start classes', () => {
        const cssRules = { alignSelf: 'flex-start' };
        expect(cssForClass('self-start')).toEqual(cssRules);
        expect(cssForClass('self-start-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('self-start-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('self-start-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct self-end classes', () => {
        const cssRules = { alignSelf: 'flex-end' };
        expect(cssForClass('self-end')).toEqual(cssRules);
        expect(cssForClass('self-end-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('self-end-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('self-end-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct self-center classes', () => {
        const cssRules = { alignSelf: 'center' };
        expect(cssForClass('self-center')).toEqual(cssRules);
        expect(cssForClass('self-center-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('self-center-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('self-center-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct self-baseline classes', () => {
        const cssRules = { alignSelf: 'baseline' };
        expect(cssForClass('self-baseline')).toEqual(cssRules);
        expect(cssForClass('self-baseline-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('self-baseline-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('self-baseline-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct self-stretch classes', () => {
        const cssRules = { alignSelf: 'stretch' };
        expect(cssForClass('self-stretch')).toEqual(cssRules);
        expect(cssForClass('self-stretch-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('self-stretch-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('self-stretch-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct justify-start classes', () => {
        const cssRules = { justifyContent: 'flex-start' };
        expect(cssForClass('justify-start')).toEqual(cssRules);
        expect(cssForClass('justify-start-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('justify-start-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('justify-start-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct justify-end classes', () => {
        const cssRules = { justifyContent: 'flex-end' };
        expect(cssForClass('justify-end')).toEqual(cssRules);
        expect(cssForClass('justify-end-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('justify-end-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('justify-end-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct justify-center classes', () => {
        const cssRules = { justifyContent: 'center' };
        expect(cssForClass('justify-center')).toEqual(cssRules);
        expect(cssForClass('justify-center-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('justify-center-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('justify-center-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct justify-between classes', () => {
        const cssRules = { justifyContent: 'space-between' };
        expect(cssForClass('justify-between')).toEqual(cssRules);
        expect(cssForClass('justify-between-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('justify-between-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('justify-between-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct justify-around classes', () => {
        const cssRules = { justifyContent: 'space-around' };
        expect(cssForClass('justify-around')).toEqual(cssRules);
        expect(cssForClass('justify-around-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('justify-around-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('justify-around-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct content-start classes', () => {
        const cssRules = { alignContent: 'flex-start' };
        expect(cssForClass('content-start')).toEqual(cssRules);
        expect(cssForClass('content-start-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('content-start-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('content-start-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct content-end classes', () => {
        const cssRules = { alignContent: 'flex-end' };
        expect(cssForClass('content-end')).toEqual(cssRules);
        expect(cssForClass('content-end-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('content-end-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('content-end-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct content-center classes', () => {
        const cssRules = { alignContent: 'center' };
        expect(cssForClass('content-center')).toEqual(cssRules);
        expect(cssForClass('content-center-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('content-center-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('content-center-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct content-between classes', () => {
        const cssRules = { alignContent: 'space-between' };
        expect(cssForClass('content-between')).toEqual(cssRules);
        expect(cssForClass('content-between-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('content-between-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('content-between-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct content-around classes', () => {
        const cssRules = { alignContent: 'space-around' };
        expect(cssForClass('content-around')).toEqual(cssRules);
        expect(cssForClass('content-around-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('content-around-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('content-around-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct content-stretch classes', () => {
        const cssRules = { alignContent: 'stretch' };
        expect(cssForClass('content-stretch')).toEqual(cssRules);
        expect(cssForClass('content-stretch-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('content-stretch-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('content-stretch-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct order-0 classes', () => {
        const cssRules = { order: 0 };
        expect(cssForClass('order-0')).toEqual(cssRules);
        expect(cssForClass('order-0-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('order-0-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('order-0-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct order-1 classes', () => {
        const cssRules = { order: 1 };
        expect(cssForClass('order-1')).toEqual(cssRules);
        expect(cssForClass('order-1-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('order-1-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('order-1-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct order-2 classes', () => {
        const cssRules = { order: 2 };
        expect(cssForClass('order-2')).toEqual(cssRules);
        expect(cssForClass('order-2-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('order-2-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('order-2-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct order-3 classes', () => {
        const cssRules = { order: 3 };
        expect(cssForClass('order-3')).toEqual(cssRules);
        expect(cssForClass('order-3-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('order-3-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('order-3-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct order-4 classes', () => {
        const cssRules = { order: 4 };
        expect(cssForClass('order-4')).toEqual(cssRules);
        expect(cssForClass('order-4-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('order-4-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('order-4-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct order-5 classes', () => {
        const cssRules = { order: 5 };
        expect(cssForClass('order-5')).toEqual(cssRules);
        expect(cssForClass('order-5-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('order-5-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('order-5-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct order-6 classes', () => {
        const cssRules = { order: 6 };
        expect(cssForClass('order-6')).toEqual(cssRules);
        expect(cssForClass('order-6-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('order-6-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('order-6-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct order-7 classes', () => {
        const cssRules = { order: 7 };
        expect(cssForClass('order-7')).toEqual(cssRules);
        expect(cssForClass('order-7-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('order-7-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('order-7-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct order-8 classes', () => {
        const cssRules = { order: 8 };
        expect(cssForClass('order-8')).toEqual(cssRules);
        expect(cssForClass('order-8-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('order-8-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('order-8-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct order-last classes', () => {
        const cssRules = { order: 99999 };
        expect(cssForClass('order-last')).toEqual(cssRules);
        expect(cssForClass('order-last-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('order-last-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('order-last-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct flex-grow-0 classes', () => {
        const cssRules = { flexGrow: 0 };
        expect(cssForClass('flex-grow-0')).toEqual(cssRules);
        expect(cssForClass('flex-grow-0-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('flex-grow-0-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('flex-grow-0-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct flex-grow-1 classes', () => {
        const cssRules = { flexGrow: 1 };
        expect(cssForClass('flex-grow-1')).toEqual(cssRules);
        expect(cssForClass('flex-grow-1-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('flex-grow-1-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('flex-grow-1-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct flex-shrink-0 classes', () => {
        const cssRules = { flexShrink: 0 };
        expect(cssForClass('flex-shrink-0')).toEqual(cssRules);
        expect(cssForClass('flex-shrink-0-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('flex-shrink-0-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('flex-shrink-0-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
    it('should contain the correct flex-shrink-1 classes', () => {
        const cssRules = { flexShrink: 1 };
        expect(cssForClass('flex-shrink-1')).toEqual(cssRules);
        expect(cssForClass('flex-shrink-1-ns')).toEqual({
            '@media only screen and (min-width: 30em)': cssRules
        });
        expect(cssForClass('flex-shrink-1-m')).toEqual({
            '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
        });
        expect(cssForClass('flex-shrink-1-l')).toEqual({
            '@media only screen and (min-width: 60em)': cssRules
        });
    });
});
