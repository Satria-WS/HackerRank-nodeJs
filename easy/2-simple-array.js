function simpleArraySum(ar) {

  //write here
  let sum = 0;

  for (let i = 0; i < ar.length; i++) {
      sum += ar[i];
  }


  return sum;
}

console.log(simpleArraySum([1,3,5]))