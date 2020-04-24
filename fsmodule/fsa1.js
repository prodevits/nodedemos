let fs=require('fs');

fs.writeFile("files/hello.txt","Hello Guest",function(err){
    if(err){
        console.log("Error ");
        console.log(err);        
    }
    else{
        console.log("Done");        
    }
});