// JAVASCRIPT HOMEWORK 19-06-25.
let a = {
    name: "UDIT KUMAR SARASWAT"
};
console.log(a);
a = null; 
console.log(a); 

function sum(a,b){
  return a+b;
}
function mul(a,b){
  return a*b;
}
function sub(a,b){
  return a-b;
}

function divide(a,b){
  return a/b;
}

function half(a){
  return a/2;
}


//HIGHER ORDER FUNCTION

function calculation(operation,a,b){
  return operation(a,b);
}
console.log(calculation(sum,34,23));
console.log(calculation(sub,34,27));
console.log(calculation(mul,6,30));
console.log(calculation(divide,25,5));
console.log(calculation(half,34));


function tabel(a){
  for(let i=1;i<=10;i++){
      console.log(a +"*"+i+"="+a*i);
  }
}

function cube(a){
  return a*a*a;
}

function even_odd(a){
  if(a%2==0) return "Even";
  else return "Odd";
}

function helper(operation,a){
  return operation(a);
}

helper(tabel , 17);
console.log(cube(7));
console.log(even_odd(56));
console.log(even_odd(63));