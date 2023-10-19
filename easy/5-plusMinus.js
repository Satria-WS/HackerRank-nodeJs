function plusMinus(arr) {
  // Write your code here
  const positiveNumber = [];
  const negativeNumber = [];
  const zeroNumber = [];
  const arrNumber = arr;

  //total calculate ratio
  let ratioPositive = 0;
  let ratioNegative = 0;
  let ratioZero = 0;

  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] !== 0) {
      if (arrNumber[i] > 0) {
        positiveNumber.push(arrNumber[i]);
  
        
      } else if (arrNumber[i] < 0) {
        negativeNumber.push(arrNumber[i]);
      }
    } else {
      zeroNumber.push(arrNumber[i]);
    }
  }
  
  //calculatingRatio positiveNumber
  ratioPositive = (ratioPositive + positiveNumber.length)/arrNumber.length;
  ratioPositive = ratioPositive.toFixed(arrNumber.length);

  //calculatingRatio negativeNumber
  ratioNegative = (ratioNegative + negativeNumber.length)/arrNumber.length;
  ratioNegative = ratioNegative.toFixed(arrNumber.length);
  
  //calculatingRatio zeroNumber
  ratioZero = (ratioZero + zeroNumber.length)/arrNumber.length;
  ratioZero = ratioZero.toFixed(arrNumber.length);
  

  return {
    checkValue: {
      positiveNumber: positiveNumber,
      negativeNumber: negativeNumber,
      zeroNumber: zeroNumber,
    },
    totalRatio: {
      ratioPositive: ratioPositive,
      ratioNegative: ratioNegative,
      ratioZero: ratioZero
    }
  };
}

const result = plusMinus([-4, 3, -9, 0, 4 , 1] );
console.log(result);

// console.log(Boolean( Math.sign(3)))
// console.log(Boolean( Math.sign(-3)))
// console.log(Math.sign(3))
// let out = (0.1).toFixed(3);
// console.log(out)