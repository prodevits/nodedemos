var path=require('path');

var p1="abc"+"\\"+"pqr"+"\\"+"hello.txt";
console.log(p1);

var p2=path.join("abc","pqr","hello.txt");

console.log(p2);
