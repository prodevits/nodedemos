// check the file existency then copy

var fs=require('fs');

const sourceFile="files/012.jpg";
const copyFile="files/cimg13.jpg";

if(fs.existsSync(sourceFile)){
    var rs=fs.createReadStream(sourceFile);
    var ws=fs.createWriteStream(copyFile);
    rs.pipe(ws);
    ws.on("finish",function(){
        console.log("File Copy Done");
        });
}else{
    console.log(sourceFile+" Not Found");    
}
