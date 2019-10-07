import { StyleSheet } from 'aphrodite';
import { aphroditeTachyons } from '../../src';

const classes = StyleSheet.create(aphroditeTachyons);
const css = '_definition';

export const cssForClass = className => classes[className][css];
