var url = require('url');
var adr = 'http://localhost:3000/demo.htm?name=aman&age=22&city=indore';
var q = url.parse(adr, true);

console.log("Host="+q.host); 
console.log("PATHNAME="+q.pathname); 
console.log("SEARCH (Query String)="+q.search); 
var qdata = q.query; 
console.log("-------------------------");
console.log("Query Data Object");
console.log(qdata);
console.log("-------------------------");
console.log("get field value from query object");
console.log("Age="+qdata.age); 
console.log("name="+qdata.name); 
console.log("city="+qdata.city); 


