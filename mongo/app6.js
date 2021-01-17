const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/', function (err, con) {
    if (err) throw err
  
    var db = con.db('mydb')
  
    db.collection('emp').insertOne({empid:110,name:'surendra',city:'bhopal',salary:15200},function (err, result) {
      if (err) throw err
  
      console.log(result.insertedCount+" Row inserted");
      console.log("ID="+result.insertedId);
      con.close();
    })
  })