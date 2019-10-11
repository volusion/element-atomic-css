import { createResponsiveClasses } from '../utils';

const classes = {
    ...createResponsiveClasses({ pa0: { padding: 0 } }),
    ...createResponsiveClasses({ pa1: { padding: '.25rem' } }),
    ...createResponsiveClasses({ pa2: { padding: '.5rem' } }),
    ...createResponsiveClasses({ pa3: { padding: '1rem' } }),
    ...createResponsiveClasses({ pa4: { padding: '2rem' } }),
    ...createResponsiveClasses({ pa5: { padding: '4rem' } }),
    ...createResponsiveClasses({ pa6: { padding: '8rem' } }),
    ...createResponsiveClasses({ pa7: { padding: '16rem' } }),
    ...createResponsiveClasses({ pl0: { paddingLeft: 0 } }),
    ...createResponsiveClasses({ pl1: { paddingLeft: '.25rem' } }),
    ...createResponsiveClasses({ pl2: { paddingLeft: '.5rem' } }),
    ...createResponsiveClasses({ pl3: { paddingLeft: '1rem' } }),
    ...createResponsiveClasses({ pl4: { paddingLeft: '2rem' } }),
    ...createResponsiveClasses({ pl5: { paddingLeft: '4rem' } }),
    ...createResponsiveClasses({ pl6: { paddingLeft: '8rem' } }),
    ...createResponsiveClasses({ pl7: { paddingLeft: '16rem' } }),
    ...createResponsiveClasses({ pr0: { paddingRight: 0 } }),
    ...createResponsiveClasses({ pr1: { paddingRight: '.25rem' } }),
    ...createResponsiveClasses({ pr2: { paddingRight: '.5rem' } }),
    ...createResponsiveClasses({ pr3: { paddingRight: '1rem' } }),
    ...createResponsiveClasses({ pr4: { paddingRight: '2rem' } }),
    ...createResponsiveClasses({ pr5: { paddingRight: '4rem' } }),
    ...createResponsiveClasses({ pr6: { paddingRight: '8rem' } }),
    ...createResponsiveClasses({ pr7: { paddingRight: '16rem' } }),
    ...createResponsiveClasses({ pb0: { paddingBottom: 0 } }),
    ...createResponsiveClasses({ pb1: { paddingBottom: '.25rem' } }),
    ...createResponsiveClasses({ pb2: { paddingBottom: '.5rem' } }),
    ...createResponsiveClasses({ pb3: { paddingBottom: '1rem' } }),
    ...createResponsiveClasses({ pb4: { paddingBottom: '2rem' } }),
    ...createResponsiveClasses({ pb5: { paddingBottom: '4rem' } }),
    ...createResponsiveClasses({ pb6: { paddingBottom: '8rem' } }),
    ...createResponsiveClasses({ pb7: { paddingBottom: '16rem' } }),
    ...createResponsiveClasses({ pt0: { paddingTop: 0 } }),
    ...createResponsiveClasses({ pt1: { paddingTop: '.25rem' } }),
    ...createResponsiveClasses({ pt2: { paddingTop: '.5rem' } }),
    ...createResponsiveClasses({ pt3: { paddingTop: '1rem' } }),
    ...createResponsiveClasses({ pt4: { paddingTop: '2rem' } }),
    ...createResponsiveClasses({ pt5: { paddingTop: '4rem' } }),
    ...createResponsiveClasses({ pt6: { paddingTop: '8rem' } }),
    ...createResponsiveClasses({ pt7: { paddingTop: '16rem' } }),
    ...createResponsiveClasses({
        pv0: { paddingTop: 0, paddingBottom: 0 }
    }),
    ...createResponsiveClasses({
        pv1: { paddingTop: '.25rem', paddingBottom: '.25rem' }
    }),
    ...createResponsiveClasses({
        pv2: { paddingTop: '.5rem', paddingBottom: '.5rem' }
    }),
    ...createResponsiveClasses({
        pv3: { paddingTop: '1rem', paddingBottom: '1rem' }
    }),
    ...createResponsiveClasses({
        pv4: { paddingTop: '2rem', paddingBottom: '2rem' }
    }),
    ...createResponsiveClasses({
        pv5: { paddingTop: '4rem', paddingBottom: '4rem' }
    }),
    ...createResponsiveClasses({
        pv6: { paddingTop: '8rem', paddingBottom: '8rem' }
    }),
    ...createResponsiveClasses({
        pv7: { paddingTop: '16rem', paddingBottom: '16rem' }
    }),
    ...createResponsiveClasses({
        ph0: { paddingLeft: 0, paddingRight: 0 }
    }),
    ...createResponsiveClasses({
        ph1: { paddingLeft: '.25rem', paddingRight: '.25rem' }
    }),
    ...createResponsiveClasses({
        ph2: { paddingLeft: '.5rem', paddingRight: '.5rem' }
    }),
    ...createResponsiveClasses({
        ph3: { paddingLeft: '1rem', paddingRight: '1rem' }
    }),
    ...createResponsiveClasses({
        ph4: { paddingLeft: '2rem', paddingRight: '2rem' }
    }),
    ...createResponsiveClasses({
        ph5: { paddingLeft: '4rem', paddingRight: '4rem' }
    }),
    ...createResponsiveClasses({
        ph6: { paddingLeft: '8rem', paddingRight: '8rem' }
    }),
    ...createResponsiveClasses({
        ph7: { paddingLeft: '16rem', paddingRight: '16rem' }
    }),
    ...createResponsiveClasses({ ma0: { margin: 0 } }),
    ...createResponsiveClasses({ ma1: { margin: '.25rem' } }),
    ...createResponsiveClasses({ ma2: { margin: '.5rem' } }),
    ...createResponsiveClasses({ ma3: { margin: '1rem' } }),
    ...createResponsiveClasses({ ma4: { margin: '2rem' } }),
    ...createResponsiveClasses({ ma5: { margin: '4rem' } }),
    ...createResponsiveClasses({ ma6: { margin: '8rem' } }),
    ...createResponsiveClasses({ ma7: { margin: '16rem' } }),
    ...createResponsiveClasses({ ml0: { marginLeft: 0 } }),
    ...createResponsiveClasses({ ml1: { marginLeft: '.25rem' } }),
    ...createResponsiveClasses({ ml2: { marginLeft: '.5rem' } }),
    ...createResponsiveClasses({ ml3: { marginLeft: '1rem' } }),
    ...createResponsiveClasses({ ml4: { marginLeft: '2rem' } }),
    ...createResponsiveClasses({ ml5: { marginLeft: '4rem' } }),
    ...createResponsiveClasses({ ml6: { marginLeft: '8rem' } }),
    ...createResponsiveClasses({ ml7: { marginLeft: '16rem' } }),
    ...createResponsiveClasses({ mr0: { marginRight: 0 } }),
    ...createResponsiveClasses({ mr1: { marginRight: '.25rem' } }),
    ...createResponsiveClasses({ mr2: { marginRight: '.5rem' } }),
    ...createResponsiveClasses({ mr3: { marginRight: '1rem' } }),
    ...createResponsiveClasses({ mr4: { marginRight: '2rem' } }),
    ...createResponsiveClasses({ mr5: { marginRight: '4rem' } }),
    ...createResponsiveClasses({ mr6: { marginRight: '8rem' } }),
    ...createResponsiveClasses({ mr7: { marginRight: '16rem' } }),
    ...createResponsiveClasses({ mb0: { marginBottom: 0 } }),
    ...createResponsiveClasses({ mb1: { marginBottom: '.25rem' } }),
    ...createResponsiveClasses({ mb2: { marginBottom: '.5rem' } }),
    ...createResponsiveClasses({ mb3: { marginBottom: '1rem' } }),
    ...createResponsiveClasses({ mb4: { marginBottom: '2rem' } }),
    ...createResponsiveClasses({ mb5: { marginBottom: '4rem' } }),
    ...createResponsiveClasses({ mb6: { marginBottom: '8rem' } }),
    ...createResponsiveClasses({ mb7: { marginBottom: '16rem' } }),
    ...createResponsiveClasses({ mt0: { marginTop: 0 } }),
    ...createResponsiveClasses({ mt1: { marginTop: '.25rem' } }),
    ...createResponsiveClasses({ mt2: { marginTop: '.5rem' } }),
    ...createResponsiveClasses({ mt3: { marginTop: '1rem' } }),
    ...createResponsiveClasses({ mt4: { marginTop: '2rem' } }),
    ...createResponsiveClasses({ mt5: { marginTop: '4rem' } }),
    ...createResponsiveClasses({ mt6: { marginTop: '8rem' } }),
    ...createResponsiveClasses({ mt7: { marginTop: '16rem' } }),
    ...createResponsiveClasses({
        mv0: { marginTop: 0, marginBottom: 0 }
    }),
    ...createResponsiveClasses({
        mv1: { marginTop: '.25rem', marginBottom: '.25rem' }
    }),
    ...createResponsiveClasses({
        mv2: { marginTop: '.5rem', marginBottom: '.5rem' }
    }),
    ...createResponsiveClasses({
        mv3: { marginTop: '1rem', marginBottom: '1rem' }
    }),
    ...createResponsiveClasses({
        mv4: { marginTop: '2rem', marginBottom: '2rem' }
    }),
    ...createResponsiveClasses({
        mv5: { marginTop: '4rem', marginBottom: '4rem' }
    }),
    ...createResponsiveClasses({
        mv6: { marginTop: '8rem', marginBottom: '8rem' }
    }),
    ...createResponsiveClasses({
        mv7: { marginTop: '16rem', marginBottom: '16rem' }
    }),
    ...createResponsiveClasses({
        mh0: { marginLeft: 0, marginRight: 0 }
    }),
    ...createResponsiveClasses({
        mh1: { marginLeft: '.25rem', marginRight: '.25rem' }
    }),
    ...createResponsiveClasses({
        mh2: { marginLeft: '.5rem', marginRight: '.5rem' }
    }),
    ...createResponsiveClasses({
        mh3: { marginLeft: '1rem', marginRight: '1rem' }
    }),
    ...createResponsiveClasses({
        mh4: { marginLeft: '2rem', marginRight: '2rem' }
    }),
    ...createResponsiveClasses({
        mh5: { marginLeft: '4rem', marginRight: '4rem' }
    }),
    ...createResponsiveClasses({
        mh6: { marginLeft: '8rem', marginRight: '8rem' }
    }),
    ...createResponsiveClasses({
        mh7: { marginLeft: '16rem', marginRight: '16rem' }
    })
};

export default classes;
