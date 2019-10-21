export default (cssObj = { yourClassName: {} }) => {
    const className = Object.keys(cssObj)[0];
    const passedCss = cssObj[className];
    if (passedCss) {
        const breakpoint = {
            ns: {
                suffix: '-ns',
                mediaRule: '@media only screen and (min-width: 30em)'
            },
            m: {
                suffix: '-m',
                mediaRule:
                    '@media only screen and (min-width: 30em) and (max-width: 60em)'
            },
            l: {
                suffix: '-l',
                mediaRule: '@media only screen and (min-width: 60em)'
            }
        };
        const responsiveClasses = {};
        responsiveClasses[className] = passedCss;
        const notSmallClassName = className + breakpoint.ns.suffix;
        responsiveClasses[notSmallClassName] = {};
        responsiveClasses[notSmallClassName][
            breakpoint.ns.mediaRule
        ] = passedCss;
        const mediumClassName = className + breakpoint.m.suffix;
        responsiveClasses[mediumClassName] = {};
        responsiveClasses[mediumClassName][breakpoint.m.mediaRule] = passedCss;
        const largeClassName = className + breakpoint.l.suffix;
        responsiveClasses[largeClassName] = {};
        responsiveClasses[largeClassName][breakpoint.l.mediaRule] = passedCss;
        return responsiveClasses;
    }
};
