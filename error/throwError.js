// in general many predefined function generate/throw error in some cases. Similarly we can also throw Error if required.
// when error thrown, remaining program terminated immidiatly

function div(a,b){
    if (b<0)
        throw new Error('Negative  divisor not allowed');

    return a/b;
}


let d=div(20,5);
console.log("Division="+d);
d=div(100,-4);
console.log("Division="+d);

console.log("Bye");