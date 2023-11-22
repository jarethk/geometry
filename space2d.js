import { clamp } from 'num-wrap/clamp.js'

function shiftPoint(point, shift) {
    return [
        point[0] + shift[0],
        point[1] + shift[1]
    ];
}

function shiftPointInGrid(grid, point, shift) {
    let maxY = grid.length - 1;
    let maxX = grid[point[0]].length - 1;
    return [
        clamp(point[0] + shift[0], 0, maxY),
        clamp(point[1] + shift[1], 0, maxX)
    ];
}

const adjSet = [
    [-1, 0],
    [+1, 0],
    [0, -1],
    [0, +1]
];

function getAdjacent(point) {
    return adjSet.map(s => shiftPoint(point, s));
};

function getAdjacentInGrid(grid, point) {
    return adjSet.map(s => shiftPointInGrid(grid, point, s));
};

const surroundSet = [
    [-1, -1],
    [-1, 0],
    [-1, +1],

    [0, -1],
    // [0, 0],
    [0, +1],

    [+1, -1],
    [+1, 0],
    [+1, +1],
];

function getSurrounding(point) {
    return surroundSet.map(s => shiftPoint(point, s));
};

function getSurroundingInGrid(grid, point) {
    return surroundSet.map(s => shiftPointInGrid(grid, point, s));
};

// assumes grid is in z, y, x format
function printSpace(grid) {
    console.log(grid.map(r => r.join("")).join("\n  "))
}

export { getAdjacent, getAdjacentInGrid, getSurrounding, getSurroundingInGrid, shiftPoint, shiftPointInGrid, printSpace };