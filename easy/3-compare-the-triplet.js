function compareTriplets(a, b) {
  const alice = a;
  const bob = b;
  
  let [aliceSum, bobSum] = [0 , 0]
  
  for (let i = 0; i < alice.length; i++) {
    
    if (alice[i] === bob[i]) {
      aliceSum += 0
      bobSum += 0
    } else if (alice[i] > bob[i]) {
      aliceSum += 1
    } else if(alice[i] < bob[i])
      bobSum += 1
  }


  return [aliceSum, bobSum];

}

console.log(compareTriplets([17,28,30],[99 , 16 , 8]))