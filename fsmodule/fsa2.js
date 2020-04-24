let fs=require('fs');

fs.writeFile("files/hello1.txt","Hello Guest",function(err){
    if(err){
        console.log("Error ");
        console.log(err);        
    }
    else{
        console.log("---Done1---");        
    }
});


fs.writeFile("files/hello2.txt","Hello Guest Hello Guest Hello Guest Hello Guest Hello Guest Hello Guest Hello Guest Hello Guest",function(err){
    if(err){
        console.log("Error ");
        console.log(err);        
    }
    else{
        console.log("---Done2---");        
    }
});

console.log("Hello");    