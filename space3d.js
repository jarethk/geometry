import { clamp } from 'num-wrap/clamp.js'

function shiftPoint(point, shift) {
    return [
        point[0] + shift[0],
        point[1] + shift[1],
        point[2] + shift[2]
    ];
}

function shiftPointInGrid(grid, point, shift) {
    let maxZ = grid.length - 1;
    let maxY = grid[point[0]].length - 1;
    let maxX = grid[point[0]][point[1]].length - 1;
    return [
        clamp(point[0] + shift[0], 0, maxZ),
        clamp(point[1] + shift[1], 0, maxY),
        clamp(point[2] + shift[2], 0, maxX)
    ];
}

const adjSet = [
    [-1, 0, 0],
    [+1, 0, 0],
    [0, -1, 0],
    [0, +1, 0],
    [0, 0, -1],
    [0, 0, +1]
];

function getAdjacent(point) {
    return adjSet.map(s => shiftPoint(point, s));
};

function getAdjacentInGrid(grid, point) {
    return adjSet.map(s => shiftPointInGrid(grid, point, s));
};

const surroundSet = [
    [-1, -1, -1],
    [-1, -1, 0],
    [-1, -1, +1],
    [-1, 0, -1],
    [-1, 0, 0],
    [-1, 0, +1],
    [-1, +1, -1],
    [-1, +1, 0],
    [-1, +1, +1],

    [0, -1, -1],
    [0, -1, 0],
    [0, -1, +1],
    [0, 0, -1],
    //[0, 0, 0],
    [0, 0, +1],
    [0, +1, -1],
    [0, +1, 0],
    [0, +1, +1],

    [+1, -1, -1],
    [+1, -1, 0],
    [+1, -1, +1],
    [+1, 0, -1],
    [+1, 0, 0],
    [+1, 0, +1],
    [+1, 1, -1],
    [+1, 1, 0],
    [+1, 1, +1],
];

function getSurrounding(point) {
    return surroundSet.map(s => shiftPoint(point, s));
};

function getSurroundingInGrid(grid, point) {
    return surroundSet.map(s => shiftPointInGrid(grid, point, s));
};

// assumes grid is in z, y, x format
function printSpace(grid) {
    grid.forEach((g, idx) => {
        //console.log(JSON.stringify(g));
        console.log(`[Z: ${idx}\n  ${g.map(r => r.join("")).join("\n  ")}\n]`)
    });
}

export { getAdjacent, getAdjacentInGrid, getSurrounding, getSurroundingInGrid, shiftPoint, shiftPointInGrid, printSpace };