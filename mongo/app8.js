const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/', function (err, con) {
    if (err) throw err
  
    var db = con.db('mydb')
  
    db.collection('emp').updateOne({city:'indore'},{$set:{city:'pune',salary:45000}},function (err, result) {
      if (err) throw err
  
      console.log(result.modifiedCount+" Rows Updated");
      
      con.close();
    })
  })