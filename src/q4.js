const dfs = (board, word, rowIndex, colIndex, corrent) => {
    let m = board.length;
    let n = board[0].length;
 
    if (rowIndex < 0 || colIndex < 0 || rowIndex >= m || colIndex >= n){
        return false;
    }
 
    if (board[rowIndex][colIndex] === word.charAt(corrent)){
        let temp = board[rowIndex][colIndex];
        board[rowIndex][colIndex]='*';
        if ( corrent === word.length - 1 ){
            return true;
        } else if ( dfs(board, word, rowIndex-1, colIndex, corrent+1)
        || dfs(board, word, rowIndex+1, colIndex, corrent+1)
        || dfs(board, word, rowIndex, colIndex-1, corrent+1)
        || dfs(board, word, rowIndex, colIndex+1, corrent+1)) {
            return true;
        }
        board[rowIndex][colIndex]=temp;
    }
 
    return false;
}

const isExistIn2D = (board, word) => {
    let isExist = false;
    board.map( (row, rowIndex) => row.map( (col, colIndex)=> dfs(board, word, rowIndex, colIndex, 0)? isExist = true : null ) );
    return isExist;
}

let t = isExistIn2D([ 
  ['A','B','C','E'], 
  ['S','F','C','S'], 
  ['A','D','E','E'] 
],
"ABCB" 
);
//let t = isExistIn2D(["a","a"],"aa");

console.log(t);