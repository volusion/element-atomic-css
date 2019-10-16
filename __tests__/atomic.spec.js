import { atomic } from '../src';

describe('The atomic CSS object', () => {
    it('should match the snapshot', () => {
        expect(atomic).toMatchSnapshot();
    });
});
