function numSpecial(mat: number[][]): number {
  let count = 0,rows = mat.length,columns = mat[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (mat[i][j] === 1) {
        let columns = getColumns(mat, j);
        if (isSingle(mat[i], j) && isSingle(columns, i)) count++;
      }
    }
  }
  return count;
}

function isSingle(arr: number[], j: number): boolean {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] === 1 && i !== j) return false;
  }
  return true;
}

function getColumns(mat: number[][], j: number): number[] {
  let res: number[] = [];

  for (let item of mat) {
    res.push(item[j]);
  }

  return res;
}
