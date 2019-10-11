import { createResponsiveClasses } from '../utils';

export const spacing = {
    ...createResponsiveClasses({ pa0: { padding: 0 } }),
    ...createResponsiveClasses({ pa1: { padding: '.25rem' } }),
    ...createResponsiveClasses({ pa2: { padding: '.5rem' } }),
    ...createResponsiveClasses({ pa3: { padding: '1rem' } }),
    ...createResponsiveClasses({ pa4: { padding: '2rem' } }),
    ...createResponsiveClasses({ pa5: { padding: '4rem' } }),
    ...createResponsiveClasses({ pa6: { padding: '8rem' } }),
    ...createResponsiveClasses({ pa7: { padding: '16rem' } }),
    ...createResponsiveClasses({ pl0: { 'padding-left': 0 } }),
    ...createResponsiveClasses({ pl1: { 'padding-left': '.25rem' } }),
    ...createResponsiveClasses({ pl2: { 'padding-left': '.5rem' } }),
    ...createResponsiveClasses({ pl3: { 'padding-left': '1rem' } }),
    ...createResponsiveClasses({ pl4: { 'padding-left': '2rem' } }),
    ...createResponsiveClasses({ pl5: { 'padding-left': '4rem' } }),
    ...createResponsiveClasses({ pl6: { 'padding-left': '8rem' } }),
    ...createResponsiveClasses({ pl7: { 'padding-left': '16rem' } }),
    ...createResponsiveClasses({ pr0: { 'padding-right': 0 } }),
    ...createResponsiveClasses({ pr1: { 'padding-right': '.25rem' } }),
    ...createResponsiveClasses({ pr2: { 'padding-right': '.5rem' } }),
    ...createResponsiveClasses({ pr3: { 'padding-right': '1rem' } }),
    ...createResponsiveClasses({ pr4: { 'padding-right': '2rem' } }),
    ...createResponsiveClasses({ pr5: { 'padding-right': '4rem' } }),
    ...createResponsiveClasses({ pr6: { 'padding-right': '8rem' } }),
    ...createResponsiveClasses({ pr7: { 'padding-right': '16rem' } }),
    ...createResponsiveClasses({ pb0: { 'padding-bottom': 0 } }),
    ...createResponsiveClasses({ pb1: { 'padding-bottom': '.25rem' } }),
    ...createResponsiveClasses({ pb2: { 'padding-bottom': '.5rem' } }),
    ...createResponsiveClasses({ pb3: { 'padding-bottom': '1rem' } }),
    ...createResponsiveClasses({ pb4: { 'padding-bottom': '2rem' } }),
    ...createResponsiveClasses({ pb5: { 'padding-bottom': '4rem' } }),
    ...createResponsiveClasses({ pb6: { 'padding-bottom': '8rem' } }),
    ...createResponsiveClasses({ pb7: { 'padding-bottom': '16rem' } }),
    ...createResponsiveClasses({ pt0: { 'padding-top': 0 } }),
    ...createResponsiveClasses({ pt1: { 'padding-top': '.25rem' } }),
    ...createResponsiveClasses({ pt2: { 'padding-top': '.5rem' } }),
    ...createResponsiveClasses({ pt3: { 'padding-top': '1rem' } }),
    ...createResponsiveClasses({ pt4: { 'padding-top': '2rem' } }),
    ...createResponsiveClasses({ pt5: { 'padding-top': '4rem' } }),
    ...createResponsiveClasses({ pt6: { 'padding-top': '8rem' } }),
    ...createResponsiveClasses({ pt7: { 'padding-top': '16rem' } }),
    ...createResponsiveClasses({
        pv0: { 'padding-top': 0, 'padding-bottom': 0 }
    }),
    ...createResponsiveClasses({
        pv1: { 'padding-top': '.25rem', 'padding-bottom': '.25rem' }
    }),
    ...createResponsiveClasses({
        pv2: { 'padding-top': '.5rem', 'padding-bottom': '.5rem' }
    }),
    ...createResponsiveClasses({
        pv3: { 'padding-top': '1rem', 'padding-bottom': '1rem' }
    }),
    ...createResponsiveClasses({
        pv4: { 'padding-top': '2rem', 'padding-bottom': '2rem' }
    }),
    ...createResponsiveClasses({
        pv5: { 'padding-top': '4rem', 'padding-bottom': '4rem' }
    }),
    ...createResponsiveClasses({
        pv6: { 'padding-top': '8rem', 'padding-bottom': '8rem' }
    }),
    ...createResponsiveClasses({
        pv7: { 'padding-top': '16rem', 'padding-bottom': '16rem' }
    }),
    ...createResponsiveClasses({
        ph0: { 'padding-left': 0, 'padding-right': 0 }
    }),
    ...createResponsiveClasses({
        ph1: { 'padding-left': '.25rem', 'padding-right': '.25rem' }
    }),
    ...createResponsiveClasses({
        ph2: { 'padding-left': '.5rem', 'padding-right': '.5rem' }
    }),
    ...createResponsiveClasses({
        ph3: { 'padding-left': '1rem', 'padding-right': '1rem' }
    }),
    ...createResponsiveClasses({
        ph4: { 'padding-left': '2rem', 'padding-right': '2rem' }
    }),
    ...createResponsiveClasses({
        ph5: { 'padding-left': '4rem', 'padding-right': '4rem' }
    }),
    ...createResponsiveClasses({
        ph6: { 'padding-left': '8rem', 'padding-right': '8rem' }
    }),
    ...createResponsiveClasses({
        ph7: { 'padding-left': '16rem', 'padding-right': '16rem' }
    }),
    ...createResponsiveClasses({ ma0: { margin: 0 } }),
    ...createResponsiveClasses({ ma1: { margin: '.25rem' } }),
    ...createResponsiveClasses({ ma2: { margin: '.5rem' } }),
    ...createResponsiveClasses({ ma3: { margin: '1rem' } }),
    ...createResponsiveClasses({ ma4: { margin: '2rem' } }),
    ...createResponsiveClasses({ ma5: { margin: '4rem' } }),
    ...createResponsiveClasses({ ma6: { margin: '8rem' } }),
    ...createResponsiveClasses({ ma7: { margin: '16rem' } }),
    ...createResponsiveClasses({ ml0: { 'margin-left': 0 } }),
    ...createResponsiveClasses({ ml1: { 'margin-left': '.25rem' } }),
    ...createResponsiveClasses({ ml2: { 'margin-left': '.5rem' } }),
    ...createResponsiveClasses({ ml3: { 'margin-left': '1rem' } }),
    ...createResponsiveClasses({ ml4: { 'margin-left': '2rem' } }),
    ...createResponsiveClasses({ ml5: { 'margin-left': '4rem' } }),
    ...createResponsiveClasses({ ml6: { 'margin-left': '8rem' } }),
    ...createResponsiveClasses({ ml7: { 'margin-left': '16rem' } }),
    ...createResponsiveClasses({ mr0: { 'margin-right': 0 } }),
    ...createResponsiveClasses({ mr1: { 'margin-right': '.25rem' } }),
    ...createResponsiveClasses({ mr2: { 'margin-right': '.5rem' } }),
    ...createResponsiveClasses({ mr3: { 'margin-right': '1rem' } }),
    ...createResponsiveClasses({ mr4: { 'margin-right': '2rem' } }),
    ...createResponsiveClasses({ mr5: { 'margin-right': '4rem' } }),
    ...createResponsiveClasses({ mr6: { 'margin-right': '8rem' } }),
    ...createResponsiveClasses({ mr7: { 'margin-right': '16rem' } }),
    ...createResponsiveClasses({ mb0: { 'margin-bottom': 0 } }),
    ...createResponsiveClasses({ mb1: { 'margin-bottom': '.25rem' } }),
    ...createResponsiveClasses({ mb2: { 'margin-bottom': '.5rem' } }),
    ...createResponsiveClasses({ mb3: { 'margin-bottom': '1rem' } }),
    ...createResponsiveClasses({ mb4: { 'margin-bottom': '2rem' } }),
    ...createResponsiveClasses({ mb5: { 'margin-bottom': '4rem' } }),
    ...createResponsiveClasses({ mb6: { 'margin-bottom': '8rem' } }),
    ...createResponsiveClasses({ mb7: { 'margin-bottom': '16rem' } }),
    ...createResponsiveClasses({ mt0: { 'margin-top': 0 } }),
    ...createResponsiveClasses({ mt1: { 'margin-top': '.25rem' } }),
    ...createResponsiveClasses({ mt2: { 'margin-top': '.5rem' } }),
    ...createResponsiveClasses({ mt3: { 'margin-top': '1rem' } }),
    ...createResponsiveClasses({ mt4: { 'margin-top': '2rem' } }),
    ...createResponsiveClasses({ mt5: { 'margin-top': '4rem' } }),
    ...createResponsiveClasses({ mt6: { 'margin-top': '8rem' } }),
    ...createResponsiveClasses({ mt7: { 'margin-top': '16rem' } }),
    ...createResponsiveClasses({
        mv0: { 'margin-top': 0, 'margin-bottom': 0 }
    }),
    ...createResponsiveClasses({
        mv1: { 'margin-top': '.25rem', 'margin-bottom': '.25rem' }
    }),
    ...createResponsiveClasses({
        mv2: { 'margin-top': '.5rem', 'margin-bottom': '.5rem' }
    }),
    ...createResponsiveClasses({
        mv3: { 'margin-top': '1rem', 'margin-bottom': '1rem' }
    }),
    ...createResponsiveClasses({
        mv4: { 'margin-top': '2rem', 'margin-bottom': '2rem' }
    }),
    ...createResponsiveClasses({
        mv5: { 'margin-top': '4rem', 'margin-bottom': '4rem' }
    }),
    ...createResponsiveClasses({
        mv6: { 'margin-top': '8rem', 'margin-bottom': '8rem' }
    }),
    ...createResponsiveClasses({
        mv7: { 'margin-top': '16rem', 'margin-bottom': '16rem' }
    }),
    ...createResponsiveClasses({
        mh0: { 'margin-left': 0, 'margin-right': 0 }
    }),
    ...createResponsiveClasses({
        mh1: { 'margin-left': '.25rem', 'margin-right': '.25rem' }
    }),
    ...createResponsiveClasses({
        mh2: { 'margin-left': '.5rem', 'margin-right': '.5rem' }
    }),
    ...createResponsiveClasses({
        mh3: { 'margin-left': '1rem', 'margin-right': '1rem' }
    }),
    ...createResponsiveClasses({
        mh4: { 'margin-left': '2rem', 'margin-right': '2rem' }
    }),
    ...createResponsiveClasses({
        mh5: { 'margin-left': '4rem', 'margin-right': '4rem' }
    }),
    ...createResponsiveClasses({
        mh6: { 'margin-left': '8rem', 'margin-right': '8rem' }
    }),
    ...createResponsiveClasses({
        mh7: { 'margin-left': '16rem', 'margin-right': '16rem' }
    })
};
