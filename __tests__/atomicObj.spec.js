import { default as atomicObj } from '../src';

describe('The atomic CSS object', () => {
    it('should match the snapshot', () => {
        expect(atomicObj).toMatchSnapshot();
    });
});
