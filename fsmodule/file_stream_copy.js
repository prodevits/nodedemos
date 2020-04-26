var fs=require('fs');

var rs=fs.createReadStream("files/0122222.jpg");
var ws=fs.createWriteStream("files/cimg.jpg");

rs.on("data",function(data){
ws.write(data);
}).on("end",function(){
ws.end();
}).on("error",function(err){
console.log(err);
});

ws.on("finish",function(){
console.log("Done");

});