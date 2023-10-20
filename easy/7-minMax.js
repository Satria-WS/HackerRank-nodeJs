const  value = [1,2,3,4,5];

function miniMaxSum(arr) {
  // Write your code here
  const minValue = Math.min(...arr);
  const maxValue = Math.max(...arr);
  
  const minArr = [];
  const maxArr =[];

  
  let minSum = 0;
  let maxSum = 0;
  
  for (let i = 0 ; i < arr.length ; i ++) {
      if(arr[i] !== minValue) {
          minArr.push(arr[i])
          maxSum += arr[i];
      }
      
      if(arr[i] !== maxValue) {
        maxArr.push(arr[i]);
        minSum += arr[i];
      }
  }
  
  
  console.log(minSum,maxSum);
  // console.log(minArr , maxArr)
 
  

}
miniMaxSum(value)