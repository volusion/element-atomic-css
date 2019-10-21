import { StyleSheetTestUtils } from 'aphrodite';
import { atomic as createCssHelper } from '../src/utils';
import { StyleSheet, css } from 'aphrodite';
import atomicObj from '../src';

describe('The atomic function', () => {
    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    });
    it('should execute the aphrodite css function on every argument', () => {
        const atomicStyles = StyleSheet.create(atomicObj);
        const atomic = createCssHelper({ atomicStyles, css });
        const aphroditeSuffix = '_\\S+';
        const aphroditeClassList = new RegExp(
            `absolute${aphroditeSuffix} db${aphroditeSuffix}`
        );
        expect(atomic('absolute db')).toMatch(aphroditeClassList);
    });
});
