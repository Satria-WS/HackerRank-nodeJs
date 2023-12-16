function diagonalDifference(arr) {
  // Write your code here

  const diagonal = arr;
  const primaryDiagonal = [];
  const secondaryDiagonal = [];

  let totalPrim = 0;//4 //a
  let totalSecond = 0;//19//b
  let totalDif; 


  for (let i = 1; i < diagonal.length; i++) {
    primaryDiagonal.push(diagonal[i][i - 1]);
    secondaryDiagonal.push(diagonal[i][diagonal.length - 1 - i ])
  }

  primaryDiagonal.forEach(arr => (totalPrim += arr));
  secondaryDiagonal.forEach(arr => (totalSecond += arr));
  totalDif = totalPrim < totalSecond ? totalSecond - totalPrim : totalPrim - totalSecond;

   return totalDif;


  // return {
  //   x: primaryDiagonal,
  //   y: secondaryDiagonal
  // };

}

console.log(diagonalDifference([
  [3, "", ""],
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
]
))

// diagonalDifference([
//   [1, "", ""],
//   [11, 2, 4],
//   [4, 5, 6],
//   [10, 8, -12]
// ])