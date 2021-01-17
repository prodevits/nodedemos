const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/', function (err, con) {
    if (err) throw err  
    var db = con.db('mydb')  
    var cursor=db.collection('emp').find({city:'indore'});
    cursor.project({empid:1,name:1,city:1,_id:0}).toArray(function (err, result) {
      if (err) throw err  
      console.log(result);
      con.close();
    })
  })