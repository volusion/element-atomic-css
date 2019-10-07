import { position } from './properties/position';
import { display } from './properties/display';
import { flexbox } from './properties/flexbox';
import { width } from './properties/width';
import { maxWidth } from './properties/maxWidth';
import { forms } from './properties/forms';
import { hovers } from './properties/hovers';
import { debug } from './properties/debug';
import { skins } from './properties/skins';
import { skinsPseudo } from './properties/skinsPseudo';
import { tables } from './properties/tables';

export const aphroditeTachyons = {
    ...position,
    ...display,
    ...flexbox,
    ...width,
    ...maxWidth,
    ...forms,
    ...hovers,
    ...debug,
    ...skins,
    ...skinsPseudo,
    ...tables
};
