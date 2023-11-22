import { getAdjacent } from './space2d.js'

test('Testing adjacent', () => {
    expect(getAdjacent([[[1]]], [0, 0]).length).toBe(4)
});
