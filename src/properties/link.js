const transitionCssRules = { transition: 'color .15s ease-in' };

const classes = {
    link: {
        textDecoration: 'none',
        ...transitionCssRules,
        ':link': transitionCssRules,
        ':visited': transitionCssRules,
        ':hover': transitionCssRules,
        ':active': transitionCssRules,
        ':focus': transitionCssRules
    }
};

export default classes;
