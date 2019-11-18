import { createResponsiveClasses } from '../src/utils';

describe('The createResponsiveClasses function', () => {
    const cssRules = { display: 'block' };
    const baseStyles = { db: cssRules };
    const responsiveClasses = createResponsiveClasses(baseStyles);
    it('should return an object containing the passed styles', () => {
        expect(responsiveClasses).toEqual(expect.objectContaining(baseStyles));
    });
    it('should return an object containing a key with the suffix "-ns" which contians a media query with the original CSS rules', () => {
        expect(responsiveClasses).toEqual(
            expect.objectContaining({
                'db-ns': {
                    '@media only screen and (min-width: 30em)': cssRules
                }
            })
        );
    });
    it('should return an object containing a key with the suffix "-m" which contians a media query with the original CSS rules', () => {
        expect(responsiveClasses).toEqual(
            expect.objectContaining({
                'db-m': {
                    '@media only screen and (min-width: 30em) and (max-width: 60em)': cssRules
                }
            })
        );
    });
    it('should return an object containing a key with the suffix "-l" which contians a media query with the original CSS rules', () => {
        expect(responsiveClasses).toEqual(
            expect.objectContaining({
                'db-l': {
                    '@media only screen and (min-width: 60em)': cssRules
                }
            })
        );
    });
    describe('when more than one argument is passed', () => {
        it('should return the suffixed classes for each argument', () => {
            const responsiveClasses = createResponsiveClasses(
                { db: { display: 'block' } },
                { dib: { display: 'inline-block' } }
            );
            expect(responsiveClasses['db']).toBeDefined();
            expect(responsiveClasses['db-ns']).toBeDefined();
            expect(responsiveClasses['db-m']).toBeDefined();
            expect(responsiveClasses['db-l']).toBeDefined();
            expect(responsiveClasses['dib']).toBeDefined();
            expect(responsiveClasses['dib-ns']).toBeDefined();
            expect(responsiveClasses['dib-m']).toBeDefined();
            expect(responsiveClasses['dib-l']).toBeDefined();
        });
    });
});
