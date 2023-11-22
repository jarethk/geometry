import { gameOfLife } from './gameOfLife.js';
import { getAdjacent } from './space2d.js';

function lifeMatchingCheck(grid, current, weight) {
    return (weight == 1 || grid[current] && weight == 1);
}

test('Testing gameOfLife', () => {
    let life = gameOfLife({ "0|0": 1 }, 1, getAdjacent, lifeMatchingCheck);
    expect(life).toHaveProperty("1|0");
    expect(life).toHaveProperty("0|1");
    expect(life).toHaveProperty("-1|0");
    expect(life).toHaveProperty("0|-1");
});
