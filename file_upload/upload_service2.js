let multer=require('multer');
let path=require("path");

// only image accepted

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

//apply filter to check the file is image of not

let upload=multer({storage:disk_storage,fileFilter: function (req, file, cb){  
    const ext=path.extname(file.originalname).toLowerCase()   
   
    if (ext==".jpg" || ext==".gif" || ext==".png" || ext==".jpeg") { 
        return cb(null, true); 
    } 
  
    cb("Error: File upload only supports the images"); 
  }}).single("photo");

module.exports=upload;