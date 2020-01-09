import { joinClasses } from '../src/utils/joinClasses';

describe('The joinClasses function', () => {
    it('should create a string joining all passed arguments', () => {
        expect(joinClasses('classA', 'classB', 'classC')).toBe(
            'classA classB classC'
        );
    });
    describe('when there is empty spaces at the beginning or end as a result of the passed arguments', () => {
        it('should trim the empty spaces away', () => {
            expect(joinClasses(' ', 'classA', 'classB', ' ')).toBe(
                'classA classB'
            );
        });
    });
    describe('when an argument is not a valid value', () => {
        it('should not include the argument in the returned string', () => {
            expect(
                joinClasses(null, 'classA', '', 'classB', undefined, false)
            ).toBe('classA classB');
        });
    });
    describe('when no arugment is passed', () => {
        it('should return an empty string', () => {
            expect(joinClasses()).toBe('');
        });
    });
});
