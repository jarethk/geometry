import { getAdjacent } from './space4d.js'

test('Testing adjacent', () => {
    expect(getAdjacent([[[[1]]]], [0, 0, 0, 0]).length).toBe(8)
});
