// check the file existency then copy

var fs=require('fs');

const sourceFile="files/012.jpg";
const copyFile="files/cimg.jpg";

if(fs.existsSync(sourceFile)){
    var rs=fs.createReadStream(sourceFile);
    var ws=fs.createWriteStream(copyFile);
    rs.pipe(ws);
    console.log("Done");    
}else{
    console.log(sourceFile+" Not Found");    
}
