/**
 * Calculate the distance between points, supporting any number of dimensions.
 * 
 * @param {*} start 
 * @param {*} end 
 * @returns 
 */
function distance(start, end) {
    var distance = 0
    var dimensions = Math.max(start.length, end.length)
    for (var i = 0; i < dimensions; i++) {
        distance += Math.abs((end[i] || 0) - (start[i] || 0))
    }
    return distance;
}

export { distance };