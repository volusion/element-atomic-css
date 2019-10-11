const resetCss = { '::-moz-focus-inner': { border: 0, padding: 0 } };
const classes = {
    'input-reset': {
        '-webkit-appearance': 'none',
        '-moz-appearance': 'none',
        ...resetCss
    },
    'button-reset': resetCss
};

export default classes;
