function timeConversion(s) {
  // Write your code here
  const time = s;

  const hours = time.slice(0,2)
  const minutes = time.slice(3,5);
  const day = time.slice(8,10);

  // for (let i = 0; i < time.length; i++){
   
  // }
  return {hours,minutes,day}

}

const s ="07:05:45"
const result = timeConversion(s);
console.log(result);

let text = "Hello world!";
console.log(text[0])


// const time = "07:05:45PM"
// const timeSlice = time.slice(8,10);
// const timeX = time.indexOf(timeSlice);
// const day = timeX ?  "AM" : "PM"
// console.log(day)