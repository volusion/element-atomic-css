function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var createResponsiveClasses = (function () {
  var cssObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    yourClassName: {}
  };
  var className = Object.keys(cssObj)[0];
  var passedCss = cssObj[className];

  if (passedCss) {
    var breakpoint = {
      ns: {
        suffix: '-ns',
        mediaRule: '@media only screen and (min-width: 30em)'
      },
      m: {
        suffix: '-m',
        mediaRule: '@media only screen and (min-width: 30em) and (max-width: 60em)'
      },
      l: {
        suffix: '-l',
        mediaRule: '@media only screen and (min-width: 60em)'
      }
    };
    var responsiveClasses = {};
    responsiveClasses[className] = passedCss;
    var notSmallClassName = className + breakpoint.ns.suffix;
    responsiveClasses[notSmallClassName] = {};
    responsiveClasses[notSmallClassName][breakpoint.ns.mediaRule] = passedCss;
    var mediumClassName = className + breakpoint.m.suffix;
    responsiveClasses[mediumClassName] = {};
    responsiveClasses[mediumClassName][breakpoint.m.mediaRule] = passedCss;
    var largeClassName = className + breakpoint.l.suffix;
    responsiveClasses[largeClassName] = {};
    responsiveClasses[largeClassName][breakpoint.l.mediaRule] = passedCss;
    return responsiveClasses;
  }
});

var classes = _objectSpread2({}, createResponsiveClasses({
  'aspect-ratio': {
    height: 0,
    position: 'relative'
  }
}), {}, createResponsiveClasses({
  'aspect-ratio--16x9': {
    paddingBottom: '56.25%'
  }
}), {}, createResponsiveClasses({
  'aspect-ratio--9x16': {
    paddingBottom: '177.77%'
  }
}), {}, createResponsiveClasses({
  'aspect-ratio--4x3': {
    paddingBottom: '75%'
  }
}), {}, createResponsiveClasses({
  'aspect-ratio--3x4': {
    paddingBottom: '133.33%'
  }
}), {}, createResponsiveClasses({
  'aspect-ratio--6x4': {
    paddingBottom: '66.6%'
  }
}), {}, createResponsiveClasses({
  'aspect-ratio--4x6': {
    paddingBottom: '150%'
  }
}), {}, createResponsiveClasses({
  'aspect-ratio--8x5': {
    paddingBottom: '62.5%'
  }
}), {}, createResponsiveClasses({
  'aspect-ratio--5x8': {
    paddingBottom: '160%'
  }
}), {}, createResponsiveClasses({
  'aspect-ratio--7x5': {
    paddingBottom: '71.42%'
  }
}), {}, createResponsiveClasses({
  'aspect-ratio--5x7': {
    paddingBottom: '140%'
  }
}), {}, createResponsiveClasses({
  'aspect-ratio--1x1': {
    paddingBottom: '100%'
  }
}), {}, createResponsiveClasses({
  'aspect-ratio--object': {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 100
  }
}));

var classes$1 = _objectSpread2({}, createResponsiveClasses({
  br0: {
    borderRadius: 0
  }
}), {}, createResponsiveClasses({
  br1: {
    borderRadius: '.125rem'
  }
}), {}, createResponsiveClasses({
  br2: {
    borderRadius: '.25rem'
  }
}), {}, createResponsiveClasses({
  br3: {
    borderRadius: '.5rem'
  }
}), {}, createResponsiveClasses({
  br4: {
    borderRadius: '1rem'
  }
}), {}, createResponsiveClasses({
  br100: {
    borderRadius: '100%'
  }
}), {}, createResponsiveClasses({
  brPill: {
    borderRadius: '9999px'
  }
}), {}, createResponsiveClasses({
  'br--bottom': {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  }
}), {}, createResponsiveClasses({
  'br--top': {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  }
}), {}, createResponsiveClasses({
  'br--right': {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  }
}), {}, createResponsiveClasses({
  'br--left': {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  }
}));

var classes$2 = _objectSpread2({}, createResponsiveClasses({
  ba: {
    borderStyle: 'solid',
    borderWidth: '1px'
  }
}), {}, createResponsiveClasses({
  bt: {
    borderTopStyle: 'solid',
    borderTopWidth: '1px'
  }
}), {}, createResponsiveClasses({
  br: {
    borderRightStyle: 'solid',
    borderRightWidth: '1px'
  }
}), {}, createResponsiveClasses({
  bb: {
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px'
  }
}), {}, createResponsiveClasses({
  bl: {
    borderLeftStyle: 'solid',
    borderLeftWidth: '1px'
  }
}), {}, createResponsiveClasses({
  bn: {
    borderStyle: 'none',
    borderWidth: 0
  }
}));

var classes$3 = _objectSpread2({}, createResponsiveClasses({
  'shadow-1': {
    boxShadow: '0 0 4px 2px rgba( 0, 0, 0, .2 )'
  }
}), {}, createResponsiveClasses({
  'shadow-2': {
    boxShadow: '0 0 8px 2px rgba( 0, 0, 0, .2 )'
  }
}), {}, createResponsiveClasses({
  'shadow-3': {
    boxShadow: '2px 2px 4px 2px rgba( 0, 0, 0, .2 )'
  }
}), {}, createResponsiveClasses({
  'shadow-4': {
    boxShadow: '2px 2px 8px 0 rgba( 0, 0, 0, .2 )'
  }
}), {}, createResponsiveClasses({
  'shadow-5': {
    boxShadow: '4px 4px 8px 0 rgba( 0, 0, 0, .2 )'
  }
}));

var classes$4 = {
  'border-box': {
    boxSizing: 'border-box'
  }
};

var classes$5 = _objectSpread2({}, createResponsiveClasses({
  'top-0': {
    top: 0
  }
}), {}, createResponsiveClasses({
  'right-0': {
    right: 0
  }
}), {}, createResponsiveClasses({
  'bottom-0': {
    bottom: 0
  }
}), {}, createResponsiveClasses({
  'left-0': {
    left: 0
  }
}), {}, createResponsiveClasses({
  'top-1': {
    top: '1rem'
  }
}), {}, createResponsiveClasses({
  'right-1': {
    right: '1rem'
  }
}), {}, createResponsiveClasses({
  'bottom-1': {
    bottom: '1rem'
  }
}), {}, createResponsiveClasses({
  'left-1': {
    left: '1rem'
  }
}), {}, createResponsiveClasses({
  'top-2': {
    top: '2rem'
  }
}), {}, createResponsiveClasses({
  'right-2': {
    right: '2rem'
  }
}), {}, createResponsiveClasses({
  'bottom-2': {
    bottom: '2rem'
  }
}), {}, createResponsiveClasses({
  'left-2': {
    left: '2rem'
  }
}), {}, createResponsiveClasses({
  'top--1': {
    top: '-1rem'
  }
}), {}, createResponsiveClasses({
  'right--1': {
    right: '-1rem'
  }
}), {}, createResponsiveClasses({
  'bottom--1': {
    bottom: '-1rem'
  }
}), {}, createResponsiveClasses({
  'left--1': {
    left: '-1rem'
  }
}), {}, createResponsiveClasses({
  'top--2': {
    top: '-2rem'
  }
}), {}, createResponsiveClasses({
  'right--2': {
    right: '-2rem'
  }
}), {}, createResponsiveClasses({
  'bottom--2': {
    bottom: '-2rem'
  }
}), {}, createResponsiveClasses({
  'left--2': {
    left: '-2rem'
  }
}), {}, createResponsiveClasses({
  'absolute--fill': {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
}));

var classes$6 = _objectSpread2({}, createResponsiveClasses({
  dn: {
    display: 'none'
  }
}), {}, createResponsiveClasses({
  di: {
    display: 'inline'
  }
}), {}, createResponsiveClasses({
  db: {
    display: 'block'
  }
}), {}, createResponsiveClasses({
  dib: {
    display: 'inline-block'
  }
}), {}, createResponsiveClasses({
  dit: {
    display: 'inline-table'
  }
}), {}, createResponsiveClasses({
  dt: {
    display: 'table'
  }
}), {}, createResponsiveClasses({
  dtc: {
    display: 'table-cell'
  }
}), {}, createResponsiveClasses({
  'dt-row': {
    display: 'table-row'
  }
}), {}, createResponsiveClasses({
  'dt-row-group': {
    display: 'table-row-group'
  }
}), {}, createResponsiveClasses({
  'dt-column': {
    display: 'table-column'
  }
}), {}, createResponsiveClasses({
  'dt-column-group': {
    display: 'table-column-group'
  }
}), {}, createResponsiveClasses({
  'dt--fixed': {
    display: 'fixed',
    width: '100%'
  }
}));

var classes$7 = _objectSpread2({}, createResponsiveClasses({
  flex: {
    display: 'flex'
  }
}), {}, createResponsiveClasses({
  'inline-flex': {
    display: 'inline-flex'
  }
}), {}, createResponsiveClasses({
  'flex-auto': {
    flex: '1 1 auto',
    minWidth: 0,
    minHeight: 0
  }
}), {}, createResponsiveClasses({
  'flex-none': {
    flex: 'none'
  }
}), {}, createResponsiveClasses({
  'flex-column': {
    flexDirection: 'column'
  }
}), {}, createResponsiveClasses({
  'flex-row': {
    flexDirection: 'row'
  }
}), {}, createResponsiveClasses({
  'flex-wrap': {
    flexWrap: 'wrap'
  }
}), {}, createResponsiveClasses({
  'flex-nowrap': {
    flexWrap: 'nowrap'
  }
}), {}, createResponsiveClasses({
  'flex-wrap-reverse': {
    flexWrap: 'wrap-reverse'
  }
}), {}, createResponsiveClasses({
  'flex-column-reverse': {
    flexDirection: 'column-reverse'
  }
}), {}, createResponsiveClasses({
  'flex-row-reverse': {
    flexDirection: 'row-reverse'
  }
}), {}, createResponsiveClasses({
  'items-start': {
    alignItems: 'flex-start'
  }
}), {}, createResponsiveClasses({
  'items-end': {
    alignItems: 'flex-end'
  }
}), {}, createResponsiveClasses({
  'items-center': {
    alignItems: 'center'
  }
}), {}, createResponsiveClasses({
  'items-baseline': {
    alignItems: 'baseline'
  }
}), {}, createResponsiveClasses({
  'items-stretch': {
    alignItems: 'stretch'
  }
}), {}, createResponsiveClasses({
  'self-start': {
    alignSelf: 'flex-start'
  }
}), {}, createResponsiveClasses({
  'self-end': {
    alignSelf: 'flex-end'
  }
}), {}, createResponsiveClasses({
  'self-center': {
    alignSelf: 'center'
  }
}), {}, createResponsiveClasses({
  'self-baseline': {
    alignSelf: 'baseline'
  }
}), {}, createResponsiveClasses({
  'self-stretch': {
    alignSelf: 'stretch'
  }
}), {}, createResponsiveClasses({
  'justify-start': {
    justifyContent: 'flex-start'
  }
}), {}, createResponsiveClasses({
  'justify-end': {
    justifyContent: 'flex-end'
  }
}), {}, createResponsiveClasses({
  'justify-center': {
    justifyContent: 'center'
  }
}), {}, createResponsiveClasses({
  'justify-between': {
    justifyContent: 'space-between'
  }
}), {}, createResponsiveClasses({
  'justify-around': {
    justifyContent: 'space-around'
  }
}), {}, createResponsiveClasses({
  'content-start': {
    alignContent: 'flex-start'
  }
}), {}, createResponsiveClasses({
  'content-end': {
    alignContent: 'flex-end'
  }
}), {}, createResponsiveClasses({
  'content-center': {
    alignContent: 'center'
  }
}), {}, createResponsiveClasses({
  'content-between': {
    alignContent: 'space-between'
  }
}), {}, createResponsiveClasses({
  'content-around': {
    alignContent: 'space-around'
  }
}), {}, createResponsiveClasses({
  'content-stretch': {
    alignContent: 'stretch'
  }
}), {}, createResponsiveClasses({
  'order-0': {
    order: 0
  }
}), {}, createResponsiveClasses({
  'order-1': {
    order: 1
  }
}), {}, createResponsiveClasses({
  'order-2': {
    order: 2
  }
}), {}, createResponsiveClasses({
  'order-3': {
    order: 3
  }
}), {}, createResponsiveClasses({
  'order-4': {
    order: 4
  }
}), {}, createResponsiveClasses({
  'order-5': {
    order: 5
  }
}), {}, createResponsiveClasses({
  'order-6': {
    order: 6
  }
}), {}, createResponsiveClasses({
  'order-7': {
    order: 7
  }
}), {}, createResponsiveClasses({
  'order-8': {
    order: 8
  }
}), {}, createResponsiveClasses({
  'order-last': {
    order: 99999
  }
}), {}, createResponsiveClasses({
  'flex-grow-0': {
    flexGrow: 0
  }
}), {}, createResponsiveClasses({
  'flex-grow-1': {
    flexGrow: 1
  }
}), {}, createResponsiveClasses({
  'flex-shrink-0': {
    flexShrink: 0
  }
}), {}, createResponsiveClasses({
  'flex-shrink-1': {
    flexShrink: 1
  }
}));

var resetCss = {
  '::-moz-focus-inner': {
    border: 0,
    padding: 0
  }
};
var classes$8 = {
  'input-reset': _objectSpread2({
    '-webkit-appearance': 'none',
    '-moz-appearance': 'none'
  }, resetCss),
  'button-reset': resetCss
};

var classes$9 = _objectSpread2({}, createResponsiveClasses({
  h1: {
    height: '1rem'
  }
}), {}, createResponsiveClasses({
  h2: {
    height: '2rem'
  }
}), {}, createResponsiveClasses({
  h3: {
    height: '4rem'
  }
}), {}, createResponsiveClasses({
  h4: {
    height: '8rem'
  }
}), {}, createResponsiveClasses({
  h5: {
    height: '16rem'
  }
}), {}, createResponsiveClasses({
  'h-25': {
    height: '25%'
  }
}), {}, createResponsiveClasses({
  'h-50': {
    height: '50%'
  }
}), {}, createResponsiveClasses({
  'h-75': {
    height: '75%'
  }
}), {}, createResponsiveClasses({
  'h-100': {
    height: '100%'
  }
}), {}, createResponsiveClasses({
  'min-h-100': {
    minHeight: '100%'
  }
}), {}, createResponsiveClasses({
  'vh-25': {
    height: '25vh'
  }
}), {}, createResponsiveClasses({
  'vh-50': {
    height: '50vh'
  }
}), {}, createResponsiveClasses({
  'vh-75': {
    height: '75vh'
  }
}), {}, createResponsiveClasses({
  'vh-100': {
    height: '100vh'
  }
}), {}, createResponsiveClasses({
  'min-vh-100': {
    minHeight: '100vh'
  }
}), {}, createResponsiveClasses({
  'h-auto': {
    height: 'auto'
  }
}), {}, createResponsiveClasses({
  'h-inherit': {
    height: 'inherit'
  }
}));

var classes$a = _objectSpread2({}, createResponsiveClasses({
  tracked: {
    letterSpacing: '.1em'
  }
}), {}, createResponsiveClasses({
  'tracked-tight': {
    letterSpacing: '-.05em'
  }
}), {}, createResponsiveClasses({
  'tracked-mega': {
    letterSpacing: '.25em'
  }
}));

var classes$b = _objectSpread2({}, createResponsiveClasses({
  'lh-solid': {
    lineHeight: 1
  }
}), {}, createResponsiveClasses({
  'lh-title': {
    lineHeight: 1.25
  }
}), {}, createResponsiveClasses({
  'lh-copy': {
    lineHeight: 1.5
  }
}));

var classes$c = {
  list: {
    listStyleType: 'none'
  }
};

var classes$d = _objectSpread2({}, createResponsiveClasses({
  'mw-100': {
    maxWidth: '100%'
  }
}), {}, createResponsiveClasses({
  mw1: {
    maxWidth: '1rem'
  }
}), {}, createResponsiveClasses({
  mw2: {
    maxWidth: '2rem'
  }
}), {}, createResponsiveClasses({
  mw3: {
    maxWidth: '4rem'
  }
}), {}, createResponsiveClasses({
  mw4: {
    maxWidth: '8rem'
  }
}), {}, createResponsiveClasses({
  mw5: {
    maxWidth: '16rem'
  }
}), {}, createResponsiveClasses({
  mw6: {
    maxWidth: '32rem'
  }
}), {}, createResponsiveClasses({
  mw7: {
    maxWidth: '48rem'
  }
}), {}, createResponsiveClasses({
  mw8: {
    maxWidth: '64rem'
  }
}), {}, createResponsiveClasses({
  mw9: {
    maxWidth: '96rem'
  }
}), {}, createResponsiveClasses({
  'mw-none': {
    maxWidth: 'none'
  }
}));

var classes$e = _objectSpread2({}, createResponsiveClasses({
  outline: {
    outline: '1px solid'
  }
}), {}, createResponsiveClasses({
  'outline-transparent': {
    outline: '1px solid transparent'
  }
}), {}, createResponsiveClasses({
  'outline-0': {
    outline: 0
  }
}));

var classes$f = _objectSpread2({}, createResponsiveClasses({
  'overflow-visible': {
    overflow: 'visible'
  }
}), {}, createResponsiveClasses({
  'overflow-hidden': {
    overflow: 'hidden'
  }
}), {}, createResponsiveClasses({
  'overflow-scroll': {
    overflow: 'scroll'
  }
}), {}, createResponsiveClasses({
  'overflow-auto': {
    overflow: 'auto'
  }
}), {}, createResponsiveClasses({
  'overflow-x-visible': {
    overflowX: 'visible'
  }
}), {}, createResponsiveClasses({
  'overflow-x-hidden': {
    overflowX: 'hidden'
  }
}), {}, createResponsiveClasses({
  'overflow-x-scroll': {
    overflowX: 'scroll'
  }
}), {}, createResponsiveClasses({
  'overflow-x-auto': {
    overflowX: 'auto'
  }
}), {}, createResponsiveClasses({
  'overflow-y-visible': {
    overflowY: 'visible'
  }
}), {}, createResponsiveClasses({
  'overflow-y-hidden': {
    overflowY: 'hidden'
  }
}), {}, createResponsiveClasses({
  'overflow-y-scroll': {
    overflowY: 'scroll'
  }
}), {}, createResponsiveClasses({
  'overflow-y-auto': {
    overflowY: 'auto'
  }
}));

var classes$g = _objectSpread2({}, createResponsiveClasses({
  "static": {
    position: 'static'
  }
}), {}, createResponsiveClasses({
  relative: {
    position: 'relative'
  }
}), {}, createResponsiveClasses({
  absolute: {
    position: 'absolute'
  }
}), {}, createResponsiveClasses({
  fixed: {
    position: 'fixed'
  }
}));

var classes$h = _objectSpread2({}, createResponsiveClasses({
  'rotate-45': {
    transform: 'rotate(45deg)'
  }
}), {}, createResponsiveClasses({
  'rotate-90': {
    transform: 'rotate(90deg)'
  }
}), {}, createResponsiveClasses({
  'rotate-135': {
    transform: 'rotate(135deg)'
  }
}), {}, createResponsiveClasses({
  'rotate-180': {
    transform: 'rotate(180deg)'
  }
}), {}, createResponsiveClasses({
  'rotate-225': {
    transform: 'rotate(225deg)'
  }
}), {}, createResponsiveClasses({
  'rotate-270': {
    transform: 'rotate(270deg)'
  }
}), {}, createResponsiveClasses({
  'rotate-315': {
    transform: 'rotate(315deg)'
  }
}));

var classes$i = _objectSpread2({}, createResponsiveClasses({
  pa0: {
    padding: 0
  }
}), {}, createResponsiveClasses({
  pa1: {
    padding: '.25rem'
  }
}), {}, createResponsiveClasses({
  pa2: {
    padding: '.5rem'
  }
}), {}, createResponsiveClasses({
  pa3: {
    padding: '1rem'
  }
}), {}, createResponsiveClasses({
  pa4: {
    padding: '2rem'
  }
}), {}, createResponsiveClasses({
  pa5: {
    padding: '4rem'
  }
}), {}, createResponsiveClasses({
  pa6: {
    padding: '8rem'
  }
}), {}, createResponsiveClasses({
  pa7: {
    padding: '16rem'
  }
}), {}, createResponsiveClasses({
  pl0: {
    paddingLeft: 0
  }
}), {}, createResponsiveClasses({
  pl1: {
    paddingLeft: '.25rem'
  }
}), {}, createResponsiveClasses({
  pl2: {
    paddingLeft: '.5rem'
  }
}), {}, createResponsiveClasses({
  pl3: {
    paddingLeft: '1rem'
  }
}), {}, createResponsiveClasses({
  pl4: {
    paddingLeft: '2rem'
  }
}), {}, createResponsiveClasses({
  pl5: {
    paddingLeft: '4rem'
  }
}), {}, createResponsiveClasses({
  pl6: {
    paddingLeft: '8rem'
  }
}), {}, createResponsiveClasses({
  pl7: {
    paddingLeft: '16rem'
  }
}), {}, createResponsiveClasses({
  pr0: {
    paddingRight: 0
  }
}), {}, createResponsiveClasses({
  pr1: {
    paddingRight: '.25rem'
  }
}), {}, createResponsiveClasses({
  pr2: {
    paddingRight: '.5rem'
  }
}), {}, createResponsiveClasses({
  pr3: {
    paddingRight: '1rem'
  }
}), {}, createResponsiveClasses({
  pr4: {
    paddingRight: '2rem'
  }
}), {}, createResponsiveClasses({
  pr5: {
    paddingRight: '4rem'
  }
}), {}, createResponsiveClasses({
  pr6: {
    paddingRight: '8rem'
  }
}), {}, createResponsiveClasses({
  pr7: {
    paddingRight: '16rem'
  }
}), {}, createResponsiveClasses({
  pb0: {
    paddingBottom: 0
  }
}), {}, createResponsiveClasses({
  pb1: {
    paddingBottom: '.25rem'
  }
}), {}, createResponsiveClasses({
  pb2: {
    paddingBottom: '.5rem'
  }
}), {}, createResponsiveClasses({
  pb3: {
    paddingBottom: '1rem'
  }
}), {}, createResponsiveClasses({
  pb4: {
    paddingBottom: '2rem'
  }
}), {}, createResponsiveClasses({
  pb5: {
    paddingBottom: '4rem'
  }
}), {}, createResponsiveClasses({
  pb6: {
    paddingBottom: '8rem'
  }
}), {}, createResponsiveClasses({
  pb7: {
    paddingBottom: '16rem'
  }
}), {}, createResponsiveClasses({
  pt0: {
    paddingTop: 0
  }
}), {}, createResponsiveClasses({
  pt1: {
    paddingTop: '.25rem'
  }
}), {}, createResponsiveClasses({
  pt2: {
    paddingTop: '.5rem'
  }
}), {}, createResponsiveClasses({
  pt3: {
    paddingTop: '1rem'
  }
}), {}, createResponsiveClasses({
  pt4: {
    paddingTop: '2rem'
  }
}), {}, createResponsiveClasses({
  pt5: {
    paddingTop: '4rem'
  }
}), {}, createResponsiveClasses({
  pt6: {
    paddingTop: '8rem'
  }
}), {}, createResponsiveClasses({
  pt7: {
    paddingTop: '16rem'
  }
}), {}, createResponsiveClasses({
  pv0: {
    paddingTop: 0,
    paddingBottom: 0
  }
}), {}, createResponsiveClasses({
  pv1: {
    paddingTop: '.25rem',
    paddingBottom: '.25rem'
  }
}), {}, createResponsiveClasses({
  pv2: {
    paddingTop: '.5rem',
    paddingBottom: '.5rem'
  }
}), {}, createResponsiveClasses({
  pv3: {
    paddingTop: '1rem',
    paddingBottom: '1rem'
  }
}), {}, createResponsiveClasses({
  pv4: {
    paddingTop: '2rem',
    paddingBottom: '2rem'
  }
}), {}, createResponsiveClasses({
  pv5: {
    paddingTop: '4rem',
    paddingBottom: '4rem'
  }
}), {}, createResponsiveClasses({
  pv6: {
    paddingTop: '8rem',
    paddingBottom: '8rem'
  }
}), {}, createResponsiveClasses({
  pv7: {
    paddingTop: '16rem',
    paddingBottom: '16rem'
  }
}), {}, createResponsiveClasses({
  ph0: {
    paddingLeft: 0,
    paddingRight: 0
  }
}), {}, createResponsiveClasses({
  ph1: {
    paddingLeft: '.25rem',
    paddingRight: '.25rem'
  }
}), {}, createResponsiveClasses({
  ph2: {
    paddingLeft: '.5rem',
    paddingRight: '.5rem'
  }
}), {}, createResponsiveClasses({
  ph3: {
    paddingLeft: '1rem',
    paddingRight: '1rem'
  }
}), {}, createResponsiveClasses({
  ph4: {
    paddingLeft: '2rem',
    paddingRight: '2rem'
  }
}), {}, createResponsiveClasses({
  ph5: {
    paddingLeft: '4rem',
    paddingRight: '4rem'
  }
}), {}, createResponsiveClasses({
  ph6: {
    paddingLeft: '8rem',
    paddingRight: '8rem'
  }
}), {}, createResponsiveClasses({
  ph7: {
    paddingLeft: '16rem',
    paddingRight: '16rem'
  }
}), {}, createResponsiveClasses({
  ma0: {
    margin: 0
  }
}), {}, createResponsiveClasses({
  ma1: {
    margin: '.25rem'
  }
}), {}, createResponsiveClasses({
  ma2: {
    margin: '.5rem'
  }
}), {}, createResponsiveClasses({
  ma3: {
    margin: '1rem'
  }
}), {}, createResponsiveClasses({
  ma4: {
    margin: '2rem'
  }
}), {}, createResponsiveClasses({
  ma5: {
    margin: '4rem'
  }
}), {}, createResponsiveClasses({
  ma6: {
    margin: '8rem'
  }
}), {}, createResponsiveClasses({
  ma7: {
    margin: '16rem'
  }
}), {}, createResponsiveClasses({
  ml0: {
    marginLeft: 0
  }
}), {}, createResponsiveClasses({
  ml1: {
    marginLeft: '.25rem'
  }
}), {}, createResponsiveClasses({
  ml2: {
    marginLeft: '.5rem'
  }
}), {}, createResponsiveClasses({
  ml3: {
    marginLeft: '1rem'
  }
}), {}, createResponsiveClasses({
  ml4: {
    marginLeft: '2rem'
  }
}), {}, createResponsiveClasses({
  ml5: {
    marginLeft: '4rem'
  }
}), {}, createResponsiveClasses({
  ml6: {
    marginLeft: '8rem'
  }
}), {}, createResponsiveClasses({
  ml7: {
    marginLeft: '16rem'
  }
}), {}, createResponsiveClasses({
  mr0: {
    marginRight: 0
  }
}), {}, createResponsiveClasses({
  mr1: {
    marginRight: '.25rem'
  }
}), {}, createResponsiveClasses({
  mr2: {
    marginRight: '.5rem'
  }
}), {}, createResponsiveClasses({
  mr3: {
    marginRight: '1rem'
  }
}), {}, createResponsiveClasses({
  mr4: {
    marginRight: '2rem'
  }
}), {}, createResponsiveClasses({
  mr5: {
    marginRight: '4rem'
  }
}), {}, createResponsiveClasses({
  mr6: {
    marginRight: '8rem'
  }
}), {}, createResponsiveClasses({
  mr7: {
    marginRight: '16rem'
  }
}), {}, createResponsiveClasses({
  mb0: {
    marginBottom: 0
  }
}), {}, createResponsiveClasses({
  mb1: {
    marginBottom: '.25rem'
  }
}), {}, createResponsiveClasses({
  mb2: {
    marginBottom: '.5rem'
  }
}), {}, createResponsiveClasses({
  mb3: {
    marginBottom: '1rem'
  }
}), {}, createResponsiveClasses({
  mb4: {
    marginBottom: '2rem'
  }
}), {}, createResponsiveClasses({
  mb5: {
    marginBottom: '4rem'
  }
}), {}, createResponsiveClasses({
  mb6: {
    marginBottom: '8rem'
  }
}), {}, createResponsiveClasses({
  mb7: {
    marginBottom: '16rem'
  }
}), {}, createResponsiveClasses({
  mt0: {
    marginTop: 0
  }
}), {}, createResponsiveClasses({
  mt1: {
    marginTop: '.25rem'
  }
}), {}, createResponsiveClasses({
  mt2: {
    marginTop: '.5rem'
  }
}), {}, createResponsiveClasses({
  mt3: {
    marginTop: '1rem'
  }
}), {}, createResponsiveClasses({
  mt4: {
    marginTop: '2rem'
  }
}), {}, createResponsiveClasses({
  mt5: {
    marginTop: '4rem'
  }
}), {}, createResponsiveClasses({
  mt6: {
    marginTop: '8rem'
  }
}), {}, createResponsiveClasses({
  mt7: {
    marginTop: '16rem'
  }
}), {}, createResponsiveClasses({
  mv0: {
    marginTop: 0,
    marginBottom: 0
  }
}), {}, createResponsiveClasses({
  mv1: {
    marginTop: '.25rem',
    marginBottom: '.25rem'
  }
}), {}, createResponsiveClasses({
  mv2: {
    marginTop: '.5rem',
    marginBottom: '.5rem'
  }
}), {}, createResponsiveClasses({
  mv3: {
    marginTop: '1rem',
    marginBottom: '1rem'
  }
}), {}, createResponsiveClasses({
  mv4: {
    marginTop: '2rem',
    marginBottom: '2rem'
  }
}), {}, createResponsiveClasses({
  mv5: {
    marginTop: '4rem',
    marginBottom: '4rem'
  }
}), {}, createResponsiveClasses({
  mv6: {
    marginTop: '8rem',
    marginBottom: '8rem'
  }
}), {}, createResponsiveClasses({
  mv7: {
    marginTop: '16rem',
    marginBottom: '16rem'
  }
}), {}, createResponsiveClasses({
  mh0: {
    marginLeft: 0,
    marginRight: 0
  }
}), {}, createResponsiveClasses({
  mh1: {
    marginLeft: '.25rem',
    marginRight: '.25rem'
  }
}), {}, createResponsiveClasses({
  mh2: {
    marginLeft: '.5rem',
    marginRight: '.5rem'
  }
}), {}, createResponsiveClasses({
  mh3: {
    marginLeft: '1rem',
    marginRight: '1rem'
  }
}), {}, createResponsiveClasses({
  mh4: {
    marginLeft: '2rem',
    marginRight: '2rem'
  }
}), {}, createResponsiveClasses({
  mh5: {
    marginLeft: '4rem',
    marginRight: '4rem'
  }
}), {}, createResponsiveClasses({
  mh6: {
    marginLeft: '8rem',
    marginRight: '8rem'
  }
}), {}, createResponsiveClasses({
  mh7: {
    marginLeft: '16rem',
    marginRight: '16rem'
  }
}));

var _classes;

var classes$j = (_classes = {
  collapse: {
    borderCollapse: 'collapse',
    borderSpacing: 0
  },
  'striped--moon-gray': {
    ':nth-child(odd)': {
      backgroundColor: '#aaa'
    }
  }
}, _defineProperty(_classes, "striped--moon-gray", {
  ':nth-child(odd)': {
    backgroundColor: '#ccc'
  }
}), _defineProperty(_classes, 'striped--light-gray', {
  ':nth-child(odd)': {
    backgroundColor: '#eee'
  }
}), _defineProperty(_classes, 'striped--near-white', {
  ':nth-child(odd)': {
    backgroundColor: '#f4f4f4'
  }
}), _classes);

var classes$k = _objectSpread2({}, createResponsiveClasses({
  tl: {
    textAlign: 'left'
  }
}), {}, createResponsiveClasses({
  tr: {
    textAlign: 'right'
  }
}), {}, createResponsiveClasses({
  tc: {
    textAlign: 'center'
  }
}), {}, createResponsiveClasses({
  tj: {
    textAlign: 'justify'
  }
}));

var classes$l = _objectSpread2({}, createResponsiveClasses({
  strike: {
    textDecoration: 'line-through'
  }
}), {}, createResponsiveClasses({
  underline: {
    textDecoration: 'underline'
  }
}), {}, createResponsiveClasses({
  'no-underline': {
    textDecoration: 'none'
  }
}));

var classes$m = _objectSpread2({}, createResponsiveClasses({
  measure: {
    maxWidth: '30em'
  }
}), {}, createResponsiveClasses({
  'measure-wide': {
    maxWidth: '34em'
  }
}), {}, createResponsiveClasses({
  'measure-narrow': {
    maxWidth: '20em'
  }
}), {}, createResponsiveClasses({
  indent: {
    textIndent: '1em',
    marginTop: 0,
    marginBottom: 0
  }
}), {}, createResponsiveClasses({
  'small-caps': {
    fontVariant: 'small-caps'
  }
}), {}, createResponsiveClasses({
  truncate: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
}));

var classes$n = {
  'overflow-container': {
    overflowY: 'scroll'
  },
  center: {
    marginRight: 'auto',
    marginLeft: 'auto'
  }
};

var classes$o = _objectSpread2({}, createResponsiveClasses({
  'v-base': {
    verticalAlign: 'baseline'
  }
}), {}, createResponsiveClasses({
  'v-mid': {
    verticalAlign: 'middle'
  }
}), {}, createResponsiveClasses({
  'v-top': {
    verticalAlign: 'top'
  }
}), {}, createResponsiveClasses({
  'v-btm': {
    verticalAlign: 'bottom'
  }
}));

var classes$p = _objectSpread2({}, createResponsiveClasses({
  'ws-normal': {
    whiteSpace: 'normal'
  }
}), {}, createResponsiveClasses({
  nowrap: {
    whiteSpace: 'nowrap'
  }
}), {}, createResponsiveClasses({
  pre: {
    whiteSpace: 'pre'
  }
}));

var classes$q = _objectSpread2({}, createResponsiveClasses({
  w1: {
    width: '1rem'
  }
}), {}, createResponsiveClasses({
  w2: {
    width: '2rem'
  }
}), {}, createResponsiveClasses({
  w3: {
    width: '4rem'
  }
}), {}, createResponsiveClasses({
  w4: {
    width: '8rem'
  }
}), {}, createResponsiveClasses({
  w5: {
    width: '16rem'
  }
}), {}, createResponsiveClasses({
  'w-auto': {
    width: 'auto'
  }
}), {}, createResponsiveClasses({
  'w-10': {
    width: '10%'
  }
}), {}, createResponsiveClasses({
  'w-20': {
    width: '20%'
  }
}), {}, createResponsiveClasses({
  'w-25': {
    width: '25%'
  }
}), {}, createResponsiveClasses({
  'w-30': {
    width: '30%'
  }
}), {}, createResponsiveClasses({
  'w-third': {
    width: 'calc(100% / 3)'
  }
}), {}, createResponsiveClasses({
  'w-40': {
    width: '40%'
  }
}), {}, createResponsiveClasses({
  'w-50': {
    width: '50%'
  }
}), {}, createResponsiveClasses({
  'w-60': {
    width: '60%'
  }
}), {}, createResponsiveClasses({
  'w-two-thirds': {
    width: 'calc(100% / 1.5)'
  }
}), {}, createResponsiveClasses({
  'w-70': {
    width: '70%'
  }
}), {}, createResponsiveClasses({
  'w-75': {
    width: '75%'
  }
}), {}, createResponsiveClasses({
  'w-80': {
    width: '80%'
  }
}), {}, createResponsiveClasses({
  'w-90': {
    width: '90%'
  }
}), {}, createResponsiveClasses({
  'w-100': {
    width: '100%'
  }
}));

var classes$r = {
  'z-0': {
    zIndex: 0
  },
  'z-1': {
    zIndex: 1
  },
  'z-2': {
    zIndex: 2
  },
  'z-3': {
    zIndex: 3
  },
  'z-4': {
    zIndex: 4
  },
  'z-5': {
    zIndex: 5
  },
  'z-999': {
    zIndex: 999
  },
  'z-9999': {
    zIndex: 9999
  },
  'z-max': {
    zIndex: 2147483647
  },
  'z-inherit': {
    zIndex: 'inherit'
  },
  'z-initial': {
    zIndex: 'initial'
  },
  'z-unset': {
    zIndex: 'unset'
  }
};

var index = _objectSpread2({}, classes, {}, classes$1, {}, classes$2, {}, classes$3, {}, classes$4, {}, classes$5, {}, classes$6, {}, classes$7, {}, classes$8, {}, classes$9, {}, classes$a, {}, classes$b, {}, classes$c, {}, classes$d, {}, classes$e, {}, classes$f, {}, classes$g, {}, classes$h, {}, classes$i, {}, classes$j, {}, classes$k, {}, classes$l, {}, classes$m, {}, classes$n, {}, classes$o, {}, classes$p, {}, classes$q, {}, classes$r);

export default index;
