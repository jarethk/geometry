function gameOfLife(grid, cycles, getAdjacentCallback, matchingCallback) {
    let gameGrid = grid;
    for (let c = 0; c < cycles; c++) {
        let rGrid = Object
            .entries(Object.keys(gameGrid)
                .flatMap(pt => getAdjacentCallback(pt.split("|").map(c => ~~c))
                    .map(n => n.join("|")))
                .reduce((ng, cv) => { ng[cv] ? ng[cv] += 1 : ng[cv] = 1; return ng; }, {}))
            .filter(pair => matchingCallback(gameGrid, pair[0], pair[1]))
            .reduce((ng, cv) => { ng[cv[0]] = 1; return ng; }, {});
        gameGrid = rGrid;
    }
    return gameGrid;
}

export { gameOfLife };