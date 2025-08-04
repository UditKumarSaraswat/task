let a = {
    name: "Vaibhav"
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

function square(a){
  return a*a;
}

//HIGHER ORDER FUNCTION

function cal(operation,a,b){
  return operation(a,b);
}
console.log(cal(sum,20,23));
console.log(cal(sub,7,23));
console.log(cal(mul,2,23));
console.log(cal(divide,46,23));
console.log(cal(square,15));