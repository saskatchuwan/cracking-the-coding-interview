/*
This solution currently will only return one possible path through.
It also does not currently integrate DP (memoization).
*/
function findPath(grid) {
  let allPaths = [];
  const endRow = grid.length - 1;
  const endCol = grid[0].length - 1;
  
  const _recurse = function(row, col) {
    //base case for when we reach the end of the grid
    if (row === endRow && col === endCol) return [[row, col]];
    
    //check next step in row
    if (row < endRow && grid[row + 1][col] !== 'x') {
      let res = _recurse(row + 1, col);

      if (res) {
        return allPaths.concat([[row,col]].concat(res));
      }
    }

    //check next step in column
    if (col < endCol && grid[row][col + 1] !== 'x') {
      let res = _recurse(row, col + 1);
      if (res) {
        return allPaths.concat([[row, col]].concat(res));
      }
    }
    //will only execute false if the path is invalid;
    return false;
  };

  return _recurse(0, 0);
}

/* TEST */
const grid = [
  ['0', '0', '0', '0'],
  ['0', 'x', '0', 'x'],
  ['x', '0', '0', '0'],
];

console.log(findPath(grid));