function timeConversion(s) {
  // Write your code here
  const time = s;

  let hours = parseInt(time.slice(0,2))
  let minutes = time.slice(3,5);
  let second = time.slice(6 , 8)
  let day = time.slice(8,10);
  
  
  let checkingDay = time.includes(day)
  

  
  if (day.toUpperCase().includes('PM')) {
    if ( hours !== 12 ) {
       hours = (hours + 12).toString().padStart(2,'0'); 
      console.log(true , "PM")
    }
    
    

  } else if( day.toUpperCase().includes('AM') ) {
    if( hours !== 12 ) {
    hours = (hours + 0).toString().padStart(2,'0'); 
    } else {
     hours = (hours - 12).toString().padStart(2,'0'); 
    }
  
  
    console.log(true , "AM")
  } else {
    console.log("invalid input")
  }
  
  
  console.log(typeof (2 + 3).toString().padStart(2, '0')); 

  
   let originalTime = `${hours}:${minutes}:${second}${day}`
    
    

   
  
  return {
    time :{hours,minutes,second ,day},
    originalTime: originalTime
    
  }

}

const s ="01:01:45AM"
const result = timeConversion(s);
console.log(result);

var str = "Hello THERE."; 
var check1 = str.includes("there"); 
console.log(check1)


//ALGORITMA

// if pm -> +12
// if am -> -12

// if (day === PM   ){
//   if( hours > 12) {
//      hours += 0
//      day = ""
//}
// } else if (day === AM) {
//   
// }