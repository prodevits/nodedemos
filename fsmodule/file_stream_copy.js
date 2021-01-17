var fs=require('fs');

var rs=fs.createReadStream("files/012.jpg");
var ws=fs.createWriteStream("files/013.jpg");

rs.on("data",function(data){
    ws.write(data);
    console.log("copy one chunk : "+data.length);
    
}).on("end",function(){
    ws.end();
}).on("error",function(err){
    console.log(err);
});

ws.on("finish",function(){
console.log("File Copy Done");

});