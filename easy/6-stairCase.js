


let output  = "";

for(let i = 0 ; i < 6 ; i++) {

  for(let j = 0 ; j < i; j++ ) {
    output += "#";
  }
  output += '\n'
}

console.log(output);



let input  = "";

for(let i = 5 ; i > 0 ; i--) {

  for(let j = 0 ; j < i; j++ ) {
    input += "#";
  }
  input += '\n'
}

console.log(input);


let tree  = "";

for(let i = 0 ; i < 5 ; i++) {

  for(let j = 4 ; j > i; j-- ) {
    tree +=  "";
  }
  
  for (let k = 0 ; k < i ; k ++) {
    tree += "#";
  }
  
  // for(let k = 0 ; k < )
  tree += '\n'
}

console.log(tree);



let gg = ""
// gg += " "
// gg += " "
// gg += " "
// gg += " "
// gg += " "
// gg += "#"
// gg += "\n"
// gg += " "
// gg += " "
// gg += " "
// gg += " "
// gg += "##"
// gg += "\n"
// gg += " "
// gg += " "
// gg += " "
// gg += "###"



for (let i = 0; i < 5; i ++) {
  for (let j = 4 ; j > i ; j--) {
    gg+= " "
  }
  for (let k = 0 ; k < i ; k++) {
    gg += "#"
  }
    gg += '\n'
}

console.log(gg)

function staircase(n) {
  // Write your code here
let gg = "";
  for (let i = 1; i <= n; i ++) {
    for (let j = n ; j > i ; j--) {
      gg+= " "
    }
    for (let k = 1 ; k <= i  ; k++) {
      gg += "#"
    }
      gg += '\n'
  }

  console.log(gg);

}

staircase(6)



let zz = ""
zz += " "
zz += " "
zz += " "
zz += " "
zz += " "
zz += "#"
zz += "\n"
zz += " "
zz += " "
zz += " "
zz += " "
zz += "##"
zz += "\n"
zz += " "
zz += " "
zz += " "
zz += "###"
console.log(zz)

console.log(4)

let x = ""

for (let i = 1 ;  i <= 6  ; i++) {
 for (let j = 6 ; j > i ; j --) {
  x += " "
 }
for (let g = 1 ; g <= i  ; g ++) {
  x += "#"
}
 x += "\n"
}

console.log(x)