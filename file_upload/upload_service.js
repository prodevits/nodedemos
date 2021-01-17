let multer=require('multer');


let disk_storage=multer.diskStorage(
   {   
    destination: function(req,file,cb){
        cb(null, "upload_data");
    },
    filename: function(req,file,cb){
        let fileName = file.originalname.toLowerCase().split(' ').join('-'); 	
        cb(null, fileName)  
    }
   }
);

let multerObj=multer({storage:disk_storage});

module.exports=multerObj;