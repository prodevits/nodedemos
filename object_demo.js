let ob={name:"Raman",age:23,city:"indore"};
let a=Object.keys(ob);
console.log("No of attributes="+a.length);
console.log(a);
for(var k of a){
    console.log(k+" : "+ob[k]);    
}

