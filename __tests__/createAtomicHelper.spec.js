import { StyleSheetTestUtils } from 'aphrodite';
import { createAtomicHelper } from '../src';
import { StyleSheet, css } from 'aphrodite';
import atomicObj from '../src';

describe('The atomic function', () => {
    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    });
    it('should execute the aphrodite css function on every argument', () => {
        const atomicStyles = StyleSheet.create(atomicObj);
        const atomic = createAtomicHelper({ atomicStyles, css });
        const aphroditeSuffix = '_\\S+';
        const aphroditeClassList = new RegExp(
            `absolute${aphroditeSuffix} db${aphroditeSuffix}`
        );
        expect(atomic('absolute db')).toMatch(aphroditeClassList);
    });
});
