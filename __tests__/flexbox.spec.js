import { aphroditeTachyons } from '../src';

describe('The aphroditeTachyons object', () => {
    it('should contain the correct flex display classes', () => {
        const cssRules = { display: 'flex' };
        const expectedCSS = {
            flex: cssRules,
            'flex-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'flex-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'flex-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct inline-flex display classes', () => {
        const cssRules = { display: 'inline-flex' };
        const expectedCSS = {
            'inline-flex': cssRules,
            'inline-flex-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'inline-flex-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'inline-flex-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct flex auto classes', () => {
        const cssRules = { flex: '1 1 auto', minWidth: 0, minHeight: 0 };
        const expectedCSS = {
            'flex-auto': cssRules,
            'flex-auto-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'flex-auto-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'flex-auto-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct flex none classes', () => {
        const cssRules = { flex: 'none' };
        const expectedCSS = {
            'flex-none': cssRules,
            'flex-none-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'flex-none-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'flex-none-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct flex column classes', () => {
        const cssRules = { flexDirection: 'column' };
        const expectedCSS = {
            'flex-column': cssRules,
            'flex-column-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'flex-column-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'flex-column-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct flex row classes', () => {
        const cssRules = { flexDirection: 'row' };
        const expectedCSS = {
            'flex-row': cssRules,
            'flex-row-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'flex-row-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'flex-row-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct flex wrap classes', () => {
        const cssRules = { flexWrap: 'wrap' };
        const expectedCSS = {
            'flex-wrap': cssRules,
            'flex-wrap-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'flex-wrap-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'flex-wrap-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct flex nowrap classes', () => {
        const cssRules = { flexWrap: 'nowrap' };
        const expectedCSS = {
            'flex-nowrap': cssRules,
            'flex-nowrap-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'flex-nowrap-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'flex-nowrap-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct flex wrap reverse classes', () => {
        const cssRules = { flexWrap: 'wrap-reverse' };
        const expectedCSS = {
            'flex-wrap-reverse': cssRules,
            'flex-wrap-reverse-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'flex-wrap-reverse-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'flex-wrap-reverse-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct flex column reverse classes', () => {
        const cssRules = { flexDirection: 'column-reverse' };
        const expectedCSS = {
            'flex-column-reverse': cssRules,
            'flex-column-reverse-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'flex-column-reverse-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'flex-column-reverse-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct flex row reverse classes', () => {
        const cssRules = { flexDirection: 'row-reverse' };
        const expectedCSS = {
            'flex-row-reverse': cssRules,
            'flex-row-reverse-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'flex-row-reverse-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'flex-row-reverse-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct flex align items start classes', () => {
        const cssRules = { alignItems: 'flex-start' };
        const expectedCSS = {
            'items-start': cssRules,
            'items-start-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'items-start-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'items-start-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct flex align items end classes', () => {
        const cssRules = { alignItems: 'flex-end' };
        const expectedCSS = {
            'items-end': cssRules,
            'items-end-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'items-end-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'items-end-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct flex align items center classes', () => {
        const cssRules = { alignItems: 'center' };
        const expectedCSS = {
            'items-center': cssRules,
            'items-center-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'items-center-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'items-center-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct flex align items baseline classes', () => {
        const cssRules = { alignItems: 'baseline' };
        const expectedCSS = {
            'items-baseline': cssRules,
            'items-baseline-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'items-baseline-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'items-baseline-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct flex align items stretch classes', () => {
        const cssRules = { alignItems: 'stretch' };
        const expectedCSS = {
            'items-stretch': cssRules,
            'items-stretch-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'items-stretch-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'items-stretch-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct flex align self start classes', () => {
        const cssRules = { alignSelf: 'flex-start' };
        const expectedCSS = {
            'self-start': cssRules,
            'self-start-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'self-start-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'self-start-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct flex align self end classes', () => {
        const cssRules = { alignSelf: 'flex-end' };
        const expectedCSS = {
            'self-end': cssRules,
            'self-end-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'self-end-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'self-end-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct flex align self center classes', () => {
        const cssRules = { alignSelf: 'center' };
        const expectedCSS = {
            'self-center': cssRules,
            'self-center-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'self-center-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'self-center-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct flex align self baseline classes', () => {
        const cssRules = { alignSelf: 'baseline' };
        const expectedCSS = {
            'self-baseline': cssRules,
            'self-baseline-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'self-baseline-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'self-baseline-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct flex align self stretch classes', () => {
        const cssRules = { alignSelf: 'stretch' };
        const expectedCSS = {
            'self-stretch': cssRules,
            'self-stretch-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'self-stretch-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'self-stretch-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct justify content start classes', () => {
        const cssRules = { justifyContent: 'flex-start' };
        const expectedCSS = {
            'justify-start': cssRules,
            'justify-start-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'justify-start-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'justify-start-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct justify content end classes', () => {
        const cssRules = { justifyContent: 'flex-end' };
        const expectedCSS = {
            'justify-end': cssRules,
            'justify-end-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'justify-end-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'justify-end-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct justify content center classes', () => {
        const cssRules = { justifyContent: 'center' };
        const expectedCSS = {
            'justify-center': cssRules,
            'justify-center-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'justify-center-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'justify-center-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct justify content space between classes', () => {
        const cssRules = { justifyContent: 'space-between' };
        const expectedCSS = {
            'justify-between': cssRules,
            'justify-between-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'justify-between-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'justify-between-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct justify content space around classes', () => {
        const cssRules = { justifyContent: 'space-around' };
        const expectedCSS = {
            'justify-around': cssRules,
            'justify-around-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'justify-around-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'justify-around-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct align content start classes', () => {
        const cssRules = { alignContent: 'flex-start' };
        const expectedCSS = {
            'content-start': cssRules,
            'content-start-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'content-start-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'content-start-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct align content end classes', () => {
        const cssRules = { alignContent: 'flex-end' };
        const expectedCSS = {
            'content-end': cssRules,
            'content-end-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'content-end-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'content-end-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct align content center classes', () => {
        const cssRules = { alignContent: 'center' };
        const expectedCSS = {
            'content-center': cssRules,
            'content-center-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'content-center-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'content-center-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct align content space between classes', () => {
        const cssRules = { alignContent: 'space-between' };
        const expectedCSS = {
            'content-between': cssRules,
            'content-between-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'content-between-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'content-between-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct align content space around classes', () => {
        const cssRules = { alignContent: 'space-around' };
        const expectedCSS = {
            'content-around': cssRules,
            'content-around-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'content-around-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'content-around-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct align content stretch classes', () => {
        const cssRules = { alignContent: 'stretch' };
        const expectedCSS = {
            'content-stretch': cssRules,
            'content-stretch-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'content-stretch-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'content-stretch-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct order 0 classes', () => {
        const cssRules = { order: 0 };
        const expectedCSS = {
            'order-0': cssRules,
            'order-0-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'order-0-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'order-0-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct order 1 classes', () => {
        const cssRules = { order: 1 };
        const expectedCSS = {
            'order-1': cssRules,
            'order-1-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'order-1-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'order-1-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct order 2 classes', () => {
        const cssRules = { order: 2 };
        const expectedCSS = {
            'order-2': cssRules,
            'order-2-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'order-2-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'order-2-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct order 3 classes', () => {
        const cssRules = { order: 3 };
        const expectedCSS = {
            'order-3': cssRules,
            'order-3-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'order-3-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'order-3-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct order 4 classes', () => {
        const cssRules = { order: 4 };
        const expectedCSS = {
            'order-4': cssRules,
            'order-4-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'order-4-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'order-4-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct order 5 classes', () => {
        const cssRules = { order: 5 };
        const expectedCSS = {
            'order-5': cssRules,
            'order-5-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'order-5-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'order-5-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct order 6 classes', () => {
        const cssRules = { order: 6 };
        const expectedCSS = {
            'order-6': cssRules,
            'order-6-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'order-6-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'order-6-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct order 7 classes', () => {
        const cssRules = { order: 7 };
        const expectedCSS = {
            'order-7': cssRules,
            'order-7-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'order-7-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'order-7-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct order 8 classes', () => {
        const cssRules = { order: 8 };
        const expectedCSS = {
            'order-8': cssRules,
            'order-8-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'order-8-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'order-8-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct order last classes', () => {
        const cssRules = { order: 99999 };
        const expectedCSS = {
            'order-last': cssRules,
            'order-last-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'order-last-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'order-last-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct flex grow 0 classes', () => {
        const cssRules = { flexGrow: 0 };
        const expectedCSS = {
            'flex-grow-0': cssRules,
            'flex-grow-0-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'flex-grow-0-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'flex-grow-0-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct flex grow 1 classes', () => {
        const cssRules = { flexGrow: 1 };
        const expectedCSS = {
            'flex-grow-1': cssRules,
            'flex-grow-1-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'flex-grow-1-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'flex-grow-1-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct flex shrink 0 classes', () => {
        const cssRules = { flexShrink: 0 };
        const expectedCSS = {
            'flex-shrink-0': cssRules,
            'flex-shrink-0-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'flex-shrink-0-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'flex-shrink-0-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
    it('should contain the correct flex shrink 1 classes', () => {
        const cssRules = { flexShrink: 1 };
        const expectedCSS = {
            'flex-shrink-1': cssRules,
            'flex-shrink-1-ns': {
                '@media only screen and (min-width: 30em)': cssRules
            },
            'flex-shrink-1-m': {
                '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
            },
            'flex-shrink-1-l': {
                '@media only screen and (min-width: 60em)': cssRules
            }
        };
        expect(aphroditeTachyons).toEqual(expect.objectContaining(expectedCSS));
    });
});
