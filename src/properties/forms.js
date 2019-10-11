const resetCss = { '::-moz-focus-inner': { border: 0, padding: 0 } };
export const forms = {
    'input-reset': {
        '-webkit-appearance': 'none',
        '-moz-appearance': 'none',
        ...resetCss
    },
    'button-reset': resetCss
};
