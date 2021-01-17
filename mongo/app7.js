var mongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/"
var data=[
{name:'pen',price:10,qty:13},
{name:'pencil',price:10},
{name:'notebook',price:76,qty:3},
{name:'Eraser',price:3,qty:5}
];
mongoClient.connect(url,function(err,con){
if (err)
throw err;
var db=con.db('mydb101');
db.collection('product').insertMany(data,function(err,result){
if(err)
throw err;
console.log(result.insertedCount+" Rows Inserted");
con.close();
});
});
