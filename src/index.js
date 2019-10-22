export { createAtomicHelper } from './utils';
export { joinClasses } from './utils';

import aspectRatios from './properties/aspectRatios';
// import backgroundPosition from './properties/backgroundPosition';
// import backgroundSize from './properties/backgroundSize';
import borderRadius from './properties/borderRadius';
import borders from './properties/borders';
import borderWidths from './properties/borderWidths';
import boxShadow from './properties/boxShadow';
import boxSizing from './properties/boxSizing';
// import clears from './properties/clears';
import coordinates from './properties/coordinates';
// import debug from './properties/debug';
import display from './properties/display';
import flexbox from './properties/flexbox';
// import floats from './properties/floats';
// import fontStyle from './properties/fontStyle';
// import fontWeight from './properties/fontWeight';
import forms from './properties/forms';
import height from './properties/height';
// import hovers from './properties/hovers';
import letterSpacing from './properties/letterSpacing';
import lineHeight from './properties/lineHeight';
// import link from './properties/link';
import lists from './properties/lists';
import maxWidth from './properties/maxWidth';
// import opacity from './properties/opacity';
import outline from './properties/outline';
import overflow from './properties/overflow';
import position from './properties/position';
import rotations from './properties/rotations';
// import skins from './properties/skins';
// import skinsPseudo from './properties/skinsPseudo';
import spacing from './properties/spacing';
import tables from './properties/tables';
import textAlign from './properties/textAlign';
import textDecoration from './properties/textDecoration';
// import textTransform from './properties/textTransform';
// import typeScale from './properties/typeScale';
import typography from './properties/typography';
import utilities from './properties/utilities';
import verticalAlign from './properties/verticalAlign';
// import visibility from './properties/visibility';
import whiteSpace from './properties/whiteSpace';
import width from './properties/width';
import zIndex from './properties/zIndex';

export default {
    ...aspectRatios,
    // ...backgroundPosition,
    // ...backgroundSize,
    ...borderRadius,
    ...borders,
    ...borderWidths,
    ...boxShadow,
    ...boxSizing,
    // ...clears,
    ...coordinates,
    // ...debug,
    ...display,
    ...flexbox,
    // ...floats,
    // ...fontStyle,
    // ...fontWeight,
    ...forms,
    ...height,
    // ...hovers,
    ...letterSpacing,
    ...lineHeight,
    // ...link,
    ...lists,
    ...maxWidth,
    // ...opacity,
    ...outline,
    ...overflow,
    ...position,
    ...rotations,
    // ...skins,
    // ...skinsPseudo,
    ...spacing,
    ...tables,
    ...textAlign,
    ...textDecoration,
    // ...textTransform,
    // ...typeScale,
    ...typography,
    ...utilities,
    ...verticalAlign,
    // ...visibility,
    ...whiteSpace,
    ...width,
    ...zIndex
};
