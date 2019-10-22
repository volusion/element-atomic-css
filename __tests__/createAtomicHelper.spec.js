import { StyleSheetTestUtils } from 'aphrodite';
import { createAtomicHelper } from '../src';
import { StyleSheet, css } from 'aphrodite';
import atomicObj from '../src';

describe('The atomic function', () => {
    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    });
    const atomicStyles = StyleSheet.create(atomicObj);
    const atomic = createAtomicHelper({ atomicStyles, css });
    describe('when there are spaces at the beginning/end of the atomic classes string', () => {
        it('should not throw warnings', () => {
            const warn = jest.spyOn(global.console, 'warn');
            atomic('  absolute  ');
            expect(warn).not.toHaveBeenCalled();
        });
    });
    it('should execute the aphrodite css function on every argument', () => {
        const aphroditeSuffix = '_\\S+';
        const aphroditeClassList = new RegExp(
            `absolute${aphroditeSuffix} db${aphroditeSuffix}`
        );
        expect(atomic('absolute db')).toMatch(aphroditeClassList);
    });
});
