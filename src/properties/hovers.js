const dim = {
    dim: {
        opacity: 1,
        transition: 'opacity .15s ease-in',
        ':hover': { opacity: 0.5, transition: 'opacity .15s ease-in' },
        ':focus': { opacity: 0.5, transition: 'opacity .15s ease-in' },
        ':active': { opacity: 0.8, transition: 'opacity .15s ease-out' }
    }
};

const hideChildTransition = { transition: 'opacity .15s ease-in' };
const hideChild = {
    'hide-child': {
        child: { opacity: 0, ...hideChildTransition },
        ':hover': {
            child: { opacity: 1, ...hideChildTransition }
        },
        ':focus': {
            child: { opacity: 1, ...hideChildTransition }
        },
        ':active': {
            child: { opacity: 1, ...hideChildTransition }
        }
    }
};

const underlineTextDecoration = { 'text-decoration': 'underline' };
const underlineHover = {
    'underline-hover': {
        ':hover': underlineTextDecoration,
        ':focus': underlineTextDecoration
    }
};

const getGrowCss = (scaleLarge = 1.05, scaleSmall = 0.9) => ({
    '-moz-osx-font-smoothing': 'grayscale',
    transform: 'translateZ(0)',
    transition: 'transform .25s ease-out',
    ':hover': {
        transform: `scale(${scaleLarge})`
    },
    ':focus': {
        transform: `scale(${scaleLarge})`
    },
    ':active': {
        transform: `scale(${scaleSmall})`
    }
});

const grow = {
    grow: getGrowCss(1.05, 0.9)
};

const growLarge = {
    'grow-large': getGrowCss(1.2, 0.95)
};

const pointer = { pointer: { ':hover': { cursor: 'pointer' } } };

const shadowHover = {
    'shadow-hover': {
        '::after': {
            'box-shadow': '0 0 8px 2px rgba( 0, 0, 0, .2 )',
            opacity: 0,
            transition: 'opacity .25s ease-in-out'
        },
        ':hover::after': { opacity: 1 },
        ':focus::after': { opacity: 1 }
    }
};

const bgAnimateTransition = { transition: 'background-color .15s ease-in-out' };
const bgAnimate = {
    'bg-animate': {
        ...bgAnimateTransition,
        ':hover': bgAnimateTransition,
        ':focus': bgAnimateTransition
    }
};

export const hovers = {
    ...dim,
    ...hideChild,
    ...underlineHover,
    ...grow,
    ...growLarge,
    ...pointer,
    ...shadowHover,
    ...bgAnimate
};
