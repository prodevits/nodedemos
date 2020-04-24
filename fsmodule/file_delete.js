var fs=require('fs');

fs.unlink("files/hello.txt",function(err){
    if(err)
        {
            console.log("Error");
            console.log(err);            
        }
        else{
            console.log("File Deleted");            
        }        
});