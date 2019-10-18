import { joinClasses } from '.';

export default ({ StyleSheet, css, atomicObj }) => atomicClasses => {
    const atomicStyles = StyleSheet.create(atomicObj);
    const whitespace = /\s+/g;
    const atomicClassesArray = atomicClasses
        .split(whitespace)
        .map(className => {
            if (!atomicObj[className]) {
                return console.warn(
                    `"${className}" is not a valid atomic class. Please check the docs.`
                );
            }
            return css(atomicStyles[className]);
        });
    return joinClasses(...atomicClassesArray);
};
