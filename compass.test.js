import { rotate } from './compass.js';
import { turn } from './compass.js';
import { pivot } from './compass.js';

test('Testing rotate options', () => {
    expect(rotate('E', 90)).toBe('S')
    expect(rotate('S', 180)).toBe('N')
    expect(rotate('W', 270)).toBe('S')
});

test('Testing turn options', () => {
    expect(turn('E', 'L', 90)).toBe('N')
    expect(turn('E', 'R', 90)).toBe('S')
    expect(turn('W', 'R', 90)).toBe('N')
});

test('Testing pivot options', () => {
    expect(pivot(5, 2, 90)).toStrictEqual([2, -5])
    expect(pivot(5, 2, 180)).toStrictEqual([-5, -2])
    expect(pivot(5, 2, 270)).toStrictEqual([-2, 5])
    expect(pivot(5, 2, 360)).toStrictEqual([5, 2])
    expect(pivot(5, 2, -90)).toStrictEqual([-2, 5])
    expect(pivot(5, 2, -180)).toStrictEqual([-5, -2])
    expect(pivot(5, 2, -270)).toStrictEqual([2, -5])
})