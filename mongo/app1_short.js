const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/', function (err, con) {
    if (err)
        throw err
    var db = con.db('mydb');
    db.collection('emp').find({city:'mumbai'}).toArray(function (err, result) {
        if (err)
            throw err

        console.log(result);
        con.close();
    })
})