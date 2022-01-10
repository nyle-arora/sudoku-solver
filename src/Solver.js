function solvePuzzle(gridArray) {
    let rowIndex = -1; 
    let colIndex = -1;
    let isSolved = true; // start off by assuming that the puzzle is solved 
    for (let i = 0; i < 9; i++) { //traversing the rows
        for (let j = 0; j < 9; j++) { //traversing the cols
            if (gridArray[i][j] == 0) {
                rowIndex = i; 
                colIndex = j; 
                isSolved = false; //since an empty square was discoverd, the puzzle is not solved
                break;
            }
        }
        if (!isSolved) {
            break;
        }
    }
    if (isSolved) {
        return {
            solvable: true,
            arr: gridArray,
        };
    }
    for (let i = 1; i < 10; i++) {
        let isLegal = rowLegal(i, rowIndex, gridArray) && colLegal(i, colIndex, gridArray) && boxLegal((i, rowIndex, colIndex, gridArray));
        if(isLegal){
            gridArray[rowIndex][colIndex] = i;
            if (solvePuzzle(gridArray).solvable) {
                return {
                    solvable: true,
                    arr: gridArray,
                };
            } else {
                gridArray[rowIndex][colIndex] = 0;
            }
        }
    }
    return {
        solvable: false,
        arr: null,
    };
}

function rowLegal(num, rowIndex, gridArray) {
    for(let i = 0; i < 9; i++) {
        if (gridArray[rowIndex][i] == num) {
            return false;
        }
    }
    return true;
}

function colLegal(num, colIndex, gridArray) {
    for (let i = 0; i < 9; i++) {
        if (gridArray[i][colIndex] == num) {
            return false;
        }
    }
    return true;
}

function boxLegal(num, rowIndex, colIndex, gridArray) {

    let leftCornerRow = rowIndex - rowIndex % 3;
    let leftCornerCol = colIndex - colIndex % 3;

    for (let i = leftCornerRow; i < leftCornerRow + 3; i++) {
        for (let j = leftCornerCol; j < leftCornerCol + 3; j++) {
            if (gridArray[i][j] == num) {
                return false;
            }
        }
    }
    return true;

}

export { solvePuzzle }