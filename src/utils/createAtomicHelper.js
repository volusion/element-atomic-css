export default ({ atomicStyles, css }) => atomicClasses => {
    const whitespace = /\s+/g;
    const splitClasses = atomicClasses
        .trim()
        .split(whitespace)
        .map(className => {
            if (!atomicStyles[className]) {
                return console.warn(
                    `"${className}" is not a valid atomic class. Please check the docs.`
                );
            }
            return atomicStyles[className];
        });

    return css(...splitClasses);
};
