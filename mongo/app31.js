var mongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/"

mongoClient.connect(url,function(err,con){
	if (err)
		throw err;

	var db=con.db("mydb101");
	db.createCollection("product",function(err,res){
		if (err)
			throw err;
		console.log("Collection created");
		con.close();
	});
});
