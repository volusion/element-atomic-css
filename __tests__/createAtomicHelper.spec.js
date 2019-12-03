import { StyleSheetTestUtils } from 'aphrodite';
import { createAtomicHelper } from '../src';
import { StyleSheet, css } from 'aphrodite';
import atomicObj from '../src';

describe('The atomic function', () => {
    console.warn = jest.fn();
    const aphroditeSuffix = '_[a-zA-Z0-9]+';
    const aphroditeJoiner = '-o_O-';
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
    describe('when a single atomic class is requested', () => {
        it('should return the aphrodite class', () => {
            const validClass = new RegExp(`^absolute${aphroditeSuffix}$`);
            expect(atomic('absolute')).toMatch(validClass);
        });
    });
    describe('when a single invalid class is requested', () => {
        it('should return undefined', () => {
            expect(atomic('FAKE_CLASS')).toBeUndefined();
        });
    });
    describe('when multiple classes are requested', () => {
        const mergedClass = new RegExp(
            `^absolute${aphroditeSuffix + aphroditeJoiner}db${aphroditeSuffix}$`
        );
        it('should merge the atomic classes into one aphrodite class', () => {
            expect(atomic('absolute db')).toMatch(mergedClass);
        });
        describe('when an invalid class is requested', () => {
            const getWithInvalidClass = () => atomic('absolute FAKE_CLASS db');
            it('should exclude the invalid class from the output', () => {
                expect(getWithInvalidClass()).toMatch(mergedClass);
            });
            it('should log a warning', () => {
                getWithInvalidClass();
                expect(console.warn).toHaveBeenCalled();
            });
        });
    });
});
