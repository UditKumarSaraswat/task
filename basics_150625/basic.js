// VARIABLES  "var" , "let" , "const"

// 1 -->  var

// IN THE var VARIABLE WE CAN REINTILIZE THE SAME VARIABLE AND OVERWRITE THE OLD VALUE OF THE VARIABLEAND THAT IS BAD THING OF VARIABLE INITILIZATE BY var.

var a = 50;
console.log(a);
a=25;
console.log(a);
var a = 10;
console.log(a);


// 2 -->  let

// WE CAN OVERWRITE A VARIABLE INTILIZE BY VARIABLE let.
// WE CAN NOT REINTILIZE THE SAME VARIABLE INTILIZE BY let .


let b = 35;
console.log(b);
b = 25;
console.log(b);
var b = 25;  //show alredy declared
console.log(b);


// 3 -->  const

// WE CAN NOT OVERWRITE A VARIABLE INTILIZE BY VARIABLE const.
// WE CAN NOT REINTILIZE THE SAME VARIABLE INTILIZE BY const. 
// WE CAN NOT CHANGE THE VALUE OF THE VARIABLE INTILIZE BY const.

const c = 65;
console.log(c);
c = 25;  //show error
console.log(a);