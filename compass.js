import { wrap } from "num-wrap/num-wrap.js";

const compassDirections = ["N", "E", "S", "W"];

/**
 * Rotate from a compass direction by increments of 90 degrees.
 * 
 * @param {*} facing 
 * @param {*} rotation 
 * @returns 
 */
function rotate(facing, rotation) {
    return compassDirections[wrap(compassDirections.indexOf(facing) + (rotation / 90), 0, 3)];
}

/**
 * Turn either left or right from a compass direction by an amount in increments of 90 degrees.
 * 
 * @param {*} facing 
 * @param {*} dir 
 * @param {*} amt 
 * @returns 
 */
function turn(facing, dir, amt) {
    let multiplier = (dir == "L") ? -1 : 1;
    return rotate(facing, amt * multiplier);
}

function pivot(x, y, rotation) {
    let r = wrap((rotation / 90), 0, 3);
    if (r == 1) return [y, -1 * x];
    if (r == 2) return [-1 * x, -1 * y];
    if (r == 3) return [-1 * y, x];
    return [x, y];
}

export { rotate, compassDirections, turn, pivot };