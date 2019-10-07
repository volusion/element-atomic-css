export const createResponsiveClasses = (cssObj = { yourClassName: {} }) => {
    const className = Object.keys(cssObj)[0];
    const responsiveClasses = {};
    const passedCss = cssObj[className];
    if (passedCss) {
        responsiveClasses[className] = passedCss;
        const notSmallClassName = `${className}-ns`;
        const notSmallBreakpoint = '@media only screen and (min-width: 30em)';
        const mediumClassName = `${className}-m`;
        const mediumBreakpoint =
            '@media only screen and (min-width: 30em) and (max-width: 60em)';
        const largeClassName = `${className}-l`;
        const largeBreakpoint = '@media only screen and (min-width: 60em)';
        responsiveClasses[notSmallClassName] = {};
        responsiveClasses[notSmallClassName][notSmallBreakpoint] = passedCss;
        responsiveClasses[mediumClassName] = {};
        responsiveClasses[mediumClassName][mediumBreakpoint] = passedCss;
        responsiveClasses[largeClassName] = {};
        responsiveClasses[largeClassName][largeBreakpoint] = passedCss;
        return responsiveClasses;
    }
};
