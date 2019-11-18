export default (...args) => {
    const responsiveClasses = {};
    const classes = [...args];
    classes.forEach(styles => {
        const className = Object.keys(styles)[0];
        const css = styles[className];
        if (css) {
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
            responsiveClasses[className] = css;
            const notSmallClassName = className + breakpoint.ns.suffix;
            responsiveClasses[notSmallClassName] = {};
            responsiveClasses[notSmallClassName][breakpoint.ns.mediaRule] = css;
            const mediumClassName = className + breakpoint.m.suffix;
            responsiveClasses[mediumClassName] = {};
            responsiveClasses[mediumClassName][breakpoint.m.mediaRule] = css;
            const largeClassName = className + breakpoint.l.suffix;
            responsiveClasses[largeClassName] = {};
            responsiveClasses[largeClassName][breakpoint.l.mediaRule] = css;
        }
    });
    return responsiveClasses;
};
