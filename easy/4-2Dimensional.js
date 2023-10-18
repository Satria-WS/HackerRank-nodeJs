const diagonalX = [
  [1, "", ""],
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

// console.log(diagonal[0][0]);
// console.log(diagonal[0][1]);
// console.log(diagonal[0][2]);




// console.log(diagonal[1][0]);
// console.log(diagonal[1][1]);
// console.log(diagonal[1][2]);

// console.log(diagonal[2][0]);
// console.log(diagonal[2][1]);
// console.log(diagonal[2][2]);

// console.log(diagonal[3][0]);
// console.log(diagonal[3][1]);

// console.log(diagonal[0].length)
// console.log(diagonal[1].length)
// console.log(diagonal[2].length)
// console.log(diagonal[3].length)

// //primaryDiagonal
// console.log(diagonal[1][0]);
// console.log(diagonal[2][1]);
// console.log(diagonal[3][2]);

// //secondaryDiagonal
// console.log(diagonal[1][2]);
// console.log(diagonal[2][1]);
// console.log(diagonal[3][0]);

const originalDiagonal = [];
const primaryDiagonal = [];
const secondaryDiagonal = [];




function diagonalDifference(arr) {
  let duplicateArray = [];



  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      // console.log(arr[i][j]);
      // console.log(i)
    
      originalDiagonal.push(arr[i][j]);
      duplicateArray.push(i)
      
    }
  
  }
  let duplicateRemove = [...new Set(duplicateArray)]
  console.log( "duplicate: " , duplicateRemove);
  return {
    original: originalDiagonal,
    primary: primaryDiagonal,
    secondary: secondaryDiagonal,
  };


}


console.log(diagonalDifference(diagonalX));
// console.log( "duplicate: " , duplicateArray);
