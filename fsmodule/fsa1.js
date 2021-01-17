let fs=require('fs');

fs.appendFile("files/hello1.txt","Hello Guest",function(err){
    if(err){
        console.log("Error ");
        console.log(err);        
    }
    else{
        console.log("Done");        
    }
});

