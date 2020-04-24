var fs=require('fs');

fs.rename("files/hello1.txt","files/demo.txt",function(err){
    if(err)
        {
            console.log("Error");
            console.log(err);            
        }
        else{
            console.log("File Rnamed Successfully");            
        }        
});