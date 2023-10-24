function gradingStudents(grades) {
  const multiple = 5;
  let arrMultiple = [];

  let finalGrade = grades;
  for (let i = 0; i < 21; i++) {
    if (40 < grades) {
      arrMultiple.push(i * multiple);
      if (i * multiple >= grades) {
        break;
      }
    } else if (40 >= grades) {
      arrMultiple.push(i * multiple);
      if (i * multiple >= grades) {
        break;
      }
    }
  }
  const lastElementArr = arrMultiple[arrMultiple.length - 1];

  if (40 <= grades) {
    if (lastElementArr - grades < 3) {
      return lastElementArr;
    } else if (lastElementArr - grades === 3) {
      return finalGrade;
    }
  } else if (grades >= 38 && grades <= 40) {
    if (lastElementArr - grades < 3) {
      return lastElementArr;
    }
  } else {
    return finalGrade;
  }
}

// console.log(gradingStudents(73));

//............................................................this code below scalabled.........................................................................................
// function gradingStudents(grades) {
//   // Write your code here
//   const originalGrade = [];
//   const finalGrade = [];
//   const multiple = 5;
  
//   for(let i = 0; i < grades.length ; i++) {
//       originalGrade.push(grades[i])
  
//   const multipleGrade = Math.ceil(grades[i]/multiple) * multiple;
  
 
//   if (38 <= grades[i]) {
  
//      if(multipleGrade - grades[i] < 3) {
//       finalGrade.push(multipleGrade)
//     } else {
//       finalGrade.push(originalGrade[i])
//     }
//   } else {
//       finalGrade.push(originalGrade[i])

//   }

// }
  
// return finalGrade;
// }

// const result = gradingStudents([73,67,38,33]);
// console.log(result);

//..............................................................this code below not scalable.......................................................................................

// function gradingStudents(grades) {
//   // Write your code here
//   const originalGrade = [];
//   const finalGrade = [];
//   const multiple = 5;
  
//   for(let i = 0; i < grades.length ; i++) {
//       originalGrade.push(grades[i])
  
//   const multipleGrade = Math.ceil(grades[i]/multiple) * multiple;
  
 
//   if(40 <= grades[i]) {
//     if(multipleGrade - originalGrade[i] < 3) {
//       finalGrade.push(multipleGrade)
//     } else if(multipleGrade - originalGrade[i] === 3) {
//       finalGrade.push(originalGrade[i])
//     }
//   } else if(grades[i] >= 38 && grades[i] <= 40) {
//     if (multipleGrade - originalGrade[i] < 3) {
//       finalGrade.push(multipleGrade)
//     }
//   } else {
//      finalGrade.push(originalGrade[i])
//   }

// }
  
// return finalGrade;
// }

// const result = gradingStudents([73,67,40,33]);
// console.log(result);