let multer=require('multer');
let path=require("path");


let disk_storage=multer.diskStorage(
   {   
    destination: function(req,file,cb){
        cb(null, "upload_data");
    },
    filename: function(req,file,cb){
        // Rename filename for unique
        let fileName = file.originalname.toLowerCase().split(' ').join('-'); 	
        const ext=path.extname(fileName);
        let pre=path.basename(fileName,ext);
        if(pre.length>3){
            pre=pre.substr(0,3);
        }
        fileName=pre+Date.now()+ext;
        cb(null, fileName)  
    }
   }
);


let upload=multer({storage:disk_storage});

module.exports=upload;