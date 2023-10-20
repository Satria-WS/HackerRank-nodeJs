function birthdayCakeCandles(candles) {
  // Write your code here
  const maxValueCandle = Math.max(...candles);
  let arrMaxCandle = [];
 
  
  for(let i = 0 ; i < candles.length; i++) {
      if(candles[i] === maxValueCandle) {
          arrMaxCandle.push(candles[i])
      }
  }
  return arrMaxCandle.length;
  
}   
const candles = [3, 2, 1, 3]
const result = birthdayCakeCandles(candles);
console.log(result)