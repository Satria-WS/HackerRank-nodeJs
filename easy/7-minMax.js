function miniMaxSum(arr) {
  // Write your code here
  const minValue = Math.min(...arr);
  const maxValue = Math.max(...arr);
  
  const minArr = [];
  const maxArr =[];

  
  let minSum = 0;
  let maxSum = 0;
  
  for (let i = 0 ; i < arr.length ; i ++) {
    
    if(minValue !== maxValue) {
     if(arr[i] !== minValue) {
        minArr.push(arr[i])
        maxSum += arr[i];
      }
      
    if(arr[i] !== maxValue) {
      maxArr.push(arr[i]);
      minSum += arr[i];
      }
    } else {
      minArr.push(arr[i])
      maxArr.push(arr[i])
      
      maxSum += arr[i] - 1
      minSum += arr[i] - 1
      
    }
    

    
  }
  
  
  console.log(minSum,maxSum);
  console.log(minArr , maxArr)
  
  console.log(minValue)
   console.log(maxValue)
 
  

}

const duplicate = [5, 5, 5, 5, 5];
const value = [1,2,3,4,5]
miniMaxSum(value)