function gradingStudents(grades) {

  const multiple = 5;
  let arrMultiple = [];

  let finalGrade = grades;
  for(let i = 0 ; i < 21 ;i++) {
   if( 40 < grades) {
     arrMultiple.push(i * multiple)
     if(i * multiple >= grades) {
       break;
     }
   } else if ( 40 >= grades) {
     arrMultiple.push(i * multiple)
     if(i * multiple >= grades) {
       break;
     }
   }

  }
  const lastElementArr = arrMultiple[arrMultiple.length - 1];

if( 40 <= grades ) {
if(lastElementArr - grades < 3) {
  return lastElementArr
} else if (lastElementArr - grades === 3) {
  return finalGrade;
}
  
} else if (grades >= 38 && grades <= 40) {
if (lastElementArr - grades  < 3 )  {
  return lastElementArr
}
} else  {
return finalGrade;
}


}



console.log(gradingStudents(73))