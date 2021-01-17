var fs=require('fs');

var stream=fs.createReadStream('files/sample.txt');

stream.on('data',function (data) {
    console.log(data); 
	console.log("-----------------"+data.length);
  })
  .on('end', function () {
    console.log('END FILE');
  }) 
.on('error',function(err){
	  console.log('Error In Stream Reading:');
	  console.log(err);
  });
