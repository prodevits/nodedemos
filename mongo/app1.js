const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/',{useNewUrlParser: true, useUnifiedTopology: true}, function (err, con) {
    if (err) 
      throw err  
    var db = con.db('mydb') ;
    const empCollection= db.collection('emp');
    empCollection.find({}).toArray(function (err, result) {
      if (err) 
        throw err  
      //console.log(result);

        result.forEach(e=>{
        console.log(e);  
        console.log("----------------------------");      
      })


      // result.forEach(e=>{
      //   console.log(e.name);  
      //   console.log("----------------------------");      
      // })

            con.close();
    })
  })