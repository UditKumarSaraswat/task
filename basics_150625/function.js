//FUNCTION

// DIFFEERENCE OF TWO

function suboftwo(a,b){//PARAMETER
    let c = b-a; 
    return c;
}
var d = suboftwo(35,50); //ARGUMENT
console.log(d);


// SUM OF TWO WITH DECIMAL VALUES

function sumoftwo(a,b){ //PARAMETER
    return a+b;
}
var d = sumoftwo(20.5,30.5);
console.log(d);


//NESTED FUNCTION

function sumoftwo(a,b){
    let c = a+b;
    console.log(sub(a,b));
    return c;
    function sub(a,b){
        return b-a;
    }
}
var d= sumoftwo(55,80);
console.log(d);


// SCOPE OF A FUNCTION

function add(a,b){
    let c = a+b;
}
sumoftwo(4,10);
console.log(c);
//show c is not definebecause it is define inside the function

var c = 50;
function add(a,b){
    let s = a+b;
    console.log(c);//their is no error because c define globaly.
    return s;
}
console.log(add(5,15));


//CLOUSER FUNCTION

function mul(a,b){
    let mul = a*b;
    var c = mulwithsub();
    return c;
    function mulwithsub(){//in this function comes from outer function
        let  d = b-a;
        let e = mul-d;
        return e;
    }
}
console.log(mul(4,6));