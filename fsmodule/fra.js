let fs=require('fs');

fs.readFile("files/hello1.txt",function(err,data){
    if(err){
        console.log("Error ");
        console.log(err);        
    }
    else{
        console.log(data.toString());        
    }
});

