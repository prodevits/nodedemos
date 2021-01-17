const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/', function (err, con) {
    if (err) throw err
  
    var db = con.db('mydb')
  
    db.collection('emp').updateMany({city:'indore'},{$inc:{salary:2000}},function (err, result) {
      if (err) throw err
  
      console.log(result.modifiedCount+" Rows Updated");
      
      con.close();
    })
  })