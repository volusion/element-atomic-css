import aspectRatios from './properties/aspectRatios';
import backgroundPosition from './properties/backgroundPosition';
import backgroundSize from './properties/backgroundSize';
import borderRadius from './properties/borderRadius';
import borders from './properties/borders';
import boxShadow from './properties/boxShadow';
import boxSizing from './properties/boxSizing';
import clears from './properties/clears';
import coordinates from './properties/coordinates';
import debug from './properties/debug';
import display from './properties/display';
import flexbox from './properties/flexbox';
import floats from './properties/floats';
import fontStyle from './properties/fontStyle';
import fontWeight from './properties/fontWeight';
import forms from './properties/forms';
import height from './properties/height';
import hovers from './properties/hovers';
import letterSpacing from './properties/letterSpacing';
import lineHeight from './properties/lineHeight';
import link from './properties/link';
import lists from './properties/lists';
import maxWidth from './properties/maxWidth';
import opacity from './properties/opacity';
import outline from './properties/outline';
import overflow from './properties/overflow';
import position from './properties/position';
import rotations from './properties/rotations';
import skins from './properties/skins';
import skinsPseudo from './properties/skinsPseudo';
import spacing from './properties/spacing';
import tables from './properties/tables';
import textAlign from './properties/textAlign';
import textDecoration from './properties/textDecoration';
import textTransform from './properties/textTransform';
import typeScale from './properties/typeScale';
import typography from './properties/typography';
import utilities from './properties/utilities';
import verticalAlign from './properties/verticalAlign';
import visibility from './properties/visibility';
import whiteSpace from './properties/whiteSpace';
import width from './properties/width';
import zIndex from './properties/zIndex';

export const atomic = {
    ...aspectRatios,
    ...backgroundPosition, // Should avoid background images for lazy loading, but maybe useful for bg svgs?
    ...backgroundSize, // Should avoid background images for lazy loading, but maybe useful for bg svgs?
    ...borderRadius,
    ...borders,
    ...boxShadow,
    ...boxSizing,
    ...clears, // Not sure I've ever used these rules.
    ...coordinates,
    ...debug, // Not sure if useful
    ...display,
    ...flexbox,
    ...floats,
    ...fontStyle, // definite benefit for custom design, but shoudl be avoided in favor of Site Designer tools.
    ...fontWeight, // definite benefit for custom design, but shoudl be avoided in favor of Site Designer tools.
    ...forms,
    ...height,
    ...hovers, // Has some CSS which requires extending aphrodite to work
    ...letterSpacing,
    ...lineHeight,
    ...link, // Seems unnecessary. Should be covered by global anchor rules.
    ...lists,
    ...maxWidth,
    ...opacity, // Is there a reason to apply opacity without a hover effect?
    ...outline,
    ...overflow,
    ...position,
    ...rotations,
    ...skins, // Seems like we could get rid of these in favor of global/block props
    ...skinsPseudo, // Seems like we could get rid of these in favor of global/block props
    ...spacing,
    ...tables,
    ...textAlign,
    ...textDecoration,
    ...textTransform, // I don't see a need for this when the user can choose to type text as upper/lowercase
    ...typeScale, // definite benefit for custom design, but shoudl be avoided in favor of Site Designer tools.
    ...typography,
    ...utilities,
    ...verticalAlign,
    ...visibility, // Seems unnecessary
    ...whiteSpace,
    ...width,
    ...zIndex
};
