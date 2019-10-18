export default (...classes) => {
    const whitespace = /\s+/g;
    const validClasses = classes.filter(className =>
        className ? className : ''
    );
    return validClasses
        .join(' ')
        .replace(whitespace, ' ')
        .trim();
};
